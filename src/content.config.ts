import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 自分で書くメモ・記事
const memos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/memos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// お知らせ・ニュース
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// 外部記事（note, はてなブログ, ドクセル）
const external = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/external' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    pubDate: z.coerce.date(),
    source: z.enum(['note', 'hatena', 'docswell']),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { memos, news, external };
