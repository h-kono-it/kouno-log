import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MEMOS_DIR = path.join(__dirname, '../src/content/memos');

async function main() {
  const files = await fs.readdir(MEMOS_DIR);
  const tagCounts = new Map();

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const content = await fs.readFile(path.join(MEMOS_DIR, file), 'utf-8');
    const match = content.match(/^tags:\s*\[([^\]]*)\]/m);
    if (!match) continue;

    const tags = match[1].split(',').map(t => t.trim());
    for (const tag of tags) {
      if (!tag) continue;
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }

  console.log('タグ一覧:');
  console.log('=========');
  const sorted = [...tagCounts.entries()].sort((a, b) => b[1] - a[1]);
  for (const [tag, count] of sorted) {
    console.log(`${tag} (${count})`);
  }
  console.log(`\n合計: ${tagCounts.size} 種類`);
}

main().catch(console.error);
