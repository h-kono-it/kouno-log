---
title: Cosenseに要約記事を投稿するClaude in Chrome
description: Cosenseに開いているWebページの要約を作成するClaude in Chromeの作成について
pubDate: 2026-01-20
tags: [Claude Code]
---

# Cosenseに要約記事を投稿するClaude in Chrome

Claude CodeがChrome上で動くということでお試しでショートカットを作成しました。

実際に作成してもらった記事は次の記事です。

[https://scrapbox.io/kouno-sense/オブジェクト指向は禁止するべき](https://scrapbox.io/kouno-sense/オブジェクト指向は禁止するべき)

## ざっくりとしたプロンプト

1. 要約文の作成
   1. Webページの要約とCosense記法への変換を実施
2. JavaScriptでの直接挿入
   1. 入力欄の識別がいまいちだったので、JavaScriptで挿入するフロー
3. 内容確認と修正
   1. 良さげにできていることを確認してもらって完成

詳細なプロンプト全文は次のリンクをご確認ください。

[https://scrapbox.io/kouno-sense/暫定版Claude_in_ChromeのCosense記載ショートカット](https://scrapbox.io/kouno-sense/暫定版Claude_in_ChromeのCosense記載ショートカット)

### 参考にしたもの

- [https://scrapbox.io/yamanoku/生成AIにCosense記法を書かせるプロンプト](https://scrapbox.io/yamanoku/生成AIにCosense記法を書かせるプロンプト)
- [https://scrapbox.io/rag-pub/生成AIにCosense記法を書かせるプロンプト](https://scrapbox.io/rag-pub/生成AIにCosense記法を書かせるプロンプト)
- [Claude Chrome ウェブストア](https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn)
- [Getting Started with Claude in Chrome](https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome)

## 感想

けっこう動作に時間がかかるので、ぶっちゃけ、要約文の作成だけやってもらってコピペしたほうが早い気がする

非同期でできるのはメリット。