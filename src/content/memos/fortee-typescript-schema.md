---
title: forteeの非公式TypeScriptスキーマをJSRに公開した
description: 技術カンファレンス支援プラットフォームforteeのAPI型定義をZodスキーマ＋ピュアTypeScript型として公開した話
pubDate: 2026-02-09
tags: [TypeScript, JSR]
---

# forteeの非公式TypeScriptスキーマをJSRに公開した

技術カンファレンス支援プラットフォーム「fortee」のAPI型定義を、非公式のTypeScriptスキーマとしてJSRに公開した。

- JSR: https://jsr.io/@hko/fortee-typescript-schema
- GitHub: https://github.com/h-kono-it/fortee-typescript-schema

## forteeとは

forteeは技術カンファレンスの運営を支援するプラットフォームで、プロポーザル管理やタイムテーブル公開などの機能を提供している。APIも公開されているが、公式の型定義は存在しない。

## 作ったもの

fortee APIのレスポンスに対応するTypeScriptの型定義パッケージ。以下のスキーマを提供している。

- `common` – スピーカー、フィードバックなど共通型
- `proposals` – プロポーザル一覧
- `sponsors` – スポンサー情報
- `staff` – スタッフリスト
- `timetable` – タイムテーブル
- `tracks` – トラック情報

## 3つの使い方

用途に合わせて3パターンの利用方法を用意した。

1. **JSRからインストール**（推奨）：Zodスキーマとしてバリデーション付きで利用
2. **ピュアTypeScript型定義をコピー**：Zodに依存せず型だけ使いたい場合
3. **Zodスキーマを直接利用**：バリデーションロジックが必要な場合

## 技術的なポイント

- **Zodスキーマから型を生成**: `src/schemas/` にZodスキーマを定義し、`zod-to-ts` + `ts-morph` でピュアなTypeScript型定義を `dist-types/` に出力する構成
- **マルチランタイム対応**: Cloudflare Workers、Node.js、Deno、Bun、ブラウザで動作
- **JSRスコア100%**: ドキュメント・型定義・互換性すべて満点

## 開発を支えるスクリプト群

スキーマの品質を担保するために、4つのスクリプトを用意した。

### `fetch-sample` – 実データの取得

forteeのAPIからサンプルデータを取得するスクリプト。Cookie認証でアクセスし、proposals・timetable・sponsorsなど各エンドポイントのJSONを `sample/<event-slug>/` に保存する。

```bash
FORTEE_COOKIE='_session=abc123' tsx scripts/fetch-sample.ts kinoko-2026
```

取得した実データは個人情報を含むため `.gitignore` に追加してある。

### `mask` – faker.jsによるデータマスキング

サンプルデータの個人情報をダミーデータに置換するスクリプト。`@faker-js/faker` を使い、スピーカー名・Twitterアカウント・スポンサー情報などをマスキングして `sample/masked/` に出力する。

ポイントは**UUIDからseedを決定的に生成**している点。同じUUIDのスピーカーは何度マスキングしても同じダミー名になるため、差分を追いやすい。マスク後のデータに対してもZodスキーマでバリデーションを実行し、マスキングで型が壊れていないことを保証している。

### `validate` – Zodスキーマによるバリデーション

サンプルデータがZodスキーマに適合するかを一括検証する。APIのレスポンス形式が変わったらここで検知できる。

### `generate` – ピュアTypeScript型定義の生成

Zodスキーマから `zod-to-ts` を使ってピュアなTypeScript型定義ファイルを自動生成する。Zodに依存したくないユーザー向けの提供手段。

## CI/CD

GitHub Actionsで2つのワークフローを運用している。

- **Validate & Generate Types**: push/PRのたびにマスクデータのバリデーションと型生成を実行。`dist-types/` が最新かどうかを `git diff` でチェックし、差分があればCIを落とす
- **Publish to JSR**: `v*` タグのpushで `npx jsr publish` を実行し、JSRに自動パブリッシュ
