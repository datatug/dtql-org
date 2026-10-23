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

  it('ships all 14 localized landing pages with metadata and language switchers', async () => {
    const { langs, localeHref, canonicalUrl } = await import('../tools/languages.mjs');
    assert.equal(langs.length, 14);

    const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8');

    for (const lang of langs) {
      const pageRelPath = lang.code === 'en' ? 'public/index.html' : `public/${lang.code}/index.html`;
      const fullPath = resolve(root, pageRelPath);
      assert.ok(existsSync(fullPath), `missing ${pageRelPath}`);

      const html = readFileSync(fullPath, 'utf8');

      // html lang and canonical
      assert.match(html, new RegExp(`<html lang="${lang.tag}">`), `${lang.code} missing correct html lang`);
      assert.match(html, new RegExp(`<link rel="canonical" href="${canonicalUrl(lang.code)}" />`), `${lang.code} missing canonical`);

      // hreflang alternates
      for (const l of langs) {
        assert.match(
          html,
          new RegExp(`<link rel="alternate" hreflang="${l.tag}" href="${canonicalUrl(l.code)}" />`),
          `${lang.code} missing hreflang alternate for ${l.code}`
        );
      }
      assert.match(html, /<link rel="alternate" hreflang="x-default" href="https:\/\/tugql\.org\/" \/>/);

      // language switcher in header and footer
      assert.match(html, /class="lang-switcher"/, `${lang.code} missing .lang-switcher`);
      assert.match(html, /class="footer-langs"/, `${lang.code} missing .footer-langs`);
      assert.ok(html.includes(`<span>${lang.label}</span>`), `${lang.code} trigger missing native label`);

      // sitemap entry
      assert.ok(sitemap.includes(`<loc>${canonicalUrl(lang.code)}</loc>`), `sitemap missing ${lang.code}`);
    }
  });
});
