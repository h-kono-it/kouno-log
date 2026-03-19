import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createHash } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../src/content/external');
const THUMBNAILS_DIR = path.join(__dirname, '../public/thumbnails');

// ========================================
// 設定: ここにRSSフィードのURLを追加
// ========================================
const FEEDS = [
  { url: 'https://note.com/hk_it7/rss', source: 'note' },
  { url: 'https://hk-it.hatenablog.com/rss', source: 'hatena' },
  { url: 'https://www.docswell.com/user/hk_it7/feed', source: 'docswell' },
  { url: 'https://b.hatena.ne.jp/hk_it/bookmark.rss?tag=myposts', source: 'toralab' },
];

const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'thumbnail'],
      ['enclosure', 'enclosure'],
      ['dc:date', 'dcDate'],
    ],
  },
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 50);
}

function urlHash(url) {
  return createHash('sha256').update(url).digest('hex').slice(0, 8);
}

function extractThumbnailFromRss(item) {
  // 1. media:thumbnail
  if (item.thumbnail) {
    if (typeof item.thumbnail === 'string') return item.thumbnail;
    if (item.thumbnail.$?.url) return item.thumbnail.$.url;
  }
  
  // 2. media:content (Docswell用)
  if (item.mediaContent && item.mediaContent.$?.url) {
    return item.mediaContent.$.url;
  }

  // 3. enclosure
  if (item.enclosure?.url) return item.enclosure.url;

  // 4. コンテンツ内の最初の画像（faviconは除外）
  const content = item['content:encoded'] || item.content || '';
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/g);
  if (imgMatch) {
    for (const img of imgMatch) {
      const src = img.match(/src="([^"]+)"/)[1];
      if (!src.includes('favicon')) return src;
    }
  }

  return undefined;
}

async function fetchOgData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MyPortalBot/1.0)',
      },
    });
    if (!response.ok) return {};

    const html = await response.text();

    // og:image / twitter:image
    const ogImageMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    const twitterImageMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i);

    // og:description
    const ogDescMatch = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:description["']/i);

    return {
      image: ogImageMatch?.[1] || twitterImageMatch?.[1],
      description: ogDescMatch?.[1],
    };
  } catch (error) {
    console.warn(`    Failed to fetch OGP from ${url}: ${error.message}`);
    return {};
  }
}

async function downloadImage(imageUrl, filename) {
  try {
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MyPortalBot/1.0)',
      },
    });
    if (!response.ok) return undefined;

    const contentType = response.headers.get('content-type') || '';
    let ext = '.jpg';
    if (contentType.includes('png')) ext = '.png';
    else if (contentType.includes('gif')) ext = '.gif';
    else if (contentType.includes('webp')) ext = '.webp';

    const finalFilename = `${filename}${ext}`;
    const filePath = path.join(THUMBNAILS_DIR, finalFilename);

    await pipeline(response.body, createWriteStream(filePath));

    return `/thumbnails/${finalFilename}`;
  } catch (error) {
    console.warn(`    Failed to download image: ${error.message}`);
    return undefined;
  }
}

async function fetchFeed(feedConfig) {
  const { url, source } = feedConfig;
  console.log(`Fetching: ${url}`);

  try {
    const feed = await parser.parseURL(url);
    const items = [];

    for (const item of feed.items) {
      const pubDate = item.pubDate || item.dcDate;
      if (!item.title || !item.link || !pubDate) {
        console.warn(`  Skipping invalid item: ${item.title || 'no title'}`);
        continue;
      }

      const data = {
        title: item.title,
        url: item.link,
        pubDate: new Date(pubDate).toISOString(),
        source,
        description: item.contentSnippet?.slice(0, 200) || undefined,
        thumbnailUrl: extractThumbnailFromRss(item),
      };

      // undefinedのフィールドを削除
      Object.keys(data).forEach((key) => {
        if (data[key] === undefined) delete data[key];
      });

      items.push(data);
    }

    console.log(`  Found ${items.length} items`);
    return items;
  } catch (error) {
    console.error(`  Error fetching ${url}:`, error.message);
    return [];
  }
}

async function main() {
  if (FEEDS.length === 0) {
    console.log('No feeds configured. Add feeds to FEEDS array in scripts/fetch-rss.js');
    return;
  }

  // 出力ディレクトリを確保
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(THUMBNAILS_DIR, { recursive: true });

  // 全フィードを取得
  const allItems = [];
  for (const feed of FEEDS) {
    const items = await fetchFeed(feed);
    allItems.push(...items);
  }

  // 既存のファイルを読み込んで重複を避ける
  const existingUrls = new Set();
  try {
    const files = await fs.readdir(OUTPUT_DIR);
    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const content = await fs.readFile(path.join(OUTPUT_DIR, file), 'utf-8');
      const data = JSON.parse(content);
      existingUrls.add(data.url);
    }
  } catch {
    // ディレクトリが空の場合など
  }

  // 新しいアイテムを保存
  let newCount = 0;
  for (const item of allItems) {
    if (existingUrls.has(item.url)) continue;

    const date = item.pubDate.slice(0, 10);
    const slug = slugify(item.title);
    const baseFilename = `${date}-${item.source}-${slug}-${urlHash(item.url)}`;

    console.log(`  Processing: ${item.title.slice(0, 40)}...`);

    // サムネイル取得: RSS → OGP → なし
    // toralabはog:descriptionも取得するため常にOGPフェッチ
    let thumbnailUrl = item.thumbnailUrl;
    let ogDescription;
    if (!thumbnailUrl || item.source === 'toralab') {
      console.log(`    Fetching OGP from page...`);
      const ogData = await fetchOgData(item.url);
      if (!thumbnailUrl) thumbnailUrl = ogData.image;
      ogDescription = ogData.description;
    }

    // 画像をダウンロードして保存
    let localThumbnail;
    if (thumbnailUrl) {
      console.log(`    Downloading thumbnail...`);
      localThumbnail = await downloadImage(thumbnailUrl, baseFilename);
    }

    // JSONデータ作成
    const description = item.source === 'toralab'
      ? ogDescription?.slice(0, 200)
      : item.description;
    const jsonData = {
      title: item.title,
      url: item.url,
      pubDate: item.pubDate,
      source: item.source,
    };
    if (description) jsonData.description = description;
    if (localThumbnail) jsonData.thumbnail = localThumbnail;

    await fs.writeFile(
      path.join(OUTPUT_DIR, `${baseFilename}.json`),
      JSON.stringify(jsonData, null, 2)
    );
    newCount++;
  }

  console.log(`\nDone! Added ${newCount} new items.`);
}

main().catch(console.error);
