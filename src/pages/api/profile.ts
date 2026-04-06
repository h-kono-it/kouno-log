import type { APIContext } from 'astro';

const profile = {
  name: 'kouno',
  bio: 'Webエンジニア。Java / Kotlin / Ruby / TypeScript などを使った開発に携わっています。技術コミュニティの運営やカンファレンス登壇も行っています。技術同人誌サークル「世迷言ラボ」代表。',
  skills: ['Java', 'Kotlin', 'Ruby', 'TypeScript', 'Node.js', 'AWS'],
  links: [
    { name: 'GitHub', url: 'https://github.com/h-kono-it' },
    { name: 'Twitter', url: 'https://x.com/hk_it7' },
    { name: 'note', url: 'https://note.com/h_kono' },
    { name: 'はてなブログ', url: 'https://h-kono-it.hatenablog.com/' },
    { name: 'Docswell', url: 'https://www.docswell.com/user/h-kono-it' },
    { name: 'Cosense', url: 'https://scrapbox.io/kouno-sense/' },
  ],
  communities: [
    {
      name: '東葛.dev',
      description: '東葛地域のエンジニアコミュニティ。運営しています。',
      url: 'https://toukatsu.dev/',
    },
    {
      name: 'きのこカンファレンス',
      description: 'テックカンファレンス。コアスタッフとして参加しています。',
      url: 'https://kinoko-conf.dev/',
    },
  ],
  talks: [
    {
      title: 'Enum、お前は一体何者だ？',
      event: 'BuriKaigi 2026',
      date: '2026-01-10',
      url: 'https://www.docswell.com/s/hk_it7/KLVM77-enum-burikaigi',
    },
    {
      title: 'ActiveRecord使いが知るべきORMの世界',
      event: 'Kaigi on Rails 2025',
      date: '2025-09-27',
      url: 'https://www.docswell.com/s/hk_it7/ZWMNJR-orm-kaigi-on-rails',
    },
    {
      title: '地方でエンジニアコミュニティを成功させる秘訣',
      event: '大吉祥寺.pm 2025',
      date: '2025-09-06',
      url: 'https://www.docswell.com/s/hk_it7/Z446WL-community-toukatsu-dev',
    },
    {
      title: '『氷菓』と心理的安全性',
      event: '【劇場版】アニメから得た学びを発表会2025',
      date: '2025-08-10',
      url: 'https://www.docswell.com/s/hk_it7/5EYWQ8-2025-08-10-anime',
    },
  ],
};

export async function GET(_context: APIContext) {
  return new Response(JSON.stringify(profile, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
