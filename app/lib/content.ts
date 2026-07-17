/**
 * Marketing content for PicAlive. Non-translatable structural data (slugs,
 * hrefs, image paths, icon keys, emoji) lives here as "skeleton" data;
 * translatable copy lives in the i18n dictionaries. `getContent(locale)` zips
 * the two together into the shape components expect.
 */

import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

/* -------------------------------------------------------------------------- */
/*  App Store screenshots                                                     */
/* -------------------------------------------------------------------------- */

export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

type ShotKey = "memories" | "oneTap" | "breathe" | "portrait";

const SHOT_SKELETON: Record<ShotKey, { src: string; alt: string }> = {
  memories: {
    src: "/screenshot_0.jpg",
    alt: "PicAlive turning an old black-and-white portrait into a realistic moving video of a smiling woman in a green dress waving beside a birch tree",
  },
  oneTap: {
    src: "/screenshot_1.jpg",
    alt: "PicAlive animating two separate still photos into one lifelike video of an older man and a younger man standing together in a sunlit garden",
  },
  breathe: {
    src: "/screenshot_2.jpg",
    alt: "PicAlive bringing a baby photo to life as a video of a laughing baby in yellow pajamas waving toward the camera",
  },
  portrait: {
    src: "/screenshot_3.jpg",
    alt: "PicAlive animating a portrait into a moving video of a smiling woman with wavy blonde hair hugging a golden retriever puppy on a deck",
  },
};

const SHOT_ORDER_KEYS: ShotKey[] = ["memories", "oneTap", "breathe", "portrait"];

/* -------------------------------------------------------------------------- */
/*  The three product pillars                                                 */
/* -------------------------------------------------------------------------- */

export type Pillar = { name: string; title: string; body: string };

/* -------------------------------------------------------------------------- */
/*  Capabilities (what the app does — no per-feature detail pages)            */
/* -------------------------------------------------------------------------- */

export type Capability = {
  icon: string; // maps to an icon component in FeatureGrid
  title: string;
  body: string;
};

const CAPABILITY_ICONS: string[] = [
  "tap",
  "motion",
  "speed",
  "share",
  "history",
  "privacy",
];

/* -------------------------------------------------------------------------- */
/*  How it works — the Make Alive loop                                        */
/* -------------------------------------------------------------------------- */

const HOW_STEPS: string[] = ["01", "02", "03", "04"];

/* -------------------------------------------------------------------------- */
/*  Examples — what people bring to life                                      */
/* -------------------------------------------------------------------------- */

export type UseCase = {
  slug: string;
  emoji: string;
  title: string;
  audience: string;
  problem: string;
  solution: string;
  example: string;
};

const USE_CASE_SKELETON: { slug: string; emoji: string }[] = [
  { slug: "old-family-photos", emoji: "🖼️" },
  { slug: "portraits-and-selfies", emoji: "🤳" },
  { slug: "pets", emoji: "🐶" },
  { slug: "landscapes-and-nature", emoji: "🌄" },
  { slug: "social-content", emoji: "📱" },
  { slug: "loved-ones", emoji: "🤍" },
];

/* -------------------------------------------------------------------------- */
/*  Feature pages (deep-dive marketing pages under /features)                 */
/* -------------------------------------------------------------------------- */

export type Feature = {
  slug: string;
  href: string;
  name: string;
  short: string;
  blurb: string;
  keywords: string[];
};

const FEATURE_SKELETON: { slug: string; href: string; shot: ShotKey }[] = [
  { slug: "photo-to-video", href: "/features/photo-to-video", shot: "breathe" },
  { slug: "animate-old-photos", href: "/features/animate-old-photos", shot: "memories" },
  { slug: "save-and-share", href: "/features/save-and-share", shot: "portrait" },
];

/* -------------------------------------------------------------------------- */
/*  Companion apps (AI Journey ecosystem — PicAlive's siblings)               */
/* -------------------------------------------------------------------------- */

