---
title: kouno.logのシステム構成
description: このサイトの技術スタックと構成について
pubDate: 2026-01-19
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

## OG画像の動的生成

memos と news の記事ページでは、OG画像を動的に生成しています。

### 使用ライブラリ

- **[Satori](https://github.com/vercel/satori)**: HTML/CSS から SVG を生成
- **[BudouX](https://github.com/nickmessing/budoux)**: 日本語の改行位置を最適化
- **[@resvg/resvg-wasm](https://github.com/nickmessing/resvg-js)**: SVG から PNG に変換

### 仕組み

1. ビルド時に `/og/memos/[id].png` と `/og/news/[id].png` が静的に生成される
2. 各記事ページの `<meta property="og:image">` でこの画像を参照
3. タイトルは BudouX で日本語の改行位置を自動調整

### デザイン

- 1200x630 サイズ（OGP 推奨サイズ）
- オフホワイト背景にタイトルを中央配置
- 左下にアイコン、右下にサイト名

## 自動デプロイ

- main ブランチへの push で Cloudflare Pages に自動デプロイ
- 毎日 GitHub Actions で外部記事を自動取得
