import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '../../../lib/og-image';

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await getCollection('news');
  return news.map((item) => ({
    params: { id: item.id },
    props: { title: item.data.title },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await generateOgImage(props.title as string);

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
