import satori from 'satori';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import { loadDefaultJapaneseParser } from 'budoux';
import fs from 'node:fs';
import path from 'node:path';

const parser = loadDefaultJapaneseParser();

// WASM 初期化フラグ
let wasmInitialized = false;

// フォントをキャッシュ
let notoSansJPBold: Buffer | null = null;
let dotGothic: Buffer | null = null;

async function initResvgWasm() {
  if (wasmInitialized) return;

  try {
    // node_modules からローカルの WASM を読み込む
    const wasmPath = path.join(
      process.cwd(),
      'node_modules',
      '@resvg',
      'resvg-wasm',
      'index_bg.wasm'
    );
    const wasmBuffer = fs.readFileSync(wasmPath);
    await initWasm(wasmBuffer);
    wasmInitialized = true;
  } catch (e) {
    // 既に初期化されている場合はエラーを無視
    if (!(e instanceof Error && e.message.includes('Already initialized'))) {
      throw e;
    }
    wasmInitialized = true;
  }
}

function loadFonts() {
  if (!notoSansJPBold) {
    // ローカルの Noto Sans JP Bold を読み込み
    const notoPath = path.join(
      process.cwd(),
      'src',
      'assets',
      'fonts',
      'NotoSansJP-Bold.ttf'
    );
    notoSansJPBold = fs.readFileSync(notoPath);
  }

  if (!dotGothic) {
    // ローカルの DotGothic16 を読み込み
    const dotPath = path.join(
      process.cwd(),
      'src',
      'assets',
      'fonts',
      'DotGothic16-Regular.ttf'
    );
    dotGothic = fs.readFileSync(dotPath);
  }

  return { notoSansJPBold, dotGothic };
}

// アイコン画像をBase64で読み込み
function loadIconAsBase64(): string {
  const iconPath = path.join(process.cwd(), 'public', 'kouno_400x400_icon.jpg');
  const iconBuffer = fs.readFileSync(iconPath);
  return `data:image/jpeg;base64,${iconBuffer.toString('base64')}`;
}

export async function generateOgImage(title: string): Promise<Uint8Array> {
  await initResvgWasm();
  const { notoSansJPBold, dotGothic } = loadFonts();
  const iconBase64 = loadIconAsBase64();

  // BudouX でタイトルを分割（改行位置を最適化）
  const segments = parser.parse(title);

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fafaf9',
          position: 'relative',
          padding: '60px',
        },
        children: [
          // タイトル（中央）
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '1000px',
                fontSize: '56px',
                fontWeight: 700,
                color: '#1a1a1a',
                textAlign: 'center',
                lineHeight: 1.4,
                fontFamily: 'Noto Sans JP',
              },
              children: segments.map((segment) => ({
                type: 'span',
                props: {
                  style: { display: 'block' },
                  children: segment,
                },
              })),
            },
          },
          // 左下のアイコン
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '40px',
                left: '40px',
                display: 'flex',
                alignItems: 'center',
              },
              children: [
                {
                  type: 'img',
                  props: {
                    src: iconBase64,
                    width: 80,
                    height: 80,
                    style: {
                      borderRadius: '50%',
                    },
                  },
                },
              ],
            },
          },
          // 右下のサイト名
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '50px',
                right: '50px',
                fontSize: '32px',
                color: '#666',
                fontFamily: 'DotGothic16',
              },
              children: '> kouno.log',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: notoSansJPBold!,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'DotGothic16',
          data: dotGothic!,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const pngData = resvg.render();
  return pngData.asPng();
}
