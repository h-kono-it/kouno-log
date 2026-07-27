#!/usr/bin/env bash
#
# auto-merge が完了するのを待ってから deploy.yml を起動する。
#
# GITHUB_TOKEN が起こした push は他のワークフローをトリガーしない仕様なので、
# bot がマージした PR では deploy.yml が自動では走らない。
# workflow_dispatch はこの制限の例外なので、明示的に叩いて補う。
set -euo pipefail

PR_URL="$1"
TIMEOUT_SECONDS=300
INTERVAL_SECONDS=10

for ((elapsed = 0; elapsed < TIMEOUT_SECONDS; elapsed += INTERVAL_SECONDS)); do
  state=$(gh pr view "$PR_URL" --json state --jq .state)
  case "$state" in
    MERGED)
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
