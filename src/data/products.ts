export type ProductCategory = 'book' | 'app' | 'library' | 'tool';

export interface Product {
  name: string;
  url: string;
  description: string;
  tags: string[];
  repo: string | null;
  relatedMemo: string | null;
  category: ProductCategory;
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  book: '同人誌',
  app: 'Webアプリ・サービス',
  library: 'ライブラリ・npm',
  tool: '小さなツール',
};

export const CATEGORY_ORDER: ProductCategory[] = ['book', 'app', 'library', 'tool'];

export const products: Product[] = [
  {
    name: 'Webエンジニアのための法務確認ガイド',
    url: 'https://yomaigotolab.booth.pm/items/8344898',
    description: '「これ、法務案件では？」とアラートを出せるようになることを目指した同人誌。決済・ポイント・プライバシー・偽装請負・ライセンス表記など、Webサービス開発現場で踏みやすい法的リスクのポイントを解説する。',
    tags: ['同人誌', '技術書'],
    repo: null,
    relatedMemo: 'https://hk-it.hatenablog.com/entry/2026/04/28/083425',
    category: 'book',
  },
  {
    name: 'Java 10+a年振り返り（上巻）',
    url: 'https://techbookfest.org/product/fiphWJLZvYRKCvCZ7Hzc1h?productVariantID=jBb2qZXkRErHKWMXQ3PEa8',
    description: 'Java 8から17にかけて追加・強化された開発者向けの機能をまとめて解説する本。150Pを超えたため上下巻構成で、上巻はJava 8〜17を扱う。',
    tags: ['同人誌', '技術書'],
    repo: null,
    relatedMemo: 'https://hk-it.hatenablog.com/entry/2026/04/04/142839',
    category: 'book',
  },
  {
    name: 'chira-ura.net',
    url: 'https://chira-ura.pages.dev/',
    description: '「綺麗すぎるインターネット」へのアンチテーゼとして作った個人サイトプラットフォーム。オタクが好きなことを好きなだけ書き殴れる、牧歌的な空間を目指している。',
    tags: ['Nuxt', 'Hono', 'Supabase', 'Cloudflare Pages'],
    repo: 'https://github.com/h-kono-it/chira-ura',
    relatedMemo: '/memos/chira-ura-tech-stack',
    category: 'app',
  },
  {
    name: 'unagi-tasks',
    url: 'https://unagi-tasks.h-kono-it.deno.net/',
    description: '判断コストの最小化に特化したTODOアプリ。タスクを自動スコアリングして今やるべき1件だけを表示する。うなぎが川をするすると泳ぐように、迷いなく次のタスクへ進み続けることを目指して。',
    tags: ['Fresh 2', 'Deno', 'Preact', 'Tailwind CSS', 'Deno KV'],
    repo: 'https://github.com/h-kono-it/unagi-tasks',
    relatedMemo: '/memos/unagi-tasks',
    category: 'app',
  },
  {
    name: '法務案件チェックポイント',
    url: 'https://h-kono-it.github.io/legal-check-helper',
    description: 'エンジニア向けの「逆引き」法務・経理リファレンスサイト。「作ろうとしている機能」や「売ろうとしている商材」から、疑うべき法令・確認事項を引ける。同人誌『Webエンジニアのための法務確認ガイド』を参考情報のベースにしている。',
    tags: ['Blume', 'MDX', 'GitHub Pages'],
    repo: 'https://github.com/h-kono-it/legal-check-helper',
    relatedMemo: null,
    category: 'app',
  },
  {
    name: 'なぜなぜ分析ツール',
    url: 'https://h-kono-it.github.io/naze-naze/',
    description: 'ツリー構造となぜなぜ分析の因果検証をサポートするWebアプリ。原因をツリーで記録し、因果チェーンを逆順にたどって論理的飛躍を検出できる。データはlocalStorageに保存するためサーバー送信なし。',
    tags: ['React', 'TypeScript', 'React Flow', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/h-kono-it/naze-naze',
    relatedMemo: '/memos/naze-naze-tech-stack',
    category: 'app',
  },
  {
    name: 'rough-table',
    url: 'https://www.npmjs.com/package/rough-table',
    description: 'HTMLテーブルのボーダーを手書き風に描画するvanilla JSライブラリ。Rough.jsを使ってSVGオーバーレイとして描画するため、元の<table>要素のセマンティクスやテキスト選択を壊さない。クラスを1つ追加するだけで動く。',
    tags: ['JavaScript', 'npm', 'OSS'],
    repo: 'https://github.com/h-kono-it/rough-table',
    relatedMemo: '/memos/rough-table',
    category: 'library',
  },
  {
    name: 'astro-site-shell',
    url: 'https://www.npmjs.com/package/astro-site-shell',
    description: 'Astroサイトのコンテンツを擬似CLIで探索できるコンポーネント。ls・cd・cat・grep などのコマンドで記事やページをナビゲートできる。このサイトのトップページのターミナルがそのまま npm パッケージになっている。',
    tags: ['Astro', 'npm', 'OSS'],
    repo: 'https://github.com/h-kono-it/astro-site-shell',
    relatedMemo: null,
    category: 'library',
  },
  {
    name: 'conference-tweet-helper',
    url: 'https://h-kono-it.github.io/conference-tweet-helper/',
    description: 'カンファレンスの公式ハッシュタグ付きツイートを簡単に作れるWebアプリ。部屋ごとのハッシュタグを管理できる。',
    tags: [],
    repo: 'https://github.com/h-kono-it/conference-tweet-helper',
    relatedMemo: null,
    category: 'tool',
  },
  {
    name: 'slack-remind-maker',
    url: 'https://h-kono-it.github.io/slack-remind-maker/',
    description: 'Slackの /remind コマンドの書式をGUIで組み立てるツール。日時・宛先・メッセージを入力するだけで、コピペできるコマンド文字列を生成する。',
    tags: [],
    repo: 'https://github.com/h-kono-it/slack-remind-maker',
    relatedMemo: null,
    category: 'tool',
  },
  {
    name: '単価比較ツール',
    url: 'https://h-kono-it.github.io/tanka-hikaku/',
    description: '単価を比較するためのWebアプリ。数量と金額を入力すると、単価を計算して安い方をハイライト表示する。複数の単価を比較することもできる。',
    tags: [],
    repo: 'https://github.com/h-kono-it/tanka-hikaku',
    relatedMemo: null,
    category: 'tool',
  },
];
