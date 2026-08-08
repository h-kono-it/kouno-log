import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

// ビルド時に静的生成する。索引そのものはブラウザ側で組むので、
// ここで配るのは素の文書JSON（Blume と同じ方式）
export const prerender = true;

/** Markdown の記法を落として、検索対象になる地の文だけにする */
function stripMarkdown(md: string): string {
  return (
    md
      // コードフェンスは中身を残す。`getStaticPaths` のような識別子で引きたいので
      .replace(/^```.*$/gm, ' ')
      // 画像は alt もURLも検索の役に立たないので丸ごと落とす
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
      // リンクは表示テキストだけ残す
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, ' ')
      // 行頭の見出し・引用・リストの記号
      .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, ' ')
      // 表の罫線行（|---|---|）
      .replace(/^\s*\|[\s:|-]+\|\s*$/gm, ' ')
      .replace(/[|`*_~]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

export async function GET(_context: APIContext) {
  const [memos, news, external] = await Promise.all([
    getCollection('memos', ({ data }) => !data.draft),
    getCollection('news', ({ data }) => !data.draft),
    getCollection('external'),
  ]);

  const docs = [
    ...memos.map((e) => ({
      id: `memo:${e.id}`,
      type: 'memo' as const,
      title: e.data.title,
      description: e.data.description ?? '',
      tags: e.data.tags.join(' '),
      body: stripMarkdown(e.body ?? ''),
      url: `/memos/${e.id}`,
      pubDate: e.data.pubDate.toISOString(),
      source: 'memo',
    })),
    ...news.map((e) => ({
      id: `news:${e.id}`,
      type: 'news' as const,
      title: e.data.title,
      description: e.data.description ?? '',
      tags: '',
      body: stripMarkdown(e.body ?? ''),
      url: `/news/${e.id}`,
      pubDate: e.data.pubDate.toISOString(),
      source: 'news',
    })),
    // 外部記事はRSS由来でタイトルと概要しか持たない。本文は無いので body は空
    ...external.map((e) => ({
      id: `external:${e.id}`,
      type: 'external' as const,
      title: e.data.title,
      description: e.data.description ?? '',
      tags: '',
      body: '',
      url: e.data.url,
      pubDate: e.data.pubDate.toISOString(),
      source: e.data.source,
    })),
  ];

  return new Response(JSON.stringify({ docs }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}
