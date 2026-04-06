import type { APIContext } from 'astro';
import { jsonResponse } from '../../lib/api-response';

export const prerender = false;

export async function GET(_context: APIContext) {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/help',
      description: 'このエンドポイント一覧を返す',
      params: [],
    },
    {
      method: 'GET',
      path: '/api/profile',
      description: 'プロフィール情報を返す',
      params: [],
    },
    {
      method: 'GET',
      path: '/api/search',
      description: 'memos / news / external を横断検索する',
      params: [
        { name: 'q', required: true, description: '検索キーワード' },
        { name: 'type', required: false, description: 'memos | news | external（省略時は全て）' },
        { name: 'limit', required: false, description: '件数上限（デフォルト: 20）' },
      ],
    },
    {
      method: 'GET',
      path: '/api/memos',
      description: 'メモ一覧を返す',
      params: [
        { name: 'tag', required: false, description: 'タグでフィルタ' },
        { name: 'limit', required: false, description: '件数上限（デフォルト: 20）' },
      ],
    },
    {
      method: 'GET',
      path: '/api/memos/[id]',
      description: 'メモの詳細（本文Markdown含む）を返す',
      params: [],
    },
    {
      method: 'GET',
      path: '/api/news',
      description: 'お知らせ一覧を返す',
      params: [
        { name: 'limit', required: false, description: '件数上限（デフォルト: 20）' },
      ],
    },
    {
      method: 'GET',
      path: '/api/news/[id]',
      description: 'お知らせの詳細（本文Markdown含む）を返す',
      params: [],
    },
    {
      method: 'GET',
      path: '/api/external',
      description: '外部記事（note / はてなブログ / Docswell）一覧を返す',
      params: [
        { name: 'source', required: false, description: 'note | hatena | docswell | toralab でフィルタ' },
        { name: 'limit', required: false, description: '件数上限（デフォルト: 20）' },
      ],
    },
    {
      method: 'GET',
      path: '/api/external/[id]',
      description: '外部記事の詳細を返す',
      params: [],
    },
  ];

  return jsonResponse({ endpoints });
}
