import { test, expect, devices } from '@playwright/test';

test.describe('検索パレット', () => {
  test('初期状態では閉じている', async ({ page }) => {
    await page.goto('/');
    // CSSで無条件に display を与えるとUAスタイルの
    // dialog:not([open]) { display: none } に勝ってしまい開きっぱなしになる
    await expect(page.locator('#search-dialog')).toBeHidden();
  });

  test('ヘッダーの検索ボタンで開く', async ({ page }) => {
    await page.goto('/');
    // タッチ端末側の「案内を出さない」テストと対になる表明。
    // 両方あることで、隠す条件が広すぎ／狭すぎのどちらにもズレたら落ちる
    await expect(page.locator('#search-kbd')).toBeVisible();

    await page.locator('#search-trigger').click();
    await expect(page.locator('#search-dialog')).toBeVisible();
    await expect(page.locator('#search-input')).toBeFocused();
    await expect(page.locator('.search-hint')).toBeVisible();
  });

  test('Ctrl+K で開いて Esc で閉じる', async ({ page }) => {
    const dialog = page.locator('#search-dialog');

    await page.goto('/');
    await page.locator('body').click();

    // devサーバー起動直後はviteが依存の再最適化でfull reloadをかけることがあり、
    // その瞬間に押したキーはリスナーごと消えて誰にも拾われない。
    // click と違って keyboard.press は自動リトライしないので、押し直しで吸収する。
    // 開いているときに押すと閉じてしまうため、押す前に状態を見る。
    await expect(async () => {
      if (!(await dialog.isVisible())) {
        await page.keyboard.press('Control+k');
      }
      await expect(dialog).toBeVisible({ timeout: 1000 });
    }).toPass({ timeout: 15_000 });

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('本文の語で記事が引ける', async ({ page }) => {
    await page.goto('/');
    await page.locator('#search-trigger').click();
    await page.locator('#search-input').fill('文字bigram');

    const results = page.locator('#search-results li');
    await expect(results.first()).toBeVisible();
    await expect(page.locator('#search-status')).toContainText('件');
    // タイトルに無く本文にだけある語で引けることを確認する
    await expect(results.first().locator('a')).toHaveAttribute('href', /.+/);
  });

  test('矢印キーで結果を選択できる', async ({ page }) => {
    await page.goto('/');
    await page.locator('#search-trigger').click();
    await page.locator('#search-input').fill('Astro');
    await expect(page.locator('#search-results li').first()).toBeVisible();

    await page.keyboard.press('ArrowDown');
    await expect(page.locator('#search-results li.is-active')).toHaveCount(1);
  });

  test('一致しない語では0件と表示される', async ({ page }) => {
    await page.goto('/');
    await page.locator('#search-trigger').click();
    await page.locator('#search-input').fill('カピバラ');
    await expect(page.locator('#search-status')).toContainText('一致する記事はありません');
  });
});

test.describe('検索パレット（タッチ端末）', () => {
  // devices[...] をそのまま使うと defaultBrowserType が入って describe 内で使えない。
  // hover: none / pointer: coarse を再現するのに要るのはこの3つだけ
  test.use({ viewport: devices['iPhone 13'].viewport, hasTouch: true, isMobile: true });

  test('物理キーボードが無い端末ではキー操作の案内を出さない', async ({ page }) => {
    await page.goto('/');
    // ⌘K は押しようがないので出してはいけない
    await expect(page.locator('#search-kbd')).toBeHidden();

    await page.locator('#search-trigger').tap();
    await expect(page.locator('#search-dialog')).toBeVisible();
    await expect(page.locator('.search-hint')).toBeHidden();
  });

  test('タップで開いて検索できる', async ({ page }) => {
    await page.goto('/');
    await page.locator('#search-trigger').tap();
    await page.locator('#search-input').fill('Blume');
    await expect(page.locator('#search-results li').first()).toBeVisible();
  });
});
