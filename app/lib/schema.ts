import {
  APP_STORE_URL,
  ORG,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./site";
import type { Faq } from "./content";

/** Organization schema for the AI Journey company behind PicAlive. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: ORG.logo,
    description: SITE_DESCRIPTION,
    sameAs: [
      APP_STORE_URL,
      "https://fxai.app",
      "https://photix.app",
      "https://videx.app",
      "https://swapto.app",
      "https://picalive.app",
      "https://ai-photo-journey.com",
    ].filter((u) => u !== SITE_URL),
    parentOrganization: {
      "@type": "Organization",
      name: "AI Photo Journey",
      url: "https://ai-photo-journey.com",
    },
  };
}

/** WebSite schema — helps Google understand the site name for sitelinks. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
  };
}

/**
 * SoftwareApplication schema. The app is free to download (freemium), so we
 * declare a $0 offer. We intentionally omit aggregateRating to avoid asserting
 * a specific, unverifiable review count in structured data.
 */
export function softwareAppSchema(overrides?: {
  name?: string;
  description?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: overrides?.name ?? "PicAlive — Photo to Video AI",
    operatingSystem: "iOS 15.0 or later",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Photo & Video",
    description: overrides?.description ?? SITE_DESCRIPTION,
    image: ORG.logo,
    screenshot: [
      `${SITE_URL}/screenshot_0.jpg`,
      `${SITE_URL}/screenshot_2.jpg`,
      `${SITE_URL}/screenshot_3.jpg`,
    ],
    url: overrides?.url ?? SITE_URL,
    installUrl: APP_STORE_URL,
    downloadUrl: APP_STORE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: ORG.name,
    },
  };
}

/** FAQPage schema from a list of question/answer pairs. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/** BreadcrumbList schema from an ordered list of crumbs. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}
