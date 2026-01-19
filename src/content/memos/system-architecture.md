---
title: kouno.logのシステム構成
description: このサイトの技術スタックと構成について
pubDate: 2026-01-18
tags: [astro, cloudflare]
---

# kouno.logのシステム構成

このサイトの技術スタックについてまとめます。

## 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **ホスティング**: Cloudflare Pages
- **パッケージマネージャー**: pnpm

## コンテンツ管理

Astro の Content Collections を使用しています。

### Memos

技術メモ用。Markdown で記述します。

```
src/content/memos/
├── system-architecture.md  # この記事
└── ...
```

### News

お知らせ用。同じく Markdown です。

```
src/content/news/
├── hello-world.md
└── ...
```

### External

外部記事（note, はてなブログ, Docswell）を JSON で管理しています。
GitHub Actions で毎日 RSS を取得して自動更新されます。

```
src/content/external/
├── 2026-01-10-note-xxx.json
└── ...
```

## 自動デプロイ

- main ブランチへの push で Cloudflare Pages に自動デプロイ
- 毎日 GitHub Actions で外部記事を自動取得
