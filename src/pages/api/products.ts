import type { APIContext } from 'astro';
import { products } from '../../data/products';
import { jsonResponse } from '../../lib/api-response';

export const prerender = false;

export async function GET(_context: APIContext) {
  return jsonResponse({ total: products.length, items: products });
}
