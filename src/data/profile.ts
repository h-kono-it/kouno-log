export interface ProfileLink {
  name: string;
  url: string;
}

export interface ProfileCommunity {
  name: string;
  description: string;
  url: string;
}

export interface ProfileTalk {
  title: string;
  event: string;
  date: string;
  url: string;
}

export interface ProfilePublication {
  title: string;
  publisher: string;
  role: string;
  date: string;
  url: string;
}

export const name = 'kouno';

export const bio = 'Webエンジニア。技術同人誌サークル「世迷言ラボ」代表。';

export const skills: string[] = ['Java', 'Kotlin', 'Ruby', 'TypeScript', 'Node.js', 'AWS'];

export const links: ProfileLink[] = [
  { name: 'GitHub', url: 'https://github.com/h-kono-it' },
  { name: 'Twitter', url: 'https://x.com/hk_it7' },
  { name: 'note', url: 'https://note.com/h_kono' },
  { name: 'はてなブログ', url: 'https://h-kono-it.hatenablog.com/' },
  { name: 'Docswell', url: 'https://www.docswell.com/user/h-kono-it' },
  { name: 'Cosense', url: 'https://scrapbox.io/kouno-sense/' },
  { name: 'Qiita', url: 'https://qiita.com/hk_it7' },
];

export const communities: ProfileCommunity[] = [
  { name: '東葛.dev', description: '東葛地域のエンジニアコミュニティ。運営しています。', url: 'https://toukatsu.dev/' },
  { name: 'きのこカンファレンス', description: 'テックカンファレンス。コアスタッフとして参加しています。', url: 'https://kinoko-conf.dev/' },
];

export const talks: ProfileTalk[] = [
  { title: 'Enum 徹底入門', event: 'JJUG CCC 2026 Spring', date: '2026-05-30', url: 'https://www.docswell.com/s/hk_it7/Z8NMQ1-2026-05-30-075434' },
  { title: 'Enum、お前は一体何者だ？', event: 'BuriKaigi 2026', date: '2026-01-10', url: 'https://www.docswell.com/s/hk_it7/KLVM77-enum-burikaigi' },
  { title: 'ActiveRecord使いが知るべきORMの世界', event: 'Kaigi on Rails 2025', date: '2025-09-27', url: 'https://www.docswell.com/s/hk_it7/ZWMNJR-orm-kaigi-on-rails' },
  { title: '地方でエンジニアコミュニティを成功させる秘訣', event: '大吉祥寺.pm 2025', date: '2025-09-06', url: 'https://www.docswell.com/s/hk_it7/Z446WL-community-toukatsu-dev' },
  { title: '『氷菓』と心理的安全性', event: '【劇場版】アニメから得た学びを発表会2025', date: '2025-08-10', url: 'https://www.docswell.com/s/hk_it7/5EYWQ8-2025-08-10-anime' },
];

export const publications: ProfilePublication[] = [
  {
    title: 'プロフェッショナルのための学び戦略 AI時代に結果を出す！学び方再定義',
    publisher: 'インプレス NextPublishing',
    role: '共著',
    date: '2026-01-23',
    url: 'https://nextpublishing.jp/book/19205.html',
  },
];
