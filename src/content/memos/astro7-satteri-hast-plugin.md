---
title: Astro 7 で空の thead を消そうとしたらMarkdownプロセッサが変わっていた
description: rehypeプラグインを書いたらビルドに弾かれた。Astro 7 のデフォルトはSätteriで、hastプラグインという別のAPIになっている
pubDate: 2026-08-23
tags: [Astro, Markdown, Sätteri]
---

# Astro 7 で空の thead を消そうとしたらMarkdownプロセッサが変わっていた

このサイトの記事では、見出しのない2列の表をよく書く。

```markdown
| | |
|---|---|
| 開催日 | 2026年9月23日（水・秋分の日） |
| 会場 | 朝霞市産業文化センター |
```

Markdownの表は、**GFM（GitHub Flavored Markdown）** という書き方に沿っている。もとはGitHubが決めた拡張仕様で、表や打ち消し線、タスクリストのような「素のMarkdownには無いけど、みんなが使っているもの」がここで定義されている。Astroに限らず、たいていのツールがこれを実装している。

そのGFMの表には、**ヘッダー行を省略する書き方がない**。1行目は必ず見出しとして扱われる。だから上のように1行目を空っぽにすると、空の `<th>` がそのまま残る。

```html
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
...
```

中身がないのに行の高さを取るうえ、このサイトは [rough-table](/memos/rough-table) でテーブルのボーダーを手書き風に描いている。rough-table は `table.rows` を数えて線を引くので、**空のヘッダー行にも1本線が引かれる**。CSSで `display: none` にしても `table.rows` からは消えないため、HTMLの段階で落とすしかない。

## rehypePlugins が使えなくなっていた

`<thead>` を消すだけなら、hastを書き換えるrehypeプラグインを書いて `markdown.rehypePlugins` に足せばいい……と思って書いたら、ビルドがこう言って止まった。

```
`markdown.remarkPlugins`, `markdown.rehypePlugins`, and `markdown.remarkRehype` run on
the `unified` processor from `@astrojs/markdown-remark`, which is no longer installed
by default now that Sätteri is the default Markdown processor.
```

Astro 7 から、デフォルトのMarkdownプロセッサが **Sätteri** になっている。中身はRust製で、`node_modules` には `satteri` 本体に加えて `@bruits/satteri-darwin-arm64` のようなプラットフォーム別のネイティブバイナリが入る。

Astro 6 まで使われていた `@astrojs/markdown-remark` は、**デフォルトでは同梱されなくなった**。こちらは **unified** というJavaScript製のパイプラインの上に成り立っていて、Markdownを扱う部分を **remark**、HTMLを扱う部分を **rehype** が担当する。`rehype-slug`（見出しにidを振る）のような既製のプラグインが大量にあるのはこの世界の話。

remark/rehypeプラグインを使いたければ、これを明示的にインストールして、Markdownの処理系ごと元に戻すことになる。

Sätteriは [remark/rehypeのエコシステムを直接はサポートしていない](https://docs.astro.build/en/guides/markdown-content/)。かわりに**独自のプラグイン機構**を持っている。

## mdast と hast

Markdownが HTML になるまでは、2段階の木を通る。木というのは、文書を「見出しの中に段落があって、その中にリンクがあって……」という入れ子のデータ構造（構文木）として表したもの。文字列のままだと扱いにくいので、いったんこの形にしてから触る。

| | |
|---|---|
| mdast | Markdownの構文木（heading, paragraph, table, tableRow…） |
| hast | HTMLの構文木（h2, p, table, thead, tbody, tr, th…） |

Sätteriのプラグインもこの2種類で、`mdastPlugins` と `hastPlugins` に分かれている。

今回は**hast側でなければ書けない**。`<thead>` と `<tbody>` はmdastには存在しないからだ。mdastでのテーブルは `table > tableRow > tableCell` が並ぶだけで、「1行目がヘッダー」という扱いの差しかない。theadとtbodyに分かれるのはhastへ変換されるときなので、theadを触りたければhastまで待つ必要がある。

## 書いたもの

`@astrojs/markdown-satteri` を入れて、`markdown.processor` に渡す。プラグインやオプションを指定したいときだけ必要になるパッケージで、デフォルトのまま使うぶんにはインストールしなくていい（node_modulesには推移的依存として存在するが、pnpmは宣言していないパッケージのimportを許さないので明示的に足す）。

```js
// astro.config.mjs
import { satteri } from '@astrojs/markdown-satteri';
import satteriDropEmptyThead from './src/plugins/satteri-drop-empty-thead.mjs';

export default defineConfig({
  markdown: {
    processor: satteri({
      hastPlugins: [satteriDropEmptyThead()],
    }),
  },
});
```

プラグイン本体は、対象タグを `filter` で宣言して `visit` で木を書き換える形。

```js
export default function satteriDropEmptyThead() {
  return {
    name: 'drop-empty-thead',
    element: {
      filter: ['thead'],
      visit(node, ctx) {
        if (ctx.textContent(node).trim() !== '') return;

        const cells = childElements(node, ['tr']).flatMap((row) =>
          childElements(row, ['th', 'td'])
        );
        if (cells.length === 0 || !cells.every(isEmptyCell)) return;

        ctx.removeNode(node);
      },
    },
  };
}
```

`ctx` には `removeNode` / `replaceNode` / `wrapNode` / `setProperty` / `textContent` あたりが生えていて、これで木を編集する。

テキストが空かどうかだけで判断すると、画像だけを置いたヘッダーまで消えてしまう。子要素を持つセルは空とみなさないようにして、`| ![img](…) | |` のような表は残るようにした。

## Rust側でフィルタされる

型定義にこう書いてあるのが面白かった。

> A filtered visitor: Rust filters by tag/component name, only matched nodes cross the boundary.

木の探索そのものはRust側で走り、`filter: ['thead']` にマッチしたノードだけがJS側に渡ってくる。RustとJSは別々の世界なので、あいだでデータを受け渡すたびに変換のコストがかかる。その受け渡しを、マッチしたノードだけに絞っているということになる。unifiedだと木全体がJSのオブジェクトとして存在していて、それをJSで歩くので、ここが速度差になる。プラグインを1つ足しても全ノードがJSを経由するわけではない、という作りになっている。

`filter` が「書き方の作法」ではなく「境界を越える量そのもの」なのは、覚えておくと効きそう。

## トレードオフ

速いかわりに、remark/rehypeの膨大なエコシステムはそのままでは使えない。今回くらいの変換は自分で書けばいいが、既存のrehypeプラグインをどうしても使いたくなったら、`@astrojs/markdown-remark` を入れて `processor` をunified側に戻すことになる。Markdown処理系がまるごと入れ替わるので、そのときはシンタックスハイライトの出力などが変わらないか確認したほうがいい。

## 教訓

メジャーバージョンを上げたあと、動いているうちは何が変わったのか気づかない。`rehypePlugins` はコメントアウトされたまま設定ファイルに残っていて、久しぶりに使おうとした日に初めて「もう無い」と知った。
