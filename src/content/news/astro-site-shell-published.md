---
title: このサイトのCLIターミナルをnpmパッケージとして公開しました
description: トップページの擬似CLIターミナルをastro-site-shellとしてnpmに公開しました。
pubDate: 2026-05-07
---

# このサイトのCLIターミナルをnpmパッケージとして公開しました

トップページに設置している擬似CLIターミナルを、**[astro-site-shell](https://www.npmjs.com/package/astro-site-shell)** としてnpmに公開しました。

## インストール

```bash
npm install astro-site-shell
```

## 概要

Astroで作ったサイトのコンテンツを、CLIっぽいインターフェースで探索できるコンポーネントです。`ls`、`cd`、`cat`、`grep` などのコマンドが使えます。

コレクション（記事一覧）とページをpropsで渡すだけで動きます。

```astro
---
import { CliTerminal } from 'astro-site-shell';
import { getCollection } from 'astro:content';

const posts = await getCollection('posts');
---

<CliTerminal
  prompt="you@mysite"
  pages={[{ name: 'about', url: '/about', title: 'About' }]}
  collections={[
    {
      name: 'posts',
      entries: posts.map(p => ({
        name: p.id,
        url: `/posts/${p.id}`,
        title: p.data.title,
        pubDate: p.data.pubDate,
        body: p.body,
      })),
    },
  ]}
/>
```

リポジトリは **[h-kono-it/astro-site-shell](https://github.com/h-kono-it/astro-site-shell)** です。
