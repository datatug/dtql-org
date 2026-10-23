# Deploying tugql.org to Cloudflare

This site is a static landing page served from `public/` with no Worker script (`wrangler.jsonc` has no `main`), so requests are served by
free static assets and never count against the Workers request quota. It deploys as an
**assets-only Cloudflare Worker**.

## Domains & Redirect Architecture

- **Canonical domain:** `tugql.org` (and `www.tugql.org` redirecting to `tugql.org`)
- **Former domain:** `dtql.org` (and `www.dtql.org`)
- All requests for `dtql.org` or `www.dtql.org` are redirected permanently (**HTTP 301**) to `https://tugql.org/...` with path and query preservation, and `www.tugql.org` to `https://tugql.org/...`. These are zone-level Cloudflare **Redirect Rules** (they run at the edge before the Worker deployment), not code.

## Files

```
tugql-org/
├── public/            ← static assets served to the browser
│   ├── index.html     ← canonical landing page with schema.org JSON-LD and canonical tag
│   ├── styles.css
│   ├── robots.txt
│   └── sitemap.xml
└── wrangler.jsonc     ← assets-only Worker config (no `main`)
```

## Preview locally

```sh
npm exec --yes --package=wrangler@4.120.1 -- wrangler dev
```
Serves the `public/` directory at `http://localhost:8787` (assets only; host redirects are zone rules and do not run locally).

## Deploy

[Site build and deploy](.github/workflows/site-deploy.yml) runs `npm test` and validates the assets-only deployment with pinned Wrangler's `deploy --dry-run` on pull requests, pushes to `main`, and manual runs. There are no application dependencies to install. The `tugql-org-deployment` artifact contains a tar archive of all `public/` assets (including hidden files), `wrangler.jsonc`, and source `REVISION`.

Only pushes to `main` and manual runs on `main` enter the `production` environment. The deployment job downloads that run's artifact, verifies its revision, and publishes the archived assets using `wrangler deploy --config wrangler.jsonc`. No asset regeneration runs during publication.

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
npm exec --yes --package=wrangler@4.120.1 -- wrangler deploy --config wrangler.jsonc
```

The operator supplies `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` through the existing local environment; credentials are not part of the artifact.

Configure `CLOUDFLARE_API_TOKEN` as a secret available to this repository and `CLOUDFLARE_ACCOUNT_ID` as a variable for the existing account. Restrict the `production` environment to `main` and configure any required approvals. The token needs deployment access to the existing `tugql-org` Worker and its configured custom domains. After the first GitHub deployment is verified, retire the legacy Cloudflare Git production build trigger so GitHub Actions owns publication.

## Custom Domains

Configure routes or custom domains in Cloudflare Dashboard or via `wrangler.jsonc`:
- `tugql.org` (custom domain)
- `www.tugql.org` (custom domain)
- `dtql.org` (custom domain; zone Redirect Rule -> tugql.org)
- `www.dtql.org` (custom domain; zone Redirect Rule -> tugql.org)
