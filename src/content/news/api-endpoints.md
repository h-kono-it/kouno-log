---
title: kouno.log に API エンドポイントを追加しました
description: AI CLI からコンテンツを参照できる JSON API を追加しました
pubDate: 2026-04-07
---

kouno.log に JSON API を追加しました。

## 追加したエンドポイント

| エンドポイント | 説明 |
|---|---|
| `GET /api/help` | エンドポイント一覧 |
| `GET /api/profile` | プロフィール情報 |
| `GET /api/search?q=...` | memos / news / external の横断検索 |
| `GET /api/memos` | メモ一覧 |
| `GET /api/memos/[id]` | メモ詳細（本文含む） |
| `GET /api/news` | ニュース一覧 |
| `GET /api/news/[id]` | ニュース詳細（本文含む） |
| `GET /api/external` | 外部記事一覧 |
| `GET /api/external/[id]` | 外部記事詳細 |

## 作った意図

AI CLI（Claude Code など）から「最近何を書いた？」「Kotlin に関係するメモはある？」のように自分のアウトプットを自然に参照できる環境を作りたかった。

`/api/help` を起点に AI がエンドポイント構造を自己発見できるようにしてあるので、MCP サーバーや AI エージェントとの連携がしやすい設計になっています。
