import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const url = new URL(context.request.url);
  const tag = url.searchParams.get('tag')?.toLowerCase();
  const limit = Math.min(parseInt(url.searchParams.get('limit') ?? '20', 10), 100);

  let memos = await getCollection('memos', ({ data }) => !data.draft);

  if (tag) {
    memos = memos.filter((m) => m.data.tags.some((t) => t.toLowerCase() === tag));
  }

  memos.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const items = memos.slice(0, limit).map((m) => ({
    id: m.id,
    title: m.data.title,
    description: m.data.description ?? null,
    pubDate: m.data.pubDate,
    tags: m.data.tags,
    url: `/memos/${m.id}`,
  }));

  return new Response(JSON.stringify({ total: memos.length, items }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
