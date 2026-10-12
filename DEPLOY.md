# Deploying tugql.org to Cloudflare

This site is a static landing page served from `public/` with an edge redirect worker at `src/index.ts`. It deploys as a
**Cloudflare Worker with static assets**.

## Domains & Redirect Architecture

- **Canonical domain:** `tugql.org` (and `www.tugql.org` redirecting to `tugql.org`)
- **Former domain:** `dtql.org` (and `www.dtql.org`)
- All requests for `dtql.org` or `www.dtql.org` are redirected permanently (**HTTP 301**) to `https://tugql.org/...` with path and query preservation.

## Files

```
dtql-org/
├── public/            ← static assets served to the browser
│   ├── index.html     ← canonical landing page with schema.org JSON-LD and canonical tag
│   ├── styles.css
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects     ← static fallback 301 redirects
├── src/
│   └── index.ts       ← edge router with host-level 301 redirection
└── wrangler.jsonc     ← Worker + assets config
```

## Preview locally

```sh
npx wrangler dev
```
Serves the `public/` directory at `http://localhost:8787` with the worker handling requests.

## Deploy

From the repository directory:

```sh
npx wrangler deploy
```

## Custom Domains

Configure routes or custom domains in Cloudflare Dashboard or via `wrangler.jsonc`:
- `tugql.org` (custom domain)
- `www.tugql.org` (custom domain)
- `dtql.org` (custom domain, permanent redirect)
- `www.dtql.org` (custom domain, permanent redirect)
