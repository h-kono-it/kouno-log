---
title: Blume に Issue と PR を出したら全部拾ってもらえた話
description: 静的サイトジェネレーター Blume に出した4本の Issue / PR と、それぞれどう着地したかのまとめ
pubDate: 2026-07-22
tags: [Blume, OSS]
---

# Blume に Issue と PR を出したら全部拾ってもらえた話

[Blume](https://useblume.dev/) は Astro + Vite ベースの Markdown ファーストな静的サイトジェネレーター。「Fast, AI-ready, zero-config」がコンセプトで、`docs/` に Markdown を置くだけで、ナビゲーション・全文検索・テーマ・OG 画像生成・llms.txt 出力まで込みのドキュメントサイトが立ち上がる。ファイルパスがそのまま URL になり、frontmatter と `meta.ts` で並び順やメタ情報を制御する。Astro の [Starlight](https://starlight.astro.build/) あたりが近いジャンルだけど、AI 向けの出力（llms.txt や Ask AI）が最初から組み込まれているのが今風なところ。作者は [Hayden Bleasel](https://github.com/haydenbleasel)（OpenAI）。

その Blume で、法務の逆引きリファレンスサイトを作っている。**Blume は 2026/7/13 に v1（1.0.0）が出たばかり**で、自分が触り始めたのもその直後。できたてなので穴もそれなりにあって、日本語で運用していると、英語圏だけで使っていたら踏まないような小さなものにちょくちょく当たる。正直、枯れたツールだったらここまで Issue も PR も投げなかったと思う。できたてで作者が活発に動いている今なら拾ってもらえそう——という読みもあって、当たったものを片っ端から Issue / PR にしていったら、1週間で4本、全部拾ってもらえた。

結果的に「バグ報告だけ」から「テスト付きの修正 PR」まで、自分の関わり方が少しずつ育っていく流れになったので記録しておく。

## 出したもの

| # | 種別 | 内容 | 着地 |
|---|---|---|---|
| [#62](https://github.com/haydenbleasel/blume/issues/62) | Issue | OG 画像の CJK が豆腐になる | `seo.og.fonts` として実装、1.1.0 |
| [#71](https://github.com/haydenbleasel/blume/pull/71) | PR | redirects と `deployment.base` のドキュメントの穴 | コード修正に化けてマージ、1.1.0 |
| [#78](https://github.com/haydenbleasel/blume/issues/78) | Issue | changelog の日付が i18n ロケールを無視 | メンテナが自分で修正、1.1.0 |
| [#89](https://github.com/haydenbleasel/blume/pull/89) | PR | `blume audit` の llms.txt 誤検知 | 修正 + テストでマージ、1.1.1 |

## #62 OG画像のCJKが豆腐になる（機能リクエスト）

最初に踏んだのがこれ。ページごとに自動生成される OG 画像で、日本語タイトルが全部 □□□ の豆腐になる。Blume が内部で使っている [Takumi](https://takumi.kane.tw/) のデフォルトフォント（Geist）が Latin しかカバーしていないのが原因で、追加フォントを読み込む設定が `blume.config.ts` のどこにもなかった。

ローカルにフォントを置いて `Renderer` に食わせれば直る、というところまで自分で検証して、その proof-of-concept を添えて機能リクエストとして出した。

面白かったのが、Takumi 側のメンテナ（[kane50613](https://github.com/kane50613)）が「ちょうど v2 に上げてるところで Google Fonts ヘルパーが使えるようになるから、それでいける」とスレッドに乗ってきたこと。結果、実装は自分が提案した「ローカルフォントのパス指定」ではなく、**フォント名を書くだけで Google Fonts からビルド時に取ってくる**という、もっと良い形で着地した。

```ts
// blume.config.ts
seo: {
  og: {
    fonts: [
      "Noto Sans JP",
      { name: "Inter", weight: [400, 700] },
    ],
  },
}
```

自分の PoC より綺麗な設計に化けて返ってきたのは、素直に嬉しかった。回避策じゃなくて設定サーフェスとして生えたので、他の非 Latin 圏のユーザーもそのまま恩恵を受けられる。

## #71 redirectsのドキュメントの穴（初めてのマージされたPR）

GitHub Pages のサブパス配信でページを移動したとき、ビルドは通るのに redirect が base の外を指して 404 する、という静かなハマり方をした。`from` には base が付くのに `to` には付かない。`to` に手で base を書けば直る——というのが Astro 側の[意図的な挙動](https://github.com/withastro/astro/issues/7774)だったので、「ドキュメントにその注記がない」という docs PR として出した。

これがちょっと予想外の着地をした。メンテナが「回避策をドキュメントで説明するんじゃなくて、原因を直すべき」と判断して、**PR の主旨をひっくり返すコミットを乗せてマージ**した。つまり「`to` に base を手で書け」ではなく、「Blume が `to` にも base を自動で付ける」ようにコードが直った。自分が書いた注記は、最終的に逆の意味の文章になった。

> Thanks for this — the diagnosis was right, and the report was good enough to fix the cause rather than document it.

自分の書いた diff はほぼ残らなかったけど、「診断が正しかったから原因を直せた」と言ってもらえたのが良かった。これが Blume への初めてのマージになった。

## #78 changelogの日付がロケールを無視（バグ報告）

ページ下部の「最終更新」は i18n ロケールに従って `2026年7月16日` と出るのに、changelog のタイムラインだけ日付が `July 15, 2026` と英語で出る。同じサイトに2言語の日付が混在していた。

コードを追うと、片方は `locale || "en"`、もう片方は `"en"` 決め打ちになっていた。再現手順と、2つのフォーマッタのファイル位置まで添えて Issue にした。「もし changelog は英語読者向けという意図なら、それはそれで一つの立場なので確認したい」と、断定しない形で聞いた。

メンテナがコミット履歴まで遡って「意図的な `en` ではなく、changelog タイムラインを足した3日後に i18n が入って、この片方だけ取り残された結果ドリフトした」と原因を突き止めて、その場で修正してくれた。

> Appreciate the offer to send a PR — it was a small enough change that it was faster to just do it, but the diagnosis in your report is what made it a one-liner. Please do keep them coming.

「PR は自分で出しちゃったけど、あなたの診断のおかげで one-liner で済んだ。どんどん送って」と言ってもらえた。この時点ではまだ「良い再現を出す人」ポジションで、自分でも返信に「次は repro じゃなくて PR を持って来ます😄」と書いていた。

## #89 blume auditの誤検知（テスト付きの修正PR）

そして次に踏んだのがこれ。1.1.0 で追加された `blume audit` を試したら、「llms.txt がビルドに存在しないページを指している」と警告が出た。でも指されている `changelog/rss.xml` はちゃんとビルド出力に存在する。

これは 1.1.0 の2つの新機能が噛み合った誤検知だった。llms.txt が RSS フィードへのリンクを含むようになった一方で、`LLMS_TXT_STALE_ENTRY` チェックは各エントリを `context.byUrl`（＝ HTML ページだけ）に照合していた。だから**ジェネレータが自分で吐いたフィードリンクを、自分の audit が毎回叩く**構造になっていた。

前回「次は PR で」と言った手前もあり、今回は原因の特定・修正・テスト・changeset まで揃えた完全な PR として出した。修正は「静的ファイルの index も served set に含める」という、既存の `resolveRedirects` と同じ発想の一行。実サイトのビルドで警告が消えることを確認して添えた。

> Thanks for this one — it's a model bug report *and* fix in a single PR.

これは 1.1.1 としてリリースされた。#78 で「次は PR を持って来る」と言ったことを、次のラウンドでそのまま実行できたのは自分でも気持ちよかった。

## 感想

- 日本語で運用していると、良い報告のネタが自然に集まる。OG の豆腐も日付の混在も、英語圏だけで使っていたら気づかれにくい。踏んだ側が一番きれいに直せる。
- 再現手順を丁寧に書くと、修正が一行になる。4本とも「diagnosis が良かった」という趣旨のことを言ってもらえた。コードを書くより、原因を正確に説明することの方が効いていた気がする。
- 提案がそのまま通らなくても良い。#62 は自分の PoC より綺麗な形に、#71 は主旨が反転してマージされた。それでも「正しく困って、正しく説明する」ことには価値があった。
- 何より、Blume はメンテナのレスポンスが速くて丁寧で、コントリビュートしていて気持ちのいいプロジェクトだった。これからも使っていく。

それと、他のPRs/Iseesを見ると地味に日本からコミットしている人も多くて、ちょっと励みになった。
