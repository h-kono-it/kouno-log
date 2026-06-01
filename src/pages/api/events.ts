import type { APIContext } from 'astro';
import { events, type EventRole } from '../../data/events';
import { jsonResponse } from '../../lib/api-response';

export const prerender = false;

const VALID_ROLES: EventRole[] = ['参加', '登壇', 'スタッフ', 'コアスタッフ', 'サークル参加', '主催'];

export async function GET(context: APIContext) {
  const url = new URL(context.request.url);
  const role = url.searchParams.get('role') as EventRole | null;
  const upcoming = url.searchParams.get('upcoming');

  if (role && !VALID_ROLES.includes(role)) {
    return jsonResponse({ error: `role は ${VALID_ROLES.join(' | ')} のいずれかです` }, 400);
  }

  const todayJST = new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' });

  let result = [...events];

  if (role) {
    result = result.filter((e) => e.role === role);
  }

  if (upcoming === 'true') {
    result = result.filter((e) => e.date >= todayJST);
  } else if (upcoming === 'false') {
    result = result.filter((e) => e.date < todayJST);
  }

  result.sort((a, b) => b.date.localeCompare(a.date));

  return jsonResponse({ total: result.length, items: result });
}
