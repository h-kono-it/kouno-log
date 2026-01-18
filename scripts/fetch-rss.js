import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

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
];

const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'thumbnail'],
      ['enclosure', 'enclosure'],
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

  // 4. コンテンツ内の最初の画像
  const content = item['content:encoded'] || item.content || '';
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
  if (imgMatch) return imgMatch[1];

  return undefined;
}

async function fetchOgImage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MyPortalBot/1.0)',
      },
    });
    if (!response.ok) return undefined;

    const html = await response.text();

    // og:imageを探す
    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

    if (ogMatch) return ogMatch[1];

    // twitter:imageも試す
    const twitterMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i);

    if (twitterMatch) return twitterMatch[1];

    return undefined;
  } catch (error) {
    console.warn(`    Failed to fetch OGP from ${url}: ${error.message}`);
    return undefined;
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
      if (!item.title || !item.link || !item.pubDate) {
        console.warn(`  Skipping invalid item: ${item.title || 'no title'}`);
        continue;
      }

      const data = {
        title: item.title,
        url: item.link,
        pubDate: new Date(item.pubDate).toISOString(),
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
    const baseFilename = `${date}-${item.source}-${slug}`;

    console.log(`  Processing: ${item.title.slice(0, 40)}...`);

    // サムネイル取得: RSS → OGP → なし
    let thumbnailUrl = item.thumbnailUrl;
    if (!thumbnailUrl) {
      console.log(`    Fetching OGP from page...`);
      thumbnailUrl = await fetchOgImage(item.url);
    }

    // 画像をダウンロードして保存
    let localThumbnail;
    if (thumbnailUrl) {
      console.log(`    Downloading thumbnail...`);
      localThumbnail = await downloadImage(thumbnailUrl, baseFilename);
    }

    // JSONデータ作成
    const jsonData = {
      title: item.title,
      url: item.url,
      pubDate: item.pubDate,
      source: item.source,
    };
    if (item.description) jsonData.description = item.description;
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
