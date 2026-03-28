---
title: chira-ura.netの技術スタック
description: 個人サイトプラットフォーム「チラ裏」の技術選定と構成を解説
pubDate: 2026-03-28
tags: [nuxt, hono, supabase, cloudflare]
---

# chira-ura.netの技術スタック

「綺麗すぎるインターネット」へのアンチテーゼとして作った個人サイトプラットフォーム [chira-ura.pages.dev](https://chira-ura.pages.dev/) を公開した。オタクが好きなことを好きなだけ書き殴れる、牧歌的な空間を目指している。

この記事では技術選定の理由と全体構成を解説する。

## 構成図

```
[Browser]
    │
    │ HTTPS
    ▼
[Cloudflare Pages]
    │
    ├── Static Assets（/_nuxt/*）
    │
    └── Workers Function（Nitro サーバーバンドル）
            │
            ├── Pages / SSR（Nuxt ページレンダリング）
            │
            └── Nitro Middleware
                    │
                    ▼
               [Hono Router]（/api/*）
                    │
                    ▼
            [Supabase Cloud]
            ├── PostgreSQL
            └── Auth（Google OAuth）
```

すべて **Cloudflare Pages の1デプロイ**に収まっている。ホスティングから SSR、API まで一気通貫な構成だ。

## 技術スタック

| 技術 | バージョン | 用途 |
| --- | --- | --- |
| Nuxt | 4.x | フルスタックフレームワーク |
| Vue | 3.x | UI レイヤー |
| TypeScript | 5.x | 型システム |
| Hono | 4.x | API ルーティング・バリデーション |
| TipTap | 2.x | WYSIWYG エディタ |
| Tailwind CSS | 4.x | スタイリング |
| Supabase | 2.x | DB (PostgreSQL) + Auth (Google OAuth) |
| Cloudflare Pages | - | ホスティング・Workers ランタイム |
| pnpm | 9.x | パッケージ管理 |

本番ランタイムは **Cloudflare Workers（V8 isolates）**。Node.js はローカル開発専用で、本番は一切使わない。

## 各技術の選定理由

### Nuxt 4

フルスタックフレームワークとして採用。`nitro: { preset: 'cloudflare-pages' }` を指定するだけで Cloudflare Pages にネイティブ対応できる。

Nuxt 4 の `app/` / `server/` / `shared/` のディレクトリ分離が今回のアーキテクチャとうまく噛み合っている。`shared/` で API の型定義をフロント・サーバー間で共有できるのも大きい。

Vue のテンプレート構文は HTML に近く、チラ裏の「ちょっと装飾的な個人サイト感」を出す UI を書くのに自然にマッチした。

### Hono（Nitro ミドルウェア統合）

API レイヤーとして Nuxt の `server/api/*.ts` ではなく Hono を採用した。

`server/middleware/hono.ts` で Hono アプリを Nitro イベントハンドラとして登録する構成にしている。`toWebHandler(app)` を使って H3 の受信イベントを Web API 標準の `Request` オブジェクトにブリッジする。

#### DBアクセスを Hono に閉じ込める

この構成の核心は「**Supabase への直接アクセスをクライアントから排除する**」という思想だ。

Supabase は RLS（Row Level Security）でデータアクセスを制御できる。anon key をブラウザに公開しても RLS がある限り他人のデータは取れない——それ自体は正しい。ただし、それだけだと RLS のポリシーミスが即座に本番障害につながる。

そこで **Hono をデータアクセスの唯一の入口**として設計した。クライアント（Vue）は Hono の API エンドポイントとだけ通信し、Supabase の存在を意識しない。

```
[Browser]
    │
    ▼
[Hono] ← バリデーション・認証チェック・ビジネスロジック
    │
    ▼
[Supabase]
```

これにより多層防御が成立する：

- **第1層 — Hono**: リクエストバリデーション（Zod）、認証トークン検証、ビジネスロジック
- **第2層 — Supabase RLS**: データベース側でも認証ユーザーのアクセス範囲を制限

RLS を「保険」として機能させつつ、実態としては Hono 側で制御する。RLS に単独で頼らない設計なので、ポリシーのバグが即座に穴になるリスクを下げられる。

また Hono にアクセスを集約することで、将来的なビジネスロジックの変更（レート制限・監査ログ・サービス移行）もすべて Hono 側で吸収できる。

#### DX 面の採用理由

- **`zValidator`** によるルートレベルのリクエストバリデーション（Zod ベース）
- **`hono/client`** による型安全な RPC クライアントが Vue composables からそのまま使える

Edge ランタイム設計で Node.js 依存ゼロなので、Cloudflare Workers との相性も抜群。

### TipTap 2.x

WYSIWYG エディタとして採用。Extension ベースのアーキテクチャなので、Bold / Color / FontSize / Underline だけロードしてバンドルサイズを抑えられる。

データフローはシンプルに「HTML 文字列を出力 → Supabase に保存 → `v-html` で表示」。Quill と比較して開発が活発でカスタマイズ性も高い。

ただし TipTap は SSR 非対応なので `<ClientOnly>` ラッパーで囲む必要がある。

### Tailwind CSS v4

CSS ファースト設定方式で `tailwind.config.js` が不要になった。`@nuxtjs/tailwindcss` モジュールで統合している。

### Supabase

PostgreSQL + Row Level Security（RLS）の組み合わせが強力。認証連動のデータアクセス制御をデータベース側で完結できる。

Supabase Auth が Google OAuth のトークン交換を処理してくれるので、認証実装コードを最小限に抑えられた。セッション管理は `@supabase/ssr` パッケージで Cookie ベースに統一している。

DB へのアクセスはすべて Hono 経由に統一している。クライアント（Vue）は Supabase を直接叩かず、Hono の API エンドポイントとだけ通信する。Hono 内では service role key を使って Supabase にアクセスし、この key はクライアントに絶対に露出させない。

RLS はあくまで「第2層の保険」として機能させる設計で、実際のアクセス制御の主体は Hono 側に置いている。

### Cloudflare Pages

- **コールドスタートなし**: Workers の V8 isolates で即レスポンス
- **無料枠が潤沢**: 100,000 リクエスト/日
- Nitro の `cloudflare-pages` プリセットが `_worker.js` + 静的アセットを出力し、CF Pages の期待する形式にそのまま一致

Vercel と比べてエッジネットワークの低レイテンシと関数実行時間の制限なしが優位だった。

## ディレクトリ構造

Nuxt 4 の `app/` / `server/` / `shared/` 分離に準拠している。

```
chira-ura/
├── app/                     ← クライアントサイド
│   ├── components/
│   │   └── editor/
│   │       └── TipTapEditor.vue
│   ├── composables/
│   │   ├── useSupabase.ts
│   │   └── useAuth.ts
│   ├── pages/
│   │   ├── index.vue        ← トップ（ランダムジャンプボタン）
│   │   ├── login.vue
│   │   └── [username]/
│   │       ├── index.vue    ← ユーザー日記一覧
│   │       └── [postId].vue ← 個別投稿表示
│   └── stores/
│       └── auth.ts
│
├── server/                  ← サーバーサイド
│   ├── middleware/
│   │   └── hono.ts          ← Hono → Nitro ブリッジ
│   └── routes/
│       └── hono/
│           ├── posts.ts
│           ├── auth.ts
│           └── links.ts
│
└── shared/                  ← フロント・サーバー共有
    └── types/
        └── api.ts           ← Hono RPC 用型定義
```

## まとめ

個人サイトプラットフォームとしては少し重厚な構成かもしれないが、全部入りで1デプロイに収まる気持ちよさがある。型安全な API（Hono RPC）、認証込みのデータ層（Supabase）、エッジで動く SSR（Cloudflare Workers）——この3つが噛み合うと開発体験がかなり良い。
