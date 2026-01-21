import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const memos = await getCollection('memos', ({ data }) => !data.draft);
  const news = await getCollection('news', ({ data }) => !data.draft);

  const allContent = [
    ...memos.map((m) => ({
      title: m.data.title,
      description: m.data.description || '',
      pubDate: m.data.pubDate,
      link: `/memos/${m.id}`,
    })),
    ...news.map((n) => ({
      title: n.data.title,
      description: n.data.description || '',
      pubDate: n.data.pubDate,
      link: `/news/${n.id}`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'kouno.log',
    description: 'note、はてなブログ、ドクセルの記事とメモをまとめています。',
    site: context.site!,
    items: allContent,
    customData: '<language>ja</language>',
  });
}
