# CLAUDE.md

## プロジェクト概要

GitHub: https://github.com/h-kono-it/kouno-log

**kouno.log** - Astro製の個人ポータルサイト。note、はてなブログ、ドクセルの記事を集約。

## コマンド

- `pnpm dev` - 開発サーバー
- `pnpm build` - ビルド
- `node scripts/fetch-rss.js` - 外部記事を取得

## 構成

- `src/content/memos/` - 自分で書くメモ（Markdown）
- `src/content/external/` - 外部記事（RSS自動取得、JSON）
- `scripts/fetch-rss.js` - RSS取得スクリプト（FEEDS配列で設定）
- `.github/workflows/fetch-external.yml` - 毎日自動取得

## 注意事項

- プロフィール情報は `src/data/profile.ts` が唯一のデータソース。`src/pages/profile.astro` と `src/pages/api/profile.ts` はどちらもここから import する。

## デプロイ

Cloudflare Workers（mainブランチpushで `.github/workflows/deploy.yml` が `wrangler deploy` を実行）

- 旧 `kouno-log.pages.dev` は Pages プロジェクトを `migration/pages-redirect/` の `_redirects` のみ配信に切り替えて 301 リダイレクト（詳細は `migration/pages-redirect/README.md`）
