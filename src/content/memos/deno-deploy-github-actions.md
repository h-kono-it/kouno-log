---
title: Deno Deploy の auto deploy を GitHub Actions に移行した
description: cron駆動のDiscord botでpreview deploymentが失敗し続けるため、GitHub Actions経由のproduction deployに切り替えた
pubDate: 2026-02-22
tags: [Deno Deploy, GitHub Actions]
---

# Deno Deploy の auto deploy を GitHub Actions に移行した

## 背景

`Deno.cron()` と `Deno.openKv()` を使ったDiscord botをDeno Deploy (classic) で運用していた。

## 問題

Deno DeployのGitHub連携（auto deploy）を使っていると、PRを出すたびにpreview deploymentが走る。しかしこのbotはHTTPエンドポイントがなく、cronベースの起動のためpreviewでは動作しない。

Deno Deployのログには毎回こんなエラーが出ていた。

```
Crons are not supported for preview deployments. Cron jobs will not be executed in this context.
isolate start time: 35.68 ms
```

`Deno.cron()` を含むコードをpreviewにデプロイしようとして `ISOLATE_INTERNAL_FAILURE` になっていた。加えてPRのチェック欄に `@deno-deploy — Failed to deploy` が常に出るのも地味につらい。

## 対応

Deno KVに依存しているためDeno Deploy自体は維持しつつ、デプロイのトリガーをGitHub Actionsに移行した。

```
Before: GitHub push → Deno Deploy auto deploy（preview含む）
After:  GitHub push to main → GitHub Actions → Deno Deploy（productionのみ）
```

### 試行錯誤

`denoland/deployctl` GitHub Action (v1.13.1) はOIDC専用の設計で、`token` を `with:` で渡せない。OIDC認証を試みたがトークン取得自体が失敗した。

```
Error: Failed to get the GitHub OIDC token.
```

そこでGitHub Actionのラッパーを使わず、`deployctl` CLIを直接 `deno run` で呼ぶ方法に切り替え。`DENO_DEPLOY_TOKEN` を環境変数で渡せばトークン認証できる。

ただし `deployctl` はデフォルトでpreviewとしてデプロイするため、そのままでは同じエラーが発生する。**`--prod` フラグを追加して production deployment として直接デプロイすることで解決した。**

## 最終的な構成

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: denoland/setup-deno@v2
        with:
          deno-version: v2.x
      - name: Deploy to Deno Deploy
        run: deno run -Ar jsr:@deno/deployctl deploy --project=<project-name> --prod main.ts
        env:
          DENO_DEPLOY_TOKEN: ${{ secrets.DENO_DEPLOY_TOKEN }}
```

Deno Deploy側はプロジェクトの Settings → Git → デプロイモードを **GitHub Actions** に変更し、GitHubのSecretsに `DENO_DEPLOY_TOKEN` を登録するだけ。

## まとめ

| | auto deploy（before） | GitHub Actions（after） |
|---|---|---|
| PR時の挙動 | preview deployが走る | 何も起きない |
| mainマージ時 | production deploy | GitHub Actions経由でproduction deploy |
| PRチェック | `@deno-deploy Failed` が出る | 出ない |

cron駆動・画面なしのbotにpreview deploymentは不要。`--prod` フラグ一つで解決した。通常のWebサービスと違い、botはPRレビューでコードチェックが完結しているので、mainマージ時点で即production deployするのがシンプルでよい。
