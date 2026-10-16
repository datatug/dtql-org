import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// wrangler.jsonc carries whole-line // comments; strip them before parsing.
const config = JSON.parse(
  readFileSync(resolve(root, 'wrangler.jsonc'), 'utf8').replace(/^\s*\/\/.*$/gm, ''),
);

describe('tugql.org is served as static assets only', () => {
  it('has no Worker script and no worker-first routing', () => {
    assert.equal(config.main, undefined);
    assert.equal(config.assets.run_worker_first, undefined);
    assert.equal(config.assets.binding, undefined);
    assert.equal(existsSync(resolve(root, 'src/index.ts')), false);
    assert.equal(config.assets.directory, './public');
  });

  it('keeps every host attached as a custom domain (host redirects are zone rules)', () => {
    assert.deepEqual(
      config.routes.map((r) => r.pattern).sort(),
      ['dtql.org', 'tugql.org', 'www.dtql.org', 'www.tugql.org'],
    );
    assert.ok(config.routes.every((r) => r.custom_domain === true));
  });

  it('ships the landing page, robots and sitemap', () => {
    for (const f of ['index.html', 'robots.txt', 'sitemap.xml', 'styles.css']) {
      assert.ok(existsSync(resolve(root, 'public', f)), `missing public/${f}`);
    }
  });
});
