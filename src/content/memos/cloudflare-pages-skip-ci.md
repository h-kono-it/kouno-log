---
title: Cloudflare Pagesのデプロイがスキップされていた件
description: コミットメッセージに[Skip CI]をつけるとCloudflare Pagesのデプロイがスキップされる
pubDate: 2026-01-27
tags: [Cloudflare Pages]
---

# Cloudflare Pagesのデプロイがスキップされていた件

GitHub Actionsでの自動リンク更新時に `[skip ci]` をコミットメッセージにつけていたところ、Cloudflare Pagesのデプロイもスキップされていた。

![Cloudflare Pagesでスキップされている様子](/memos/cloudflare-ci-skip.png)

## 原因

Cloudflare Pagesには、コミットメッセージのプレフィックスでビルドをスキップする機能がある。

> Without any configuration required, you can choose to skip a deployment on an ad hoc basis. By adding the [CI Skip], [CI-Skip], [Skip CI], [Skip-CI], or [CF-Pages-Skip] flag as a prefix in your commit message, and Pages will omit that deployment. The prefixes are not case sensitive.

ドキュメントには「プレフィックスとして」と書かれているが、実際にはコミットメッセージ内に含まれていればスキップされる模様。

実際にスキップされたコミットメッセージの例：

- `chore: update external content [skip ci]`
- `fix: remove [skip ci] to enable Cloudflare deployment`

以下のフラグが対象（大文字小文字は区別しない）：

- `[CI Skip]`
- `[CI-Skip]`
- `[Skip CI]`
- `[Skip-CI]`
- `[CF-Pages-Skip]`

参考: [Skipping a build via a commit message | Cloudflare Pages docs](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/#skipping-a-build-via-a-commit-message)

## 対応

GitHub Actionsのワークフローでコミットメッセージから `[skip ci]` を削除した。