export type CompanionApp = { name: string; what: string; emoji: string; href: string };

const COMPANION_SKELETON: { name: string; emoji: string; href: string }[] = [
  { name: "FxAI", emoji: "✨", href: "https://fxai.app" },
  { name: "Photix", emoji: "🎨", href: "https://photix.app" },
  { name: "Videx", emoji: "🎬", href: "https://videx.app" },
  { name: "SwapTo", emoji: "🔄", href: "https://swapto.app" },
];

/** The AI Photo Journey company hub that links to every app in the family. */
export const PORTFOLIO = {
  name: "AI Photo Journey",
  url: "https://ai-photo-journey.com",
  pageUrl: "https://ai-photo-journey.com/apps/picalive",
};

/* -------------------------------------------------------------------------- */
/*  Testimonials (illustrative, reflecting the app's stated 4.8 rating)       */
/* -------------------------------------------------------------------------- */

const TESTIMONIAL_NAMES: string[] = [
  "Elena M.",
  "Marcus T.",
  "Priya S.",
  "Dani R.",
  "Jordan K.",
  "Sofia L.",
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export type Faq = { q: string; a: string };

/* -------------------------------------------------------------------------- */
/*  Zipped, localized content                                                  */
/* -------------------------------------------------------------------------- */

export type SiteContent = {
  shots: Record<ShotKey, Shot>;
  shotOrder: Shot[];
  pillars: Pillar[];
  capabilities: Capability[];
  howItWorks: { step: string; title: string; body: string }[];
  useCases: UseCase[];
  problemsSolved: string[];
  features: Feature[];
  companionApps: CompanionApp[];
  testimonials: { quote: string; name: string; role: string }[];
  faqs: { category: string; items: Faq[] }[];
  allFaqs: Faq[];
};

export function getContent(locale: Locale): SiteContent {
  const d = getDictionary(locale).content;

  const shots = Object.fromEntries(
    SHOT_ORDER_KEYS.map((key) => [
      key,
      { ...SHOT_SKELETON[key], caption: d.shots[key].caption },
    ]),
  ) as Record<ShotKey, Shot>;

  const shotOrder = SHOT_ORDER_KEYS.map((key) => shots[key]);

  const pillars: Pillar[] = d.pillars;

  const capabilities: Capability[] = CAPABILITY_ICONS.map((icon, i) => ({
    icon,
    ...d.capabilities[i],
  }));

  const howItWorks = HOW_STEPS.map((step, i) => ({ step, ...d.howItWorks[i] }));

  const useCases: UseCase[] = USE_CASE_SKELETON.map((skeleton, i) => ({
    slug: skeleton.slug,
    emoji: skeleton.emoji,
    ...d.useCases[i],
  }));

  const features: Feature[] = FEATURE_SKELETON.map((skeleton, i) => ({
    slug: skeleton.slug,
    href: skeleton.href,
    ...d.features[i],
  }));

  const companionApps: CompanionApp[] = COMPANION_SKELETON.map((skeleton, i) => ({
    name: skeleton.name,
    emoji: skeleton.emoji,
    href: skeleton.href,
    what: d.companionApps[i].what,
  }));

  const testimonials = TESTIMONIAL_NAMES.map((name, i) => ({
    name,
    ...d.testimonials[i],
  }));

  const faqs = d.faqs;
  const allFaqs: Faq[] = faqs.flatMap((group) => group.items);

  return {
    shots,
    shotOrder,
    pillars,
    capabilities,
    howItWorks,
    useCases,
    problemsSolved: d.problemsSolved,
    features,
    companionApps,
    testimonials,
    faqs,
    allFaqs,
  };
}

export function getFeature(slug: string, locale: Locale): Feature | undefined {
  return getContent(locale).features.find((f) => f.slug === slug);
}

export const FEATURE_SLUGS: string[] = FEATURE_SKELETON.map((f) => f.slug);
