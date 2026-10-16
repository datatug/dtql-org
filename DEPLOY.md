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
npm exec --yes --package=wrangler@4.120.1 -- wrangler dev
```
Serves the `public/` directory at `http://localhost:8787` with the worker handling requests.

## Deploy

[Site build and deploy](.github/workflows/site-deploy.yml) runs `npm test` and compiles the redirect Worker with pinned Wrangler's `deploy --dry-run` on pull requests, pushes to `main`, and manual runs. There are no application dependencies to install. The `tugql-org-deployment` artifact contains a tar archive of all `public/` assets (including hidden files and `_redirects`), the compiled `worker/index.js`, `wrangler.jsonc`, and source `REVISION`.

Only pushes to `main` and manual runs on `main` enter the `production` environment. The deployment job downloads that run's artifact, verifies its revision, and publishes the archived Worker and assets using `wrangler deploy worker/index.js --config wrangler.jsonc --no-bundle`. No Worker compilation or asset regeneration runs during publication. The explicit Worker path overrides the source entrypoint in the archived configuration.

Automatic publication is disabled by default. Set the repository variable `CLOUDFLARE_DEPLOY_ENABLED` to `true` only when credentials and the production environment are ready. Every build still saves the artifact while publication is disabled; the run summary distinguishes the saved artifact from a deployment. An operator can download `site.tar.gz` and `site.tar.gz.sha256`, verify and extract them, and publish the exact packaged output with the pinned Wrangler command below, without rebuilding.

Set `EXPECTED_SOURCE_SHA` to the full `head_sha` from the verified GitHub Actions run that produced the downloaded artifact.

```sh
set -eu
: "${EXPECTED_SOURCE_SHA:?Set to the verified GitHub run head_sha}"
mkdir deployment
shasum -a 256 -c site.tar.gz.sha256
tar -xzf site.tar.gz -C deployment
cd deployment
test "$(cat REVISION)" = "$EXPECTED_SOURCE_SHA"
npm exec --yes --package=wrangler@4.120.1 -- wrangler deploy worker/index.js --config wrangler.jsonc --no-bundle
```

The operator supplies `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` through the existing local environment; credentials are not part of the artifact.

Configure `CLOUDFLARE_API_TOKEN` as a secret available to this repository and `CLOUDFLARE_ACCOUNT_ID` as a variable for the existing account. Restrict the `production` environment to `main` and configure any required approvals. The token needs deployment access to the existing `tugql-org` Worker and its configured custom domains. After the first GitHub deployment is verified, retire the legacy Cloudflare Git production build trigger so GitHub Actions owns publication.

## Custom Domains

Configure routes or custom domains in Cloudflare Dashboard or via `wrangler.jsonc`:
- `tugql.org` (custom domain)
- `www.tugql.org` (custom domain)
- `dtql.org` (custom domain, permanent redirect)
- `www.dtql.org` (custom domain, permanent redirect)
