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
  "https://apps.apple.com/app/picalive-photo-to-video/id0000000000";

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

/** Primary navigation shown in the header and footer. */
export const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Examples", href: "/examples" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_NAV: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Examples", href: "/examples" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];
