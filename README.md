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

## Localization (i18n)

The website is localized into 10 major languages following the [specscore.md design principles](https://github.com/specscore/specscore):
- Native-language labels only (no flag emoji).
- Header language dropdown and full-width footer language tabs with crawler-discoverable `<a hreflang>` DOM links.
- Canonical URLs, per-locale alternate links, and complete XML sitemap with hreflang alternates.

Supported languages:
- **English** (`/` — canonical default)
- **Español** (`/es/`)
- **Deutsch** (`/de/`)
- **Français** (`/fr/`)
- **Português (BR)** (`/pt-br/`)
- **Русский** (`/ru/`)
- **Українська** (`/uk/`)
- **日本語** (`/ja/`)
- **中文** (`/zh-cn/`)
- **한국어** (`/ko/`)

To regenerate localized pages and sitemap:
```sh
npm run build
npm test
```
