# CLAUDE.md

## プロジェクト概要

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

- `src/pages/api/profile.ts` のプロフィール情報は `src/pages/profile.astro` と別管理。どちらかを更新したらもう一方も手動で合わせること。

## デプロイ

Cloudflare Pages（mainブランチpushで自動デプロイ）
