---
title: Cloudflare Pages上のAstroサイトでJSON APIを作る
description: Cloudflare Pages上のAstroサイトにJSON APIを追加した際のハマりどころをまとめる
pubDate: 2026-04-07
tags: [Astro, Cloudflare Pages]
---

AI CLI（Claude Codeなど）から自分のアウトプットを参照できる環境を作りたくて、kouno.logにJSON APIを追加した。追加したエンドポイントの詳細は「[kouno.log に API エンドポイントを追加しました](/news/api-endpoints)」の記事を参照。

## 実装

AstroのAPIエンドポイントは `src/pages/api/` 以下に `.ts` ファイルを置いて `GET` 関数をexportするだけでよい。既存の `feed.xml.ts` と同じ形。

```ts
export async function GET(context: APIContext) {
  const memos = await getCollection('memos', ({ data }) => !data.draft);
  // ...
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

動的ルート（`/api/memos/[id]` など）は `getStaticPaths` が必要になるが、APIとして使うなら不要なので `prerender = false` を付けてSSRにする。

```ts
export const prerender = false;
```

## ハマったこと：Cloudflare PagesでJSONがダウンロードされる

ブラウザでアクセスするとJSONが表示されず、ファイルとしてダウンロードされた。

`curl -I` でヘッダーを確認すると原因がわかった。

```
content-type: application/octet-stream
```

`prerender = false` を付けていないエンドポイントはビルド時に静的ファイルとして書き出される。Cloudflare Pagesはこのファイルを拡張子なしのバイナリとして扱うため、`application/octet-stream` で配信してしまう。

**解決策は全エンドポイントに `prerender = false` を付けること。** これでCloudflare WorkersのSSRとして動作し、レスポンスヘッダーが正しく返るようになる。

```ts
export const prerender = false;

export async function GET(context: APIContext) {
  // ...
}
```

あわせて `Content-Disposition: inline` もつけるようにした。

```ts
return new Response(JSON.stringify(data), {
  headers: {
    'Content-Type': 'application/json',
    'Content-Disposition': 'inline',
  },
});
```

このサイトはCloudflareアダプターを使ったハイブリッドレンダリング構成なので、APIとして使うルートは明示的にSSRにする必要がある、という学びだった。
