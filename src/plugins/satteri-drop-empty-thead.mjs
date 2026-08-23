// @ts-check

/**
 * ヘッダー行のセルがすべて空のテーブルから <thead> を落とすSätteriのhastプラグイン。
 *
 * GFMのテーブル記法はヘッダー行を省略できないので、見出しのない表を書くと
 * `| | |` のような空の <th> が1行分残る。中身がないのに行の高さを取るうえ、
 * rough-tableは <thead> の行も1行として数えて手書き線を引いてしまうため、
 * HTMLの段階で取り除く。
 */

/**
 * 指定タグの子要素を集める。
 * @param {any} node
 * @param {string[]} tagNames
 */
const childElements = (node, tagNames) =>
  (node.children ?? []).filter(
    (/** @type {any} */ child) => child.type === 'element' && tagNames.includes(child.tagName)
  );

/**
 * セルが空か。画像だけのヘッダーを誤って消さないよう、
 * 子要素があるセルは（テキストが無くても）空とみなさない。
 * @param {any} cell
 */
const isEmptyCell = (cell) =>
  (cell.children ?? []).every(
    (/** @type {any} */ child) =>
      child.type === 'comment' || (child.type === 'text' && child.value.trim() === '')
  );

export default function satteriDropEmptyThead() {
  return {
    name: 'drop-empty-thead',
    element: {
      filter: ['thead'],
      /**
       * @param {any} node
       * @param {any} ctx
       */
      visit(node, ctx) {
        if (ctx.textContent(node).trim() !== '') return;

        const cells = childElements(node, ['tr']).flatMap((/** @type {any} */ row) =>
          childElements(row, ['th', 'td'])
        );
        if (cells.length === 0 || !cells.every(isEmptyCell)) return;

        ctx.removeNode(node);
      },
    },
  };
}
