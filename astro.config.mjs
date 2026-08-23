// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { satteri } from '@astrojs/markdown-satteri';
import satteriDropEmptyThead from './src/plugins/satteri-drop-empty-thead.mjs';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: wrangler login 後に `pnpm exec wrangler whoami` でサブドメインを確認し、
  // 実際の workers.dev URL（kouno-log.<subdomain>.workers.dev）に合わせること
  site: 'https://kouno-log.hkono.workers.dev',
  adapter: cloudflare({
    imageService: 'compile',
    // OG画像生成（satori + resvg-wasm）が node_modules の wasm やフォントを
    // fs で読むため、プリレンダリングは Node で実行する（workerd だと fs が使えない）
    prerenderEnvironment: 'node',
  }),
  integrations: [sitemap()],
  markdown: {
    processor: satteri({
      hastPlugins: [satteriDropEmptyThead()],
    }),
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