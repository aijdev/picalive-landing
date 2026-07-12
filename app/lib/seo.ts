import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Path beginning with "/" (e.g. "/features"). Used for canonical + OG url. */
  path: string;
  keywords?: string[];
  /** When true, use `title` verbatim instead of the "%s · PicAlive" template. */
  absoluteTitle?: boolean;
};

/**
 * Produces a consistent, fully-populated Metadata object for a page:
 * canonical URL, OpenGraph, Twitter card, and robots directives. The
 * file-based `opengraph-image.tsx` is merged in automatically by Next, so we
 * deliberately do not set `openGraph.images` here.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle,
}: BuildMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url,
      title: absoluteTitle ? title : `${title} · ${SITE_NAME}`,
      description,
      locale: "en_US",
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
