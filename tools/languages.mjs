// Single source of truth for the locales supported by TugQL.org.
// Follows specscore.md design principles:
// - Native-language labels only (no flag emoji)
// - Real DOM links with hreflang and lang attributes
// - Canonical routing with x-default and per-locale alternates

export const langs = [
  { code: 'en', label: 'English', tag: 'en' },
  { code: 'es', label: 'Español', tag: 'es' },
  { code: 'de', label: 'Deutsch', tag: 'de' },
  { code: 'fr', label: 'Français', tag: 'fr' },
  { code: 'it', label: 'Italiano', tag: 'it' },
  { code: 'pl', label: 'Polski', tag: 'pl' },
  { code: 'pt-br', label: 'Português (BR)', tag: 'pt-BR' },
  { code: 'ru', label: 'Русский', tag: 'ru' },
  { code: 'tr', label: 'Türkçe', tag: 'tr' },
  { code: 'uk', label: 'Українська', tag: 'uk' },
  { code: 'ja', label: '日本語', tag: 'ja' },
  { code: 'zh-cn', label: '中文', tag: 'zh-CN' },
  { code: 'zh-tw', label: '繁體中文', tag: 'zh-TW' },
  { code: 'ko', label: '한국어', tag: 'ko' },
];

export function localeHref(code, route = '') {
  const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
  if (code === 'en') {
    return cleanRoute ? `/${cleanRoute}` : '/';
  }
  return cleanRoute ? `/${code}/${cleanRoute}` : `/${code}/`;
}

export function canonicalUrl(code, route = '') {
  const base = 'https://tugql.org';
  const href = localeHref(code, route);
  return href === '/' ? `${base}/` : `${base}${href}`;
}
