---
title: Deno Deploy を git integration に戻した
description: GitHub Actions移行後にpreview/production混在の挙動が発生し、調査の限界を感じてgit integrationに戻した
pubDate: 2026-02-27
tags: [Deno Deploy, GitHub Actions]
---

# Deno Deploy を git integration に戻した

[前回](/memos/deno-deploy-github-actions) GitHub Actionsに移行したが、その後おかしな挙動が続いたのでgit integrationに戻した。

## 起きた問題

### previewとの2重起動疑惑

GitHub Actions移行後もcronがpreview modeで動いているような挙動があった。ドキュメントには「Deno cronはpreview modeで実行されない」と書かれているが、実態が怪しい。

Deno KVに `is_preview` フラグを持たせて実験したところ、やはりpreviewっぽい環境で動作していることが示唆された。

<figure>
  <img src="/memos/deno_deploy_preview_log.png" alt="プレビューモードで起動しているように見えるログ">
  <figcaption>プレビューモードで起動しているように見えるログ</figcaption>
</figure>

### 新機能がpreviewでしか動いていない

追加した新しいcronが動作しない問題が発生。`--prod` フラグをつけてデプロイしたはずなのに、productionのインスタンスに反映されていない可能性が浮上した（未調査）。

試しにgit integrationに戻したところ、**新機能分のcronが未実行状態に戻る**という挙動があった。これはつまり、GitHub Actions期間中はpreviewのインスタンスで動いており、production側は実は古いままだったのでは、という仮説につながる。

<figure>
  <img src="/memos/run_new_cron.png" alt="cli経由でのdeploy後のcronの状態">
  <figcaption>cli経由でのdeploy後のcronの状態</figcaption>
</figure>

<figure>
  <img src="/memos/lost_succeeded.png" alt="git integrationに戻したらcronの実行完了状態が戻った">
  <figcaption>git integrationに戻したらcronの実行完了状態が戻った</figcaption>
</figure>

## 結論

Deno Deployの内部挙動はブラックボックスが多く、これ以上の調査が困難と判断してgit integrationに戻した。

`--prod` フラグをつけていても、実際にproductionとして動作しているかはDeno Deploy側の挙動に依存する。cronの実行状況など直接確認できる手段が限られており、問題の切り分けに時間がかかりすぎると判断した。

## 教訓

bot運用でDeno Deployを使うなら、preview deploymentを完全に無効化できるかを事前に確認しておくべきだった。git integrationでpreviewを切れない制約がある以上、そもそも今回の構成との相性が悪かったのかもしれない。
