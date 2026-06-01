export interface Product {
  name: string;
  url: string;
  description: string;
  tags: string[];
  repo: string | null;
  relatedMemo: string | null;
}

export const products: Product[] = [
  {
    name: 'Webエンジニアのための法務確認ガイド',
    url: 'https://yomaigotolab.booth.pm/items/8344898',
    description: '「これ、法務案件では？」とアラートを出せるようになることを目指した同人誌。決済・ポイント・プライバシー・偽装請負・ライセンス表記など、Webサービス開発現場で踏みやすい法的リスクのポイントを解説する。',
    tags: ['同人誌', '技術書'],
    repo: null,
    relatedMemo: 'https://hk-it.hatenablog.com/entry/2026/04/28/083425',
  },
  {
    name: 'Java 10+a年振り返り（上巻）',
    url: 'https://techbookfest.org/product/fiphWJLZvYRKCvCZ7Hzc1h?productVariantID=jBb2qZXkRErHKWMXQ3PEa8',
    description: 'Java 8から17にかけて追加・強化された開発者向けの機能をまとめて解説する本。150Pを超えたため上下巻構成で、上巻はJava 8〜17を扱う。',
    tags: ['同人誌', '技術書'],
    repo: null,
    relatedMemo: 'https://hk-it.hatenablog.com/entry/2026/04/04/142839',
  },
  {
    name: 'chira-ura.net',
    url: 'https://chira-ura.pages.dev/',
    description: '「綺麗すぎるインターネット」へのアンチテーゼとして作った個人サイトプラットフォーム。オタクが好きなことを好きなだけ書き殴れる、牧歌的な空間を目指している。',
    tags: ['Nuxt', 'Hono', 'Supabase', 'Cloudflare Pages'],
    repo: 'https://github.com/h-kono-it/chira-ura',
    relatedMemo: '/memos/chira-ura-tech-stack',
  },
  {
    name: 'unagi-tasks',
    url: 'https://unagi-tasks.h-kono-it.deno.net/',
    description: '判断コストの最小化に特化したTODOアプリ。タスクを自動スコアリングして今やるべき1件だけを表示する。うなぎが川をするすると泳ぐように、迷いなく次のタスクへ進み続けることを目指して。',
    tags: ['Fresh 2', 'Deno', 'Preact', 'Tailwind CSS', 'Deno KV'],
    repo: 'https://github.com/h-kono-it/unagi-tasks',
    relatedMemo: '/memos/unagi-tasks',
  },
  {
    name: 'rough-table',
    url: 'https://www.npmjs.com/package/rough-table',
    description: 'HTMLテーブルのボーダーを手書き風に描画するvanilla JSライブラリ。Rough.jsを使ってSVGオーバーレイとして描画するため、元の<table>要素のセマンティクスやテキスト選択を壊さない。クラスを1つ追加するだけで動く。',
    tags: ['JavaScript', 'npm', 'OSS'],
    repo: 'https://github.com/h-kono-it/rough-table',
    relatedMemo: '/memos/rough-table',
  },
  {
    name: 'astro-site-shell',
    url: 'https://www.npmjs.com/package/astro-site-shell',
    description: 'Astroサイトのコンテンツを擬似CLIで探索できるコンポーネント。ls・cd・cat・grep などのコマンドで記事やページをナビゲートできる。このサイトのトップページのターミナルがそのまま npm パッケージになっている。',
    tags: ['Astro', 'npm', 'OSS'],
    repo: 'https://github.com/h-kono-it/astro-site-shell',
    relatedMemo: null,
  },
  {
    name: 'なぜなぜ分析ツール',
    url: 'https://h-kono-it.github.io/naze-naze/',
    description: 'ツリー構造となぜなぜ分析の因果検証をサポートするWebアプリ。原因をツリーで記録し、因果チェーンを逆順にたどって論理的飛躍を検出できる。データはlocalStorageに保存するためサーバー送信なし。',
    tags: ['React', 'TypeScript', 'React Flow', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/h-kono-it/naze-naze',
    relatedMemo: '/memos/naze-naze-tech-stack',
  },
];
