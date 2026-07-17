/**
 * Central site configuration. Change these constants to point the marketing
 * site at the real production domain, App Store listing, and support inbox.
 */

// Production canonical origin (no trailing slash). Used for canonical URLs,
// sitemap, robots, and absolute OpenGraph image resolution.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://picalive.app";

export const SITE_NAME = "PicAlive";
export const SITE_TAGLINE = "Bring Your Photos to Life";
export const SITE_DESCRIPTION =
  "PicAlive turns any still photo into a realistic, AI-generated moving video on iPhone and iPad. Pick a photo, tap once, and watch the moment come alive — no editing skills, prompts, or accounts required.";

// TODO: replace with the live App Store listing URL once available.
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/image-to-video-picalive/id6757533997";

export const SUPPORT_EMAIL = "support@picalive.app";

// Social proof figures surfaced inside the app (kept in sync with PRODUCT_STORY).
export const RATING = "4.8";
export const RATINGS_COUNT = "1,250";
export const USERS = "2M+";

export const TWITTER_HANDLE = "@picaliveapp";

export const ORG = {
  name: "PicAlive",
  legalName: "PicAlive — part of the AI Journey app family",
  logo: `${SITE_URL}/logo.jpg`,
};

// Nav and footer link labels now live in the i18n dictionaries
// (see app/i18n/dictionaries/*.ts, common.nav / common.footer).
