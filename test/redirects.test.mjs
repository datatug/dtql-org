import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// Import edge worker logic
import worker from '../src/index.ts';

describe('TugQL.org and DTQL.org redirects', () => {
  const fakeEnv = {
    ASSETS: {
      fetch: async (req) => new Response('TugQL Static Site', { status: 200 }),
    },
  };

  it('redirects http://dtql.org/ to https://tugql.org/ (301)', async () => {
    const req = new Request('http://dtql.org/');
    const res = await worker.fetch(req, fakeEnv);
    assert.equal(res.status, 301);
    assert.equal(res.headers.get('Location'), 'https://tugql.org/');
  });

  it('redirects https://www.dtql.org/docs?q=syntax to https://tugql.org/docs?q=syntax (301)', async () => {
    const req = new Request('https://www.dtql.org/docs?q=syntax');
    const res = await worker.fetch(req, fakeEnv);
    assert.equal(res.status, 301);
    assert.equal(res.headers.get('Location'), 'https://tugql.org/docs?q=syntax');
  });

  it('redirects https://www.tugql.org/deep/path to https://tugql.org/deep/path (301)', async () => {
    const req = new Request('https://www.tugql.org/deep/path');
    const res = await worker.fetch(req, fakeEnv);
    assert.equal(res.status, 301);
    assert.equal(res.headers.get('Location'), 'https://tugql.org/deep/path');
  });

  it('serves static assets for https://tugql.org/', async () => {
    const req = new Request('https://tugql.org/');
    const res = await worker.fetch(req, fakeEnv);
    assert.equal(res.status, 200);
    const body = await res.text();
    assert.equal(body, 'TugQL Static Site');
  });
});
