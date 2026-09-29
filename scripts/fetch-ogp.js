/**
 * 記事中の「裸のリンク」のOGPを取得して、キャッシュJSONに溜めるスクリプト。
 *
 * ビルド時に外部サイトを叩くとビルドが相手の生死に依存するので、取得はこのスクリプトだけが行う。
 * 結果はリポジトリにコミットし、レンダリング側（src/plugins/satteri-link-card.mjs）は
 * キャッシュを読むだけにしてある。fetch-rss.js と同じ「取ってコミットする」方式。
 *
 *   node scripts/fetch-ogp.js                 未取得のURLだけ取る
 *   node scripts/fetch-ogp.js --retry-failed  前回失敗したURLも再挑戦する
 *   node scripts/fetch-ogp.js --force         全URLを取り直す
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchOgData, downloadImage, urlHash } from './lib/ogp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIRS = [
  path.join(__dirname, '../src/content/memos'),
  path.join(__dirname, '../src/content/news'),
];
const CACHE_FILE = path.join(__dirname, '../src/data/ogp-cache.json');

// Astroのcontent layerはMarkdownのレンダリング結果をここに溜める。カードはレンダリング時に
// キャッシュJSONを読んで差し込まれるので、.mdが変わっていないとこのストアが再利用され、
// OGPを取り直してもカードが更新されない。中身が変わったときだけ捨てる
// （types.d.ts などを巻き込まないよう、ディレクトリごとではなくこのファイルだけを消す）。
//
// 置き場が2つあるのが罠で、dev（astro dev）は .astro/、build は node_modules/.astro/ を使う。
// 片方だけ消すと「ビルドしたら出るのに dev では出ない」という食い違いになるので両方消す
const ASTRO_DATA_STORES = [
  path.join(__dirname, '../.astro/data-store.json'),
  path.join(__dirname, '../node_modules/.astro/data-store.json'),
];
// public/ogp/ には手で置いたOG画像があるので、自動生成ぶんは混ぜずに分ける
const IMAGES_DIR = path.join(__dirname, '../public/ogp-cards');
const PUBLIC_PREFIX = '/ogp-cards';

// 自分のサイトへのリンクをカード化しても意味がないので外す
const OWN_HOSTS = ['kouno-log.hkono.workers.dev', 'kouno-log.pages.dev'];

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const RETRY_FAILED = args.includes('--retry-failed');

async function walkMarkdown(dir) {
  const files = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walkMarkdown(full)));
    else if (entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith('---')) return markdown;
  const end = markdown.indexOf('\n---', 3);
  return end === -1 ? markdown : markdown.slice(end + 4);
}

/**
 * 段落に単独で置かれたURLだけを拾う。文中のリンクはカード化すると読めなくなるので対象外。
 * コードブロックの中身も当然除く。
 */
export function extractBareLinks(markdown) {
  const urls = [];
  let inFence = false;

  for (const rawLine of stripFrontmatter(markdown).split('\n')) {
    const line = rawLine.trim();

    if (line.startsWith('```') || line.startsWith('~~~')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = line.match(/^<?(https?:\/\/[^\s<>]+?)>?$/);
    if (!match) continue;

    const url = match[1];
    if (OWN_HOSTS.includes(new URL(url).host)) continue;
    urls.push(url);
  }

  return urls;
}

async function loadCache() {
  try {
    return JSON.parse(await fs.readFile(CACHE_FILE, 'utf-8'));
  } catch {
    return {};
  }
}

function needsFetch(entry) {
  if (!entry) return true;
  if (FORCE) return true;
  if (RETRY_FAILED && entry.ok === false) return true;
  return false;
}

async function main() {
  const files = (await Promise.all(CONTENT_DIRS.map(walkMarkdown))).flat();

  const urls = new Set();
  for (const file of files) {
    for (const url of extractBareLinks(await fs.readFile(file, 'utf-8'))) urls.add(url);
  }
  console.log(`Found ${urls.size} bare links in ${files.length} markdown files.`);

  const cache = await loadCache();

  // 記事から消えたURLはキャッシュごと落とす（画像も一緒に）
  let pruned = 0;
  for (const url of Object.keys(cache)) {
    if (urls.has(url)) continue;
    const image = cache[url]?.image;
    if (image) {
      await fs.rm(path.join(__dirname, '..', 'public', image), { force: true });
    }
    delete cache[url];
    pruned++;
    console.log(`  Pruned: ${url}`);
  }

  let fetched = 0;
  let failed = 0;

  for (const url of urls) {
    if (!needsFetch(cache[url])) continue;

    console.log(`  Fetching: ${url}`);
    const og = await fetchOgData(url);

    if (!og.title) {
      // タイトルすら取れないサイト（botにOGPを返さない、JS必須など）は諦めて素のリンクに任せる
      cache[url] = { ok: false, fetchedAt: new Date().toISOString() };
      failed++;
      continue;
    }

    let image;
    if (og.image) {
      image = await downloadImage(og.image, urlHash(url), {
        outDir: IMAGES_DIR,
        publicPrefix: PUBLIC_PREFIX,
      });
    }

    cache[url] = {
      title: og.title,
      host: new URL(url).host,
      fetchedAt: new Date().toISOString(),
    };
    if (og.description) cache[url].description = og.description.slice(0, 200);
    if (og.siteName) cache[url].siteName = og.siteName;
    if (image) cache[url].image = image;

    fetched++;
  }

  // URL順に並べて書くことで、取得順のせいで無駄な差分が出ないようにする
  const sorted = Object.fromEntries(Object.keys(cache).sort().map((url) => [url, cache[url]]));

  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, `${JSON.stringify(sorted, null, 2)}\n`);

  if (fetched + failed + pruned > 0) {
    await Promise.all(ASTRO_DATA_STORES.map((store) => fs.rm(store, { force: true })));
    // 起動中の astro dev はストアをメモリに持っているので、消しただけでは反映されない
    console.log('Dropped Astro content caches. Restart `astro dev` if it is running.');
  }

  console.log(
    `\nDone! ${fetched} fetched, ${failed} failed, ${pruned} pruned, ${Object.keys(sorted).length} cached.`
  );
}

// 直接実行されたときだけ走らせる（テストからのimportを邪魔しない）
if (process.argv[1] && import.meta.url === new URL(process.argv[1], 'file:').href) {
  main().catch(console.error);
}
