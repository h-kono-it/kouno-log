---
title: Fresh 2 のハンドラーからページコンポーネントへのデータの渡し方
description: "Fresh 2 でハンドラーからページコンポーネントにデータを渡すには `page()` ヘルパーを使う"
pubDate: 2026-04-08
tags: [Fresh, Deno, TypeScript]
---

Fresh 2 (`@fresh/core@^2.2.2`) でハンドラーからページコンポーネントにデータを渡す方法がドキュメントに明記されておらず、ソースを読んで初めて分かったのでメモ。

## 結論

`"fresh"` からエクスポートされている **`page()` ヘルパーを使う**のが正しい方法。

```typescript
// ❌ 動かない
export const handlers = define.handlers({
  async GET(ctx) {
    const tasks = await listTasks();
    return { tasks }; // data プロップが undefined になる
  },
});

// ✅ 正しい（ドキュメント記載の方法）
import { page } from "fresh";

export const handlers = define.handlers({
  async GET(ctx) {
    const tasks = await listTasks();
    return page({ tasks }); // ← page() でラップする
  },
});

export default define.page<typeof handlers>(function Page({ data }) {
  const tasks = data?.tasks ?? [];
  // ...
});
```

`page()` の第2引数でレスポンスのカスタマイズもできる：

```typescript
return page(data, {
  status: 201,
  headers: { "Cache-Control": "public, max-age=3600" },
});
```

## なぜそうなるのか

`page()` ヘルパーが `{ data: ..., status: ..., headers: ... }` という構造のオブジェクトを生成し、Fresh 2 の内部処理がそれを読み取る。

Fresh 2 の `src/segments.ts` の `renderRoute` 関数：

```typescript
// https://jsr.io/@fresh/core/2.2.2/src/segments.ts
const res = await fn(ctx); // ハンドラーを呼ぶ

if (res instanceof Response) {
  return res; // Response なら即返す
}

// ...（status や headers の処理）

// ページコンポーネントに渡す props は res.data
const result = await renderRouteComponent(ctx, {
  component: route.component,
  props: res.data as any, // ← ここ
}, () => null);
```

ページコンポーネントの `data` prop として渡されるのは **`res.data`** だけ。

`page({ tasks })` は `{ data: { tasks } }` を返すので正しく渡る。  
`return { tasks }` と書いた場合、`res.data` は `undefined` になるため何も渡されない。

## デバッグの手がかり

`return` を省略（= `undefined` を返す）した場合は次のエラーが出る。

```
TypeError: Cannot read properties of undefined (reading 'status')
    at renderRoute (https://jsr.io/@fresh/core/2.2.2/src/segments.ts:151)
```

`renderRoute` が `res.status` を読もうとして `undefined` でクラッシュする。このエラーを手がかりにソースを読むと `page()` の仕様に気づける。

## 戻り値の完全な型イメージ

```typescript
// GET ハンドラーが返せる形
type HandlerResult<Data> =
  | Response           // リダイレクト・エラーなど
  | {
      data?: Data;     // ページコンポーネントの data prop（page() が生成）
      status?: number; // HTTP ステータス（省略時 200）
      headers?: HeadersInit;
    };
```

## 環境

- `@fresh/core`: `2.2.2`
- `@fresh/plugin-vite`: `1.0.8`
- Deno: `2.7.11`
