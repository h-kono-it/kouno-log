import { test, expect, type Page } from '@playwright/test';

// OG画像は satori → resvg-wasm という、このサイトで最も壊れやすい経路を通る。
// ページを見ても build を通しても踏まれないので、ここで叩かないと
// 本番でOGが出なくなるまで壊れに気づけない。

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// og:image は本番の絶対URLで埋まる（Layout.astro が site を前置する）。
// そのまま取りに行くと本番を叩いてしまうので、パスだけ取り出して baseURL 側に投げる。
async function ogImagePathOfFirstArticle(page: Page, listPath: string, prefix: string) {
  await page.goto(listPath);
  const href = await page.locator(`main a[href^="${prefix}"]`).first().getAttribute('href');
  expect(href, `${listPath} に記事リンクが無い`).toBeTruthy();

  await page.goto(href!);
  const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  expect(ogImage, `${href} に og:image が無い`).toBeTruthy();

  return new URL(ogImage!).pathname;
}

// PNGのIHDRチャンクは必ず先頭にあり、幅と高さがビッグエンディアンで並ぶ。
// ここまで読めればレンダリングが実際に成立していると言える。
function pngSize(body: Buffer) {
  return { width: body.readUInt32BE(16), height: body.readUInt32BE(20) };
}

for (const { label, listPath, prefix, ogPrefix } of [
  { label: 'メモ', listPath: '/memos', prefix: '/memos/', ogPrefix: '/og/memos/' },
  { label: 'ニュース', listPath: '/news', prefix: '/news/', ogPrefix: '/og/news/' },
]) {
  test.describe(`OG画像（${label}）`, () => {
    test('記事ページのog:imageが生成済みのPNGを指している', async ({ page, request }) => {
      const path = await ogImagePathOfFirstArticle(page, listPath, prefix);
      // 既定の /ogp_kouno_log.png に退化していないこと
      expect(path).toContain(ogPrefix);

      const response = await request.get(path);
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toBe('image/png');

      const body = await response.body();
      // satori が例外を投げるとAstroがHTMLのエラーページを200で返すことがあるため、
      // ステータスではなく中身がPNGであることで判定する
      expect(body.subarray(0, 8)).toEqual(PNG_SIGNATURE);
      expect(pngSize(body)).toEqual({ width: 1200, height: 630 });
    });
  });
}
