import type { APIContext } from 'astro';
import { getEntry } from 'astro:content';

export const prerender = false;

export async function GET(context: APIContext) {
  const { id } = context.params;
  if (!id) {
    return new Response(JSON.stringify({ error: 'id が必要です' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const entry = await getEntry('external', id);
  if (!entry) {
    return new Response(JSON.stringify({ error: '見つかりません' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(
    JSON.stringify(
      {
        id: entry.id,
        title: entry.data.title,
        description: entry.data.description ?? null,
        pubDate: entry.data.pubDate,
        source: entry.data.source,
        url: entry.data.url,
        thumbnail: entry.data.thumbnail ?? null,
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json' } },
  );
}
