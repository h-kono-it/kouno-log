// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  markdown: {
    // rehypePlugins: [
    //   rehypeSlug, // 見出しにidを付与
    //   [
    //     rehypeAutolinkHeadings,{ 
    //       behavior: 'append', // 見出しの後にリンクを追加
    //       content: {
    //         type: 'element',
    //         tagName: 'span',
    //         properties: { className: ['icon-link'] },
    //         children: [{ type: 'text', value: '#' }]
    //       }
    //     }
    //   ],
    // ],
  },
});