---
title: 手書き風テーブルライブラリ「rough-table」を作った
description: Rough.jsを使ってHTMLテーブルに手書き風ボーダーを描画するvanilla JSライブラリを公開した
pubDate: 2026-04-02
tags: [javascript, oss, rough-table]
---

# 手書き風テーブルライブラリ「rough-table」を作った

HTMLテーブルのボーダーを手書き風に描画するvanilla JSライブラリ **[rough-table](https://www.npmjs.com/package/rough-table)** を公開した。

## 何ができるのか

[Rough.js](https://roughjs.com/) を使って、テーブルのボーダーをSVGで手書き風に描画する。クラスを1つ追加するだけで動く。

```html
<table class="rough-table">
  <thead>
    <tr><th>Item</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Design</td><td>Done</td></tr>
    <tr><td>Implementation</td><td>In progress</td></tr>
  </tbody>
</table>
```

## 設計の肝

「スケッチ風テーブル」を実現するライブラリはいくつかあるが、たいていはテキストも含めてcanvasやSVG上に全部描画してしまう。これだと：

- スクリーンリーダーが読めない
- テキスト選択できない
- リンクが機能しない

rough-tableは **元の `<table>` 要素をそのままDOMに残す**。描画するのはボーダーだけで、SVGオーバーレイとして `pointer-events: none` で背面に敷く。

```
┌─────────────────────────────┐
│  SVG overlay（ボーダーのみ）  │  ← pointer-events: none
│  ┌──────────────────────┐   │
│  │  元の<table>（そのまま）│  │  ← テキスト・リンク・構造を保持
│  └──────────────────────┘   │
└─────────────────────────────┘
```

セマンティクスを壊さず、見た目だけ変えるというのがコンセプト。

## 使い方

### npmインストール

```bash
npm install rough-table
```

### CDN（ビルドステップなし）

```html
<script src="https://unpkg.com/roughjs@latest/bundled/rough.js"></script>
<script src="https://unpkg.com/rough-table/rough-table.min.js"></script>
```

### Markdownパーサーやブログ向け（outerラッパー）

テーブルに直接クラスを付けられない環境（CMSやMarkdown等）では、外側の要素にクラスを付けるパターンも使える。

```html
<div class="rough-table-outer" data-mode="solid" data-border="rows">

| Item | Status |
|------|--------|
| Design | Done |
| Implementation | In progress |

</div>
```

## オプション

`data-*` 属性で細かく調整できる。

| 属性 | 説明 | デフォルト |
|---|---|---|
| `data-mode` | `cell`（セル単位）/ `solid`（外枠→内線） | `solid` |
| `data-border` | `full` / `outer` / `inner` / `rows` | `full` |
| `data-roughness` | 線の荒さ | `1.5` |
| `data-stroke` | 線の色 | `#444` |
| `data-stroke-width` | 線の太さ | `2` |
| `data-bowing` | 線のたわみ | `1` |

`data-border="rows"` で水平線のみにすると、かなりナチュラルな印象になる。

## リサイズ対応

`ResizeObserver` を使っているので、ウィンドウリサイズ時にSVGが自動で再描画される。レスポンシブレイアウトでも崩れない。

---

npmに公開済みなので、使ってみてフィードバックもらえると嬉しい。
