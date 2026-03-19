export type EventRole = '参加' | '登壇' | 'スタッフ' | 'コアスタッフ' | 'サークル参加';

export interface Event {
  name: string;
  date: string; // "YYYY-MM-DD"
  role: EventRole;
  url?: string;
  slideUrl?: string;
}

export const events: Event[] = [
  { name: 'きのこカンファレンス 2026', date: '2026-06-28', role: 'コアスタッフ', url: 'https://kinoko-conf.dev/index.html' },
  { name: 'JJUG CCC 2026 Spring', date: '2026-05-30', role: '登壇', url: 'https://ccc2026spring.java-users.jp/' },
  { name: '第十三回技術書同人誌博覧会', date: '2026-05-10', role: 'サークル参加', url: 'https://gishohaku.connpass.com/event/372013/' },
  { name: 'コミュニティ・勉強会の作り方', date: '2026-04-27', role: '登壇', url: 'https://kaitou.connpass.com/event/383669/' },
  { name: '技術書典20 オフライン', date: '2026-04-12', role: 'サークル参加', url: 'https://techbookfest.org/event/tbf20' },
  { name: '劇場版エンジニアニメ 2026', date: '2026-04-11', role: 'コアスタッフ', url: 'https://engineers-anime.connpass.com/event/375981/' },
  { name: 'toranoana.deno #24', date: '2026-03-11', role: '登壇', url: 'https://yumenosora.connpass.com/event/383916/', slideUrl: 'https://www.docswell.com/s/hk_it7/5WREYJ-deno-deploy-error' },
  { name: 'アウトプットカンファレンス', date: '2026-04-04', role: '登壇', url: 'https://onestop-output.dev/' },
  { name: 'EMConf JP 2026', date: '2026-03-04', role: '参加', url: 'https://2026.emconf.jp/' },
  { name: 'Warm-up Party by EM Oasis', date: '2026-02-10', role: '登壇', url: 'https://emoasis.connpass.com/event/380833/', slideUrl: 'https://www.docswell.com/s/hk_it7/5WM9D1-2026-02-10-emoasis' },
  { name: 'BuriKaigi 2026', date: '2026-01-10', role: '登壇', url: 'https://burikaigi.dev/', slideUrl: 'https://www.docswell.com/s/hk_it7/KLVM77-enum-burikaigi' },
  { name: 'Kaigi on Rails 2025', date: '2025-09-27', role: '登壇', url: 'https://kaigionrails.org/2025/', slideUrl: 'https://www.docswell.com/s/hk_it7/ZWMNJR-orm-kaigi-on-rails' },
  { name: 'プロダクトエンジニアのお仕事', date: '2025-09-25', role: '登壇', url: 'https://nota.connpass.com/event/366420/', slideUrl: 'https://www.docswell.com/s/hk_it7/KDWVYW-pde_crosstalk_fan_product' },
  { name: '大吉祥寺.pm 2025', date: '2025-09-06', role: '登壇', url: 'https://fortee.jp/dai-kichijojipm-2025', slideUrl: 'https://www.docswell.com/s/hk_it7/Z446WL-community-toukatsu-dev' },
  { name: '劇場版エンジニアニメ 2025', date: '2025-08-10', role: '登壇', url: 'https://engineers-anime-2025-lp.pages.dev/', slideUrl: 'https://www.docswell.com/s/hk_it7/5EYWQ8-2025-08-10-anime?ref=rss' },
  { name: 'BuriKaigi 2025', date: '2025-01-31', role: '登壇', url: 'https://burikaigi.dev/2025', slideUrl: 'https://www.docswell.com/s/hk_it7/ZR2YX4-2025-02-01-030120' },
  { name: 'JJUG CCC 2024 Spring', date: '2024-06-16', role: '登壇', url: 'https://ccc2024spring.java-users.jp/', slideUrl: 'https://www.docswell.com/s/hk_it7/ZENPR1-2024-06-16-111139' },
];
