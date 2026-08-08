import type { Tokenizer } from '@orama/orama';

/**
 * 日本語向けの文字bigramトークナイザ。
 *
 * 漢字・ひらがな・カタカナの連なりは辞書分割せず、文字2つずつの重なり窓に切る。
 * Intl.Segmenter による分かち書きだと「法」「系」のような1文字語がトークンとして
 * 残り、それが大量のページに刺さって絞り込みが効かなくなる。文字bigramなら
 * 1文字トークンが原理的に出てこない。Lucene の CJK アナライザと同じ考え方。
 *
 * ラテン文字と数字はbigramにせず語のまま出す。"install" を2文字ずつ切ると
 * "rv" のような断片が無関係な語に誤ヒットするため。
 *
 * 計測の詳細は src/content/memos/blume-japanese-search-benchmark.md を参照。
 */

// Script_Extensions を使うのは、長音符「ー」(U+30FC) や踊り字「々」(U+3005) が
// Script 上は Common 扱いで、Script=Kana / Script=Han だと連なりが途切れるため。
// 「サーバー」が サ|ー|バ|ー に割れると bigram が作れない。
const CJK = /[\p{scx=Han}\p{scx=Hira}\p{scx=Kana}]/u;
const WORD = /[\p{L}\p{N}]/u;

export function tokenizeJa(raw: string): string[] {
  const tokens: string[] = [];
  // コードポイント単位で回す。サロゲートペアの漢字（𠮟 など）を
  // 2つのコードユニットに割らないため
  const chars = [...raw.normalize('NFKC').toLowerCase()];

  let run: string[] = [];
  let runIsCjk = false;

  const flush = () => {
    if (run.length === 0) return;
    if (!runIsCjk) {
      tokens.push(run.join(''));
    } else if (run.length === 1) {
      // 1文字だけの連なりはそのまま出す。1文字クエリの受け口になる
      tokens.push(run[0]);
    } else {
      for (let i = 0; i < run.length - 1; i++) {
        tokens.push(run[i] + run[i + 1]);
      }
    }
    run = [];
  };

  for (const ch of chars) {
    const isCjk = CJK.test(ch);
    if (!isCjk && !WORD.test(ch)) {
      // 記号・空白は区切りとして捨てる
      flush();
      continue;
    }
    // 文字種が変わる境目でも連なりを切る（「Astro7」の Astro と 7 は別トークン）
    if (run.length > 0 && isCjk !== runIsCjk) flush();
    runIsCjk = isCjk;
    run.push(ch);
  }
  flush();

  return tokens;
}

export function createJaTokenizer(): Tokenizer {
  return {
    language: 'japanese',
    normalizationCache: new Map(),
    // Orama は tokenize(raw, language, prop) の形で呼ぶが、言語もプロパティも
    // 切り方に影響しないので raw だけ見る
    tokenize: (raw: string) => (typeof raw === 'string' ? tokenizeJa(raw) : []),
  };
}
