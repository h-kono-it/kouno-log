import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const url = new URL(context.request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') ?? '20', 10), 100);

  let news = await getCollection('news', ({ data }) => !data.draft);
  news.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const items = news.slice(0, limit).map((n) => ({
    id: n.id,
    title: n.data.title,
    description: n.data.description ?? null,
    pubDate: n.data.pubDate,
    url: `/news/${n.id}`,
  }));

  return new Response(JSON.stringify({ total: news.length, items }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
