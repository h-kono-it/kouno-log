---
title: 新Deno DeployでCronが使えるようになったので使ってみた
description: 旧Deno Deploy（classic）との違いとして、Cronのデバッグが格段に楽になった点をまとめる
pubDate: 2026-03-22
tags: [Deno Deploy, Cron]
---

# 新Deno DeployでCronが使えるようになったので使ってみた

新しいDeno DeployでCronを試してみた。旧Deno Deploy（classic）と比べてデバッグ周りが大きく改善されている。

## 旧Deno Deploy（classic）との違い

### デバッグがとても楽になった

旧Deno Deployではcronの動作確認が非常に困難だったが、新Deno Deployでは以下の点が改善されている。

**ログをCronの設定ごとに見られるようになった**

どのcronが何を出力したのかが一目でわかるようになった。旧環境では全ログが混在していたため、特定のcronの挙動を追うのが大変だった。

<figure>
  <img src="/memos/new-deno-deploy-log.png" alt="ログの表示画面。TraceID単位で表示されるため、cronの実行単位でログを確認できる。">
  <figcaption>ログの表示画面。TraceID単位で表示されるため、cronの実行単位でログを確認できる。</figcaption>
</figure>

**GUI上からRun Nowができるようになった**

管理画面から任意のタイミングで手動実行できる。次のスケジュール実行を待たずに動作確認できるのはかなり便利。

<figure>
  <img src="/memos/new-deno-deploy-run-now.png" alt="Deno CronのRun Now（即時実行）ボタン">
  <figcaption>Deno CronのRun Now（即時実行）ボタン</figcaption>
</figure>

**Tracesが見られるようになった**

実行のトレース情報が確認できるようになった。エラーが起きたときに原因を特定しやすくなっている。

<figure>
  <img src="/memos/new-deno-deploy-trace.png" alt="Traceの表示画面。全体の実行などを見ることができる。">
  <figcaption>Traceの表示画面。全体の実行などを見ることができる。</figcaption>
</figure>
