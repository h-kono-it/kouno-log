import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse } from '../../lib/api-response';

export const prerender = false;

export async function GET(context: APIContext) {
  const url = new URL(context.request.url);
  const q = url.searchParams.get('q')?.toLowerCase().trim();
  const type = url.searchParams.get('type');
  const limit = Math.min(parseInt(url.searchParams.get('limit') ?? '20', 10), 100);

  if (!q) {
    return jsonResponse({ error: 'q パラメータが必要です' }, 400);
  }

  const results: object[] = [];

  if (!type || type === 'memos') {
    const memos = await getCollection('memos', ({ data }) => !data.draft);
    for (const memo of memos) {
      if (
        memo.data.title.toLowerCase().includes(q) ||
        memo.data.description?.toLowerCase().includes(q) ||
        memo.data.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'memo',
          id: memo.id,
          title: memo.data.title,
          description: memo.data.description ?? null,
          pubDate: memo.data.pubDate,
          tags: memo.data.tags,
          url: `/memos/${memo.id}`,
        });
      }
    }
  }

  if (!type || type === 'news') {
    const news = await getCollection('news', ({ data }) => !data.draft);
    for (const item of news) {
      if (
        item.data.title.toLowerCase().includes(q) ||
        item.data.description?.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'news',
          id: item.id,
          title: item.data.title,
          description: item.data.description ?? null,
          pubDate: item.data.pubDate,
          url: `/news/${item.id}`,
        });
      }
    }
  }

  if (!type || type === 'external') {
    const external = await getCollection('external');
    for (const item of external) {
      if (
        item.data.title.toLowerCase().includes(q) ||
        item.data.description?.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'external',
          id: item.id,
          title: item.data.title,
          description: item.data.description ?? null,
          pubDate: item.data.pubDate,
          source: item.data.source,
          url: item.data.url,
        });
      }
    }
  }

  results.sort((a: any, b: any) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return jsonResponse({ q, total: results.length, results: results.slice(0, limit) });
}
