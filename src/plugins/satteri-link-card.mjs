// @ts-check
import fs from 'fs';
import { fileURLToPath } from 'url';

/**
 * 段落に単独で置かれた裸のリンクを、OGPカードに差し替えるSätteriのhastプラグイン。
 *
 * OGPの取得はここではやらない。`node scripts/fetch-ogp.js` が集めて
 * `src/data/ogp-cache.json` にコミットしたものを読むだけにしてある。
 * ビルドが外部サイトの生死に依存すると、相手が落ちている日にデプロイできなくなるため。
 *
 * キャッシュに無いURL・取得に失敗したURLは何もせず素のリンクのまま残す。
 * カード化は「付いたら嬉しい」程度のもので、これでビルドを落とす価値はない。
 *
 * カード化の対象は段落に単独で置かれたURLだけ。`[ラベル](url)` のように
 * ラベルを書いたリンクは、文章として読ませたい意図なので触らない。
 */

const CACHE_PATH = fileURLToPath(new URL('../data/ogp-cache.json', import.meta.url));

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
  } catch {
    // 未生成でも普通にビルドできるべき
    return {};
  }
}

/**
 * 段落の中身が「URLそのままのリンク1本」か。
 * @param {any} node
 * @param {any} ctx
 * @returns {string | undefined} 対象ならURL
 */
function bareLinkHref(node, ctx) {
  const children = (node.children ?? []).filter(
    (/** @type {any} */ child) => !(child.type === 'text' && child.value.trim() === '')
  );
  if (children.length !== 1) return undefined;

  const [link] = children;
  if (link.type !== 'element' || link.tagName !== 'a') return undefined;

  const href = link.properties?.href;
  if (typeof href !== 'string' || !/^https?:\/\//.test(href)) return undefined;

  // ラベル付きリンクを除くため、表示文字列がURLと一致することを確かめる
  const label = ctx.textContent(link).trim();
  if (label !== href && label !== href.replace(/\/$/, '')) return undefined;

  return href;
}

/**
 * @param {string} href
 * @param {any} og
 */
function card(href, og) {
  /** @type {any[]} */
  const body = [
    {
      type: 'element',
      tagName: 'span',
      properties: { className: ['link-card-title'] },
      children: [{ type: 'text', value: og.title }],
    },
  ];

  if (og.description) {
    body.push({
      type: 'element',
      tagName: 'span',
      properties: { className: ['link-card-desc'] },
      children: [{ type: 'text', value: og.description }],
    });
  }

  body.push({
    type: 'element',
    tagName: 'span',
    properties: { className: ['link-card-host'] },
    children: [{ type: 'text', value: og.siteName || og.host }],
  });

  /** @type {any[]} */
  const children = [
    {
      type: 'element',
      tagName: 'span',
      properties: { className: ['link-card-body'] },
      children: body,
    },
  ];

  if (og.image) {
    children.push({
      type: 'element',
      tagName: 'span',
      properties: { className: ['link-card-thumb'] },
      children: [
        {
          type: 'element',
          tagName: 'img',
          properties: {
            src: og.image,
            // カードのタイトルが隣にあるので、画像は読み上げ不要
            alt: '',
            loading: 'lazy',
            decoding: 'async',
          },
          children: [],
        },
      ],
    });
  }

  return {
    type: 'element',
    tagName: 'a',
    properties: {
      className: ['link-card'],
      href,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    children,
  };
}

export default function satteriLinkCard() {
  const cache = loadCache();

  return {
    name: 'link-card',
    element: {
      filter: ['p'],
      /**
       * @param {any} node
       * @param {any} ctx
       */
      visit(node, ctx) {
        const href = bareLinkHref(node, ctx);
        if (!href) return;

        const og = cache[href];
        if (!og || og.ok === false || !og.title) return;

        ctx.replaceNode(node, card(href, og));
      },
    },
  };
}
