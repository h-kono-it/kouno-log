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
- `src/components/SearchPalette.astro` - サイト内検索（⌘K）。索引は `src/pages/search-index.json.ts` が配る素のJSONからブラウザ側で組む。日本語のトークナイズとAND→ORフォールバックは npm の [ja-bigram-tokenizer](https://github.com/h-kono-it/ja-bigram-tokenizer)（自作）にあるので、検索の当たり方を変えたいときはそちらを直す

## 注意事項

- プロフィール情報は `src/data/profile.ts` が唯一のデータソース。`src/pages/profile.astro` と `src/pages/api/profile.ts` はどちらもここから import する。

## デプロイ

Cloudflare Workers（mainブランチpushで `.github/workflows/deploy.yml` が `wrangler deploy` を実行）

- 旧 `kouno-log.pages.dev` は Pages プロジェクトを `migration/pages-redirect/` の `_redirects` のみ配信に切り替えて 301 リダイレクト（詳細は `migration/pages-redirect/README.md`）

## CI

- main は GitHub ruleset「branch-protect」で `e2e` を required status check にしてある。E2Eが落ちたPRはマージできない。**この設定はリポジトリ内のファイルに現れない**ので、確認は `gh api repos/h-kono-it/kouno-log/rulesets/12274110`、更新は PATCH ではなく **PUT**
- 毎日の外部コンテンツ更新PRは `GITHUB_TOKEN` で作られるため pull_request では e2e.yml が走らない（`action_required` で止まる）。必須チェックを埋めるために `fetch-external.yml` が `gh workflow run e2e.yml --ref "$BRANCH"` で明示起動してから `--auto` でマージしている。ワークフローを増やして必須チェックを足すときは、このbot経路でもチェックが埋まるか確認すること
