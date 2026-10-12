# tugql-org

Source code for **[tugql.org](https://tugql.org)** (formerly **dtql.org**) — documentation, tutorials, specification references, and canonical project website.

## Overview

- **Canonical URL:** [https://tugql.org](https://tugql.org)
- **Former domain:** `dtql.org` (permanently redirected with HTTP 301 preserving paths and query strings)
- **Product:** TugQL — portable, human-readable query language and structured query tree (TugQT)

## Architecture & Deployment

The site is served by Cloudflare Workers with static assets in `public/`.
- Edge worker at `src/index.ts` automatically redirects all requests from `dtql.org` and `www.dtql.org` to `https://tugql.org$path$query` via HTTP 301.
- `public/_redirects` provides fallback rules.
- Canonical metadata, sitemap, and robots.txt all reference `https://tugql.org`.
