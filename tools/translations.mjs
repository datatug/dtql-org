import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const translationsDir = resolve(__dirname, 'translations');

export const translations = {};

for (const file of readdirSync(translationsDir)) {
  if (file.endsWith('.json')) {
    const code = file.replace(/\.json$/, '');
    translations[code] = JSON.parse(readFileSync(resolve(translationsDir, file), 'utf-8'));
  }
}
