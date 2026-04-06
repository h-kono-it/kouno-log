import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse } from '../../../lib/api-response';

export const prerender = false;

const VALID_SOURCES = ['note', 'hatena', 'docswell', 'toralab'] as const;
type Source = (typeof VALID_SOURCES)[number];

export async function GET(context: APIContext) {
  const url = new URL(context.request.url);
  const source = url.searchParams.get('source') as Source | null;
  const limit = Math.min(parseInt(url.searchParams.get('limit') ?? '20', 10), 100);

  if (source && !VALID_SOURCES.includes(source)) {
    return jsonResponse({ error: `source は ${VALID_SOURCES.join(' | ')} のいずれかです` }, 400);
  }

  let external = await getCollection('external');

  if (source) {
    external = external.filter((e) => e.data.source === source);
  }

  external.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const items = external.slice(0, limit).map((e) => ({
    id: e.id,
    title: e.data.title,
    description: e.data.description ?? null,
    pubDate: e.data.pubDate,
    source: e.data.source,
    url: e.data.url,
    thumbnail: e.data.thumbnail ?? null,
  }));

  return jsonResponse({ total: external.length, items });
}
