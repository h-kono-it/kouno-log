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

- main は GitHub ruleset「branch-protect」で `e2e` を required status check にしてある。落ちたPRはマージできない。**この設定はリポジトリ内のファイルに現れない**ので、確認は `gh api repos/h-kono-it/kouno-log/rulesets/12274110`、更新は PATCH ではなく **PUT**
- **必須チェック `e2e` は `ci.yml` のジョブID**。ファイル名（`ci.yml`）でも workflow の `name:`（`CI`）でもなく、check run 名＝ジョブIDが ruleset の context になる。中身は lint → build → E2E だが、名前を変えると ruleset と `fetch-external.yml` の両方を同時に直す必要があるので据え置いてある
- lint と build は `ci.yml` の `e2e` ジョブに step として入れてある。**別ジョブに切り出して `needs:` でぶら下げてはいけない**。GitHub は required status check の skipped を成功扱いにするため、lint が落ちて `e2e` が skip されるとマージゲートがザルになる
- 毎日の外部コンテンツ更新PRは **secret `BOT_PAT`（fine-grained PAT）** で push / PR 作成する。`GITHUB_TOKEN` だと pull_request が発火せず `ci.yml` が走らないため。PAT名義なら普通にチェックが回るので、`--auto` に渡す前に rollup を確認するガードだけ残してある。**PATが切れたらこのワークフローは `exit 1` で止まる**（黙ってマージ不能になるより良い）
- **`workflow_dispatch` で必須チェックを埋める方法は使わないこと。** 2026-09-13 の PR #169 で、dispatch した run のチェックが PR の `statusCheckRollup` に載らなくなった。head SHA 上には `e2e` が success で存在し、check suite も PR に紐づいているのに rollup にだけ現れず、PR が `MERGEABLE` かつ `BLOCKED` で詰まる。2回 dispatch しても同じだった。ruleset は無関係（最終更新 2026-08-21 で、これが機能していた 08-31 より前）。原因は GitHub 側の挙動変更か `e2e.yml`→`ci.yml` の rename か確定できていないが、どちらにせよ dispatch 経路は信用できない
- それ以前は「`action_required` の空 run を消してから dispatch」で凌いでいた（消さないと空 check suite が rollup を上書きして `e2e` が存在しない扱いになる）。PAT移行でこの機械は不要になったが、**dependabot 経路は今も `GITHUB_TOKEN`** なので、bot PR まわりを触るときはこの手の落とし穴を思い出すこと
- 詰まりの調査は `gh pr view <n> --json statusCheckRollup` と `gh api repos/h-kono-it/kouno-log/commits/<sha>/check-suites` を突き合わせる。前者に無くて後者にあるなら、この空 suite 上書きを疑う
