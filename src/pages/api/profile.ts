import type { APIContext } from 'astro';
import { jsonResponse } from '../../lib/api-response';
import { name, bio, skills, links, communities, talks, publications } from '../../data/profile';

export const prerender = false;

const profile = { name, bio, skills, links, communities, talks, publications };

export async function GET(_context: APIContext) {
  return jsonResponse(profile);
}
