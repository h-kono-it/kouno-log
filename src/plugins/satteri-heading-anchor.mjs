// @ts-check
import GithubSlugger from 'github-slugger';

/**
 * 見出しにidを振り、そのセクションへのアンカーリンクを足すSätteriのhastプラグイン。
 *
 * このサイトの見出しは、Markdownの記法をそのまま見せるために「##」をアクセント色で
 * 前置きしている。CSSの ::before で描いていたのでクリックできなかったが、
 * 同じ見た目のリンクを実要素として先頭に挿すことで、記号そのものをアンカーにする。
 *
 * idはAstroも振ってくれるが、それはhastプラグインより後の工程なので、この時点では
 * まだ読めない。リンク先とidが食い違わないよう、ここで自分で振ってしまう
 * （Astroは既にidがある見出しには手を出さない）。slugの作り方はAstroと同じ
 * github-sluggerなので、付くidは従来と変わらない。
 *
 * h1（記事冒頭のタイトル。ページヘッダーと重複するため非表示）と、
 * 記号を前置きしていないh4以降は対象にしない。
 */

/** @type {Record<string, string>} */
const PREFIX = {
  h2: '##',
  h3: '###',
};

export default function satteriHeadingAnchor() {
  // 見出しが重複したときの連番は文書ごとに数え直す。
  // hastPluginsに関数を渡すと1コンパイルにつき1回呼ばれるので、ここで作れば document ごとに初期化される
  const slugger = new GithubSlugger();

  return {
    name: 'heading-anchor',
    element: {
      filter: Object.keys(PREFIX),
      /**
       * @param {any} node
       * @param {any} ctx
       */
      visit(node, ctx) {
        // 子を足すと見出しのテキストに「##」が混ざるので、先に読む
        const label = ctx.textContent(node).trim();
        const id = node.properties?.id || slugger.slug(label);

        ctx.setProperty(node, 'id', id);
        ctx.prependChild(node, {
          type: 'element',
          tagName: 'a',
          properties: {
            className: ['heading-anchor'],
            href: `#${id}`,
            // 記号ではなく見出し名で読ませる（従来はCSSの `content: "## " / ""` で読み飛ばしていた）
            'aria-label': `${label} へのリンク`,
          },
          children: [{ type: 'text', value: PREFIX[node.tagName] }],
        });
      },
    },
  };
}
