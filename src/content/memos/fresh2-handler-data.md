---
title: Fresh 2 のハンドラーからページコンポーネントへのデータの渡し方
description: "Fresh 2 でハンドラーからページコンポーネントにデータを渡すには `{ data: { ...実際のデータ } }` という構造にする必要がある"
pubDate: 2026-04-08
tags: [Fresh, Deno, TypeScript]
---

Fresh 2 (`@fresh/core@^2.2.2`) でハンドラーからページコンポーネントにデータを渡す方法がドキュメントに明記されておらず、ソースを読んで初めて分かったのでメモ。

## 結論

GET ハンドラーの戻り値は **`{ data: { ...実際のデータ } }`** という構造にする必要がある。

```typescript
// ❌ 動かない
export const handlers = define.handlers({
  async GET(ctx) {
    const tasks = await listTasks();
    return { tasks }; // data プロップが undefined になる
  },
});

// ✅ 正しい
export const handlers = define.handlers({
  async GET(ctx) {
    const tasks = await listTasks();
    return { data: { tasks } }; // ← data でラップする
  },
});

export default define.page<typeof handlers>(function Page({ data }) {
  const tasks = data?.tasks ?? [];
  // ...
});
```

## なぜそうなるのか

Fresh 2 の `src/segments.ts` の `renderRoute` 関数を見ると分かる。

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

ハンドラーの戻り値 `res` のうち、ページコンポーネントの `props`（= `data` prop）として渡されるのは **`res.data`** だけ。

`return { tasks }` と書いた場合、`res.data` は `undefined` になるため、ページ側で `data?.tasks` を参照しても何も得られない。

## デバッグの手がかり

`return` を省略（= `undefined` を返す）した場合は次のエラーが出る。

```
TypeError: Cannot read properties of undefined (reading 'status')
    at renderRoute (https://jsr.io/@fresh/core/2.2.2/src/segments.ts:151)
```

`renderRoute` が `res.status` を読もうとして `undefined` でクラッシュする。このエラーを手がかりにソースを読むと `res.data` の仕様に気づける。

## 戻り値の完全な型イメージ

```typescript
// GET ハンドラーが返せる形
type HandlerResult<Data> =
  | Response           // リダイレクト・エラーなど
  | {
      data?: Data;     // ページコンポーネントの data prop
      status?: number; // HTTP ステータス（省略時 200）
      headers?: HeadersInit;
    };
```

## 環境

- `@fresh/core`: `2.2.2`
- `@fresh/plugin-vite`: `1.0.8`
- Deno: `2.7.11`
