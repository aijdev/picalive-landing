/**
 * i18n configuration — the single source of truth for locales, hreflang codes,
 * OpenGraph locales, and URL/alternate helpers.
 *
 * URL scheme (Option A): the default locale (English) is served at the root
 * with NO path prefix (`/features`); every other locale lives under a
 * subdirectory (`/es/features`, `/de/features`, …). This preserves the
 * existing English ranking URLs and consolidates domain authority.
 *
 * Static export note: there is no middleware or server at runtime, so every
 * locale of every page is pre-rendered at build time and locale is threaded
 * explicitly through views and metadata — never detected at request time.
 */

import { SITE_URL } from "../lib/site";

export const locales = ["en", "es", "pt", "de", "ja", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Locales that get a URL prefix (everything except the default). */
export const prefixedLocales = locales.filter(
  (l) => l !== defaultLocale,
) as Exclude<Locale, "en">[];

/**
 * BCP-47 codes used in `hreflang` / `<html lang>`. Note `pt` (a short, clean
 * URL segment) maps to the Brazilian variant `pt-BR` for search engines.
 */
export const hreflangMap: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt-BR",
  de: "de",
  ja: "ja",
  fr: "fr",
};

/** OpenGraph `og:locale` values. */
export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
  de: "de_DE",
  ja: "ja_JP",
  fr: "fr_FR",
};

/** Human-readable names shown in the language switcher (in their own language). */
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  de: "Deutsch",
  ja: "日本語",
  fr: "Français",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Map an internal path (always authored root-relative, e.g. "/features") to the
 * URL for a given locale. Default locale returns the path unchanged. A trailing
 * "#fragment" is preserved and re-attached after the locale prefix.
 */
export function localizedPath(path: string, locale: Locale): string {
  const hashIndex = path.indexOf("#");
  const base = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  const clean = base === "/" ? "" : base;
  if (locale === defaultLocale) return (clean === "" ? "/" : clean) + hash;
  return `/${locale}${clean}${hash}`;
}

/**
 * Split a rendered pathname into its locale and the underlying root-relative
 * path. Used by the language switcher to preserve the current page across
 * locales. Default-locale (unprefixed) paths return `defaultLocale`.
 */
export function stripLocalePrefix(pathname: string): {
  locale: Locale;
  basePath: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0]) && segments[0] !== defaultLocale) {
    const rest = "/" + segments.slice(1).join("/");
    return { locale: segments[0], basePath: rest === "/" ? "/" : rest };
  }
  return { locale: defaultLocale, basePath: pathname || "/" };
}

/** Absolute URL for a path in a given locale. */
export function localizedUrl(path: string, locale: Locale): string {
  const p = localizedPath(path, locale);
  return p === "/" ? SITE_URL : `${SITE_URL}${p}`;
}

/**
 * Build the `alternates.languages` hreflang map for a marketing page, including
 * `x-default` (→ English). Pass this to Next's Metadata `alternates`.
 */
export function alternatesFor(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[hreflangMap[locale]] = localizedUrl(path, locale);
  }
  languages["x-default"] = localizedUrl(path, defaultLocale);
  return languages;
}
