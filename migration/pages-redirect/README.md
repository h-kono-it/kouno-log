# Pages リダイレクト構成

Workers 移行後、既存の `kouno-log.pages.dev` URL を生かし続けるための最小構成。
Pages プロジェクトを削除せず、`_redirects` ファイルだけを配信する「リダイレクト番人」にする。

詳細は [issue #92](https://github.com/h-kono-it/kouno-log/issues/92) を参照。

## 事前準備

1. Workers へのデプロイが完了し、実際の URL（`kouno-log.<subdomain>.workers.dev`）が確定していること
2. `_redirects` 内の TODO を実際の URL に書き換えること

## 切り替え手順（2 つの方法のどちらか）

### 方法 A: Pages の git 連携を維持する（推奨・ダッシュボード操作のみ）

Cloudflare ダッシュボード → Pages プロジェクト `kouno-log` → Settings → Builds & deployments:

- **Build command**: 空にする
- **Build output directory**: `migration/pages-redirect`

次回の main push から、Pages は `_redirects` だけを配信するようになる。

### 方法 B: git 連携を切って直接アップロード

ダッシュボードで git 連携を解除した後:

```bash
pnpm exec wrangler pages deploy migration/pages-redirect --project-name=kouno-log
```

## 注意

- Workers 側が稼働するまでこの切り替えはしないこと（切り替えた瞬間に pages.dev は全部リダイレクトになる）
- Pages プロジェクト自体は削除しない（削除すると pages.dev URL が死ぬ）
