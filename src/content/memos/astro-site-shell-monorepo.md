---
title: astro-site-shell をモノレポ化してコアロジックを切り出した
description: Astro コンポーネントに混在していたバニラ JS ロジックを site-shell-core として分離し、フレームワーク非依存なパッケージに切り出した話
pubDate: 2026-05-09
tags: [Astro, npm, TypeScript, monorepo]
---

# astro-site-shell をモノレポ化してコアロジックを切り出した

このサイトで使っているターミナルウィジェット [astro-site-shell](https://github.com/h-kono-it/astro-site-shell) をモノレポ化し、コアロジックを `site-shell-core` として切り出した。

ターミナルウィジェットの概要はこちら。
[astro-site-shellの概要](/news/astro-site-shell-published)

## 背景

もともとの `CliTerminal.astro` には、仮想ファイルシステム、コマンド実行、タブ補完、コマンド履歴、アニメーションといったロジックが全部バニラ JS で書かれていた。Astro 固有の処理は props のハンドリングとテンプレート挿入だけで、残りはフレームワークに依存していない。

LT会に向けて Vue に同じロジックを移植してみたところ、普通に動いた。「これ Astro にしばらなくていいな」と気づいたのがきっかけ。

## やったこと

pnpm workspace でモノレポ化し、2 つのパッケージに分けた。

```
packages/
├── site-shell-core/   # フレームワーク非依存のコアロジック
└── astro-site-shell/  # Astro 向けの薄いラッパー
```

- [site-shell-core on npm](https://www.npmjs.com/package/site-shell-core)
- [astro-site-shell on npm](https://www.npmjs.com/package/astro-site-shell)

### site-shell-core

仮想 FS、コマンド処理、タブ補完、履歴、CSS をここに集約した。エントリポイントは `attachTerminal()` 関数一本で、DOM 要素と設定を渡すだけで動く。

```ts
import { attachTerminal } from 'site-shell-core';

attachTerminal(el, {
  prompt: 'user@site',
  pages: [...],
  collections: [...],
});
```

Vue でも React でも、この関数を呼べばどのフレームワークでも使えるようになった。

### astro-site-shell

`CliTerminal.astro` は props を受け取って `attachTerminal()` を呼ぶだけの薄いラッパーになった。外向きの API（props の型・名前）は変えていないので、既存の利用者はバージョンアップするだけで動く。
