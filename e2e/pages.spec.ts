import { test, expect } from '@playwright/test';

test.describe('共通レイアウト', () => {
  test('ナビゲーションが全ページで表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header a[href="/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/profile"]')).toBeVisible();
    await expect(page.locator('nav a[href="/products"]')).toBeVisible();
    await expect(page.locator('nav a[href="/memos"]')).toBeVisible();
    await expect(page.locator('nav a[href="/external"]')).toBeVisible();
  });

  test('フッターが表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer a[href="/feed.xml"]')).toBeVisible();
  });
});

test.describe('トップページ (/)', () => {
  test('ページタイトルが正しい', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('kouno.log');
  });

  test('h1が表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main h1')).toContainText('About');
  });
});

test.describe('メモ一覧 (/memos)', () => {
  test('ページタイトルが正しい', async ({ page }) => {
    await page.goto('/memos');
    await expect(page).toHaveTitle(/Memos/);
  });

  test('h1が表示される', async ({ page }) => {
    await page.goto('/memos');
    await expect(page.locator('main h1')).toContainText('Memos');
  });

  test('記事リストが表示される', async ({ page }) => {
    await page.goto('/memos');
    await expect(page.locator('main')).toBeVisible();
    const articles = page.locator('main a[href^="/memos/"]');
    await expect(articles.first()).toBeVisible();
  });

  test('タグフィルターに件数が表示される', async ({ page }) => {
    await page.goto('/memos');
    const filter = page.locator('.tag-filter');
    await expect(filter.locator('.filter-btn[data-tag=""]')).toHaveText('All');
    await expect(filter.locator('.filter-btn[data-tag]').nth(1)).toContainText(/\(\d+\)$/);
  });

  test('「もっと見る」で残りのタグを展開できる', async ({ page }) => {
    await page.goto('/memos');
    const toggle = page.locator('#tag-toggle');
    const extraBtn = page.locator('#extra-tags .filter-btn').first();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(extraBtn).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(extraBtn).toBeVisible();
    await toggle.click();
    await expect(extraBtn).toBeHidden();
  });
});

test.describe('外部記事一覧 (/external)', () => {
  test('ページタイトルが正しい', async ({ page }) => {
    await page.goto('/external');
    await expect(page).toHaveTitle(/External/);
  });

  test('h1が表示される', async ({ page }) => {
    await page.goto('/external');
    await expect(page.locator('main h1')).toContainText('External');
  });

  test('フィルターボタンが表示される', async ({ page }) => {
    await page.goto('/external');
    await expect(page.locator('.filter-btn[data-filter="all"]')).toBeVisible();
  });
});

test.describe('プロフィール (/profile)', () => {
  test('ページタイトルが正しい', async ({ page }) => {
    await page.goto('/profile');
    await expect(page).toHaveTitle(/Profile/);
  });

  test('プロフィール情報が表示される', async ({ page }) => {
    await page.goto('/profile');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('main h1')).toBeVisible();
  });
});

test.describe('プロダクト一覧 (/products)', () => {
  test('ページタイトルが正しい', async ({ page }) => {
    await page.goto('/products');
    await expect(page).toHaveTitle(/Products/);
  });

  test('h1が表示される', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('main h1')).toContainText('Products');
  });
});

test.describe('ニュース (/news)', () => {
  test('ページタイトルが正しい', async ({ page }) => {
    await page.goto('/news');
    await expect(page).toHaveTitle(/News/);
  });

  test('h1が表示される', async ({ page }) => {
    await page.goto('/news');
    await expect(page.locator('main h1')).toContainText('News');
  });
});

test.describe('アーカイブ (/archive)', () => {
  test('ページが表示される', async ({ page }) => {
    const response = await page.goto('/archive');
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator('main')).toBeVisible();
  });
});
