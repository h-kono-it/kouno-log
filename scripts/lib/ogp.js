import fs from 'fs/promises';
import path from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createHash } from 'crypto';

// 他人のサイトを叩くので、名乗る
const USER_AGENT = 'Mozilla/5.0 (compatible; MyPortalBot/1.0)';

// 相手が無反応でもビルドを止めないための上限
const TIMEOUT_MS = 10_000;

export function urlHash(url) {
  return createHash('sha256').update(url).digest('hex').slice(0, 8);
}

// メタタグのcontent属性はHTMLエンティティ化されている（Qiitaのog:imageは
// &amp;を含む署名付きURLのため、デコードしないと取得に失敗する）
export function decodeHtmlEntities(text) {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

// メタタグは `property` が先のサイトと `content` が先のサイトの両方があるため、
// 属性の順番違いを2パターン試す
function metaContent(html, attr, name) {
  const match =
    html.match(new RegExp(`<meta[^>]+${attr}=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')) ||
    html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${name}["']`, 'i'));
  return match ? decodeHtmlEntities(match[1]) : undefined;
}

function titleTag(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? decodeHtmlEntities(match[1]).trim() : undefined;
}

/**
 * ページのOGPメタタグを読む。取得できなければ空オブジェクトを返し、例外は投げない。
 */
export async function fetchOgData(url) {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) return {};

    const html = await response.text();

    const image = metaContent(html, 'property', 'og:image') || metaContent(html, 'name', 'twitter:image');
    const description =
      metaContent(html, 'property', 'og:description') || metaContent(html, 'name', 'description');
    const title = metaContent(html, 'property', 'og:title') || titleTag(html);
    const siteName = metaContent(html, 'property', 'og:site_name');

    return { image, description, title, siteName };
  } catch (error) {
    console.warn(`    Failed to fetch OGP from ${url}: ${error.message}`);
    return {};
  }
}

/**
 * 画像を落として自前で配信する。ホットリンクを避けるため、OGP画像は必ずこれを通す。
 * @returns 公開パス（例 `/thumbnails/foo.png`）。失敗時は undefined
 */
export async function downloadImage(imageUrl, filename, { outDir, publicPrefix }) {
  try {
    const response = await fetch(imageUrl, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) return undefined;

    const contentType = response.headers.get('content-type') || '';
    let ext = '.jpg';
    if (contentType.includes('png')) ext = '.png';
    else if (contentType.includes('gif')) ext = '.gif';
    else if (contentType.includes('webp')) ext = '.webp';
    else if (contentType.includes('svg')) ext = '.svg';

    const finalFilename = `${filename}${ext}`;
    await fs.mkdir(outDir, { recursive: true });
    await pipeline(response.body, createWriteStream(path.join(outDir, finalFilename)));

    return `${publicPrefix}/${finalFilename}`;
  } catch (error) {
    console.warn(`    Failed to download image: ${error.message}`);
    return undefined;
  }
}
