import type { Metadata } from "next";
import { SITE_NAME, TWITTER_HANDLE } from "./site";
import {
  type Locale,
  alternatesFor,
  defaultLocale,
  localizedUrl,
  ogLocaleMap,
} from "../i18n/config";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Root-relative path (e.g. "/features"). Localized + used for canonical/OG. */
  path: string;
  locale: Locale;
  keywords?: string[];
  /** When true, use `title` verbatim instead of the "%s · PicAlive" template. */
  absoluteTitle?: boolean;
  /**
   * Marketing pages get reciprocal hreflang alternates. Legal pages (privacy,
   * terms, English only) set this false so they advertise a single English canonical.
   */
  alternates?: boolean;
};

/**
 * Produces a consistent, fully-populated Metadata object for a page: a
 * self-referencing localized canonical, reciprocal hreflang alternates (incl.
 * x-default), OpenGraph (with og:locale + alternates), Twitter card, and
 * robots. The file-based `opengraph-image.tsx` is merged in automatically by
 * Next, so we deliberately do not set `openGraph.images` here.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
  keywords,
  absoluteTitle,
  alternates = true,
}: BuildMetadataInput): Metadata {
  const url = localizedUrl(path, locale);
  const languages = alternates ? alternatesFor(path) : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url,
      title: absoluteTitle ? title : `${title} · ${SITE_NAME}`,
      description,
      locale: ogLocaleMap[locale],
      alternateLocale: Object.values(ogLocaleMap).filter(
        (l) => l !== ogLocaleMap[locale],
      ),
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: absoluteTitle ? title : `${title} · ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/** Convenience for pages that build metadata from a dictionary meta entry. */
export function metaFrom(
  meta: { title: string; description: string; keywords?: readonly string[] },
  path: string,
  locale: Locale,
  opts?: { absoluteTitle?: boolean },
): Metadata {
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords ? [...meta.keywords] : undefined,
    path,
    locale,
    absoluteTitle: opts?.absoluteTitle,
  });
}

export { defaultLocale };
