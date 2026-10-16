# tugql-org

Source code for **[tugql.org](https://tugql.org)** (formerly **dtql.org**) — documentation, tutorials, specification references, and canonical project website.

## Overview

- **Canonical URL:** [https://tugql.org](https://tugql.org)
- **Former domain:** `dtql.org` (permanently redirected with HTTP 301 preserving paths and query strings)
- **Product:** TugQL — portable, human-readable query language and structured query tree (TugQT)

## Architecture & Deployment

The site is served by an assets-only Cloudflare Worker with static assets in `public/`.
- No Worker script: requests are served by free static assets. Zone Redirect Rules (not code) 301 `dtql.org`, `www.dtql.org` and `www.tugql.org` to `https://tugql.org$path$query`.
- Canonical metadata, sitemap, and robots.txt all reference `https://tugql.org`.
