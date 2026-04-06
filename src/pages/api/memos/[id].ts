import type { APIContext } from 'astro';
import { getEntry, render } from 'astro:content';
import { jsonResponse } from '../../../lib/api-response';

export const prerender = false;

export async function GET(context: APIContext) {
  const { id } = context.params;
  if (!id) {
    return jsonResponse({ error: 'id が必要です' }, 400);
  }

  const entry = await getEntry('memos', id);
  if (!entry || entry.data.draft) {
    return jsonResponse({ error: '見つかりません' }, 404);
  }

  await render(entry);

  return jsonResponse({
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description ?? null,
    pubDate: entry.data.pubDate,
    tags: entry.data.tags,
    url: `/memos/${entry.id}`,
    body: entry.body,
  });
}
