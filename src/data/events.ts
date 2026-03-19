export type EventRole = '参加' | '登壇' | 'スタッフ' | 'コアスタッフ';

export interface Event {
  name: string;
  date: string; // "YYYY-MM-DD"
  role: EventRole;
  url?: string;
  slideUrl?: string;
}

export const events: Event[] = [
  { name: 'BuriKaigi 2026', date: '2026-01-10', role: '登壇', url: 'https://burikaigi.dev/' },
  { name: 'Kaigi on Rails 2025', date: '2025-09-27', role: '登壇', url: 'https://kaigionrails.org/2025/' },
  { name: '大吉祥寺.pm 2025', date: '2025-09-06', role: '登壇', url: 'https://daikichijoji.pm/' },
];
