# kouno.log

note、はてなブログ、ドクセルの記事を集約した個人ポータルサイト。

## 機能

- **Recent**: 全コンテンツを日付順で表示
- **Memos**: 自分で書くメモ・記事（タグでフィルタ可能）
- **External**: 外部記事一覧（note, はてなブログ, ドクセル）
- **Links**: 外部サービスへのリンク（GitHub, Twitter, Cosense）
- 擬似ターミナル: サイト内コンテンツを擬似ターミナルコマンドで閲覧
  - https://www.npmjs.com/package/astro-site-shell
- **Products**: 作ったサービス、同人誌、ツールのリスト
- **Events**: 参加イベントリスト
- **API**: Rest APIで情報取得可能

## Memosの追加

`src/content/memos/` にMarkdownファイルを追加:

```md
---
title: 記事タイトル
description: 説明（省略可）
pubDate: 2026-01-18
tags: [tag1, tag2]
draft: false
---

本文をここに書く
```

## Linksの編集

`src/pages/index.astro` の `links` 配列を編集:

```js
const links = [
  {
    name: 'サービス名',
    url: 'https://example.com',
    description: '説明文',
  },
  // ...
];
```

## 構成

```
src/
├── content/
│   ├── memos/      # メモ書き（Markdown）
│   └── external/   # 外部記事（RSS自動取得）
├── layouts/
└── pages/
```

## コマンド

| コマンド | 説明 |
| :-- | :-- |
| `pnpm install` | 依存関係のインストール |
| `pnpm dev` | 開発サーバー起動（localhost:4321） |
| `pnpm build` | 本番ビルド |
| `node scripts/fetch-rss.js` | 外部記事の取得 |
| `pnpm tags` | Memosのタグ一覧表示 |

## 外部記事の自動取得

GitHub Actionsで毎日自動取得してコミット。mainへのマージで自動デプロイ。

## デプロイ

Cloudflare Workers
- mainブランチへのpushで `.github/workflows/deploy.yml` が `pnpm build` → `wrangler deploy` を実行
- 旧 `kouno-log.pages.dev` からのリダイレクトは `migration/pages-redirect/README.md` を参照

## ライセンス

[MIT](LICENSE)
