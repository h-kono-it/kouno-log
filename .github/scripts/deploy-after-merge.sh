#!/usr/bin/env bash
#
# auto-merge が完了するのを待ってから deploy.yml を起動する。
#
# GITHUB_TOKEN が起こした push は他のワークフローをトリガーしない仕様なので、
# bot がマージした PR では deploy.yml が自動では走らない。
# workflow_dispatch はこの制限の例外なので、明示的に叩いて補う。
set -euo pipefail

PR_URL="$1"
# 必須チェック `e2e` の完了を待ってから auto-merge が走るぶん、余裕を持たせる
TIMEOUT_SECONDS=600
INTERVAL_SECONDS=10

for ((elapsed = 0; elapsed < TIMEOUT_SECONDS; elapsed += INTERVAL_SECONDS)); do
  state=$(gh pr view "$PR_URL" --json state --jq .state)
  case "$state" in
    MERGED)
      # PAT でマージした場合は main への push が PAT 名義になり deploy.yml が自分で走る。
      # GITHUB_TOKEN でマージした場合（dependabot 経路）は走らない。
      # 両方から呼ばれるので、既に走っていないかを見てから起動し、二重デプロイを避ける
      sha=$(gh api "repos/${GITHUB_REPOSITORY}/commits/main" --jq .sha)
      for ((waited = 0; waited < 60; waited += INTERVAL_SECONDS)); do
        if [ -n "$(gh run list --workflow deploy.yml --json headSha \
              --jq "[.[] | select(.headSha == \"${sha}\")] | first // empty")" ]; then
          echo "deploy.yml は push で既に起動済み (${sha})"
          exit 0
        fi
        sleep "$INTERVAL_SECONDS"
      done
      gh workflow run deploy.yml --ref main
      echo "Triggered deploy.yml"
      exit 0
      ;;
    CLOSED)
      echo "PR was closed without merging; skipping deploy"
      exit 0
      ;;
  esac
  sleep "$INTERVAL_SECONDS"
done

echo "::warning::PR was not merged within ${TIMEOUT_SECONDS}s; deploy not triggered"
