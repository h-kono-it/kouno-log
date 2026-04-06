import type { APIContext } from 'astro';
import { getEntry } from 'astro:content';
import { jsonResponse } from '../../../lib/api-response';

export const prerender = false;

export async function GET(context: APIContext) {
  const { id } = context.params;
  if (!id) {
    return jsonResponse({ error: 'id が必要です' }, 400);
  }

  const entry = await getEntry('external', id);
  if (!entry) {
    return jsonResponse({ error: '見つかりません' }, 404);
  }

  return jsonResponse({
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description ?? null,
    pubDate: entry.data.pubDate,
    source: entry.data.source,
    url: entry.data.url,
    thumbnail: entry.data.thumbnail ?? null,
  });
}
