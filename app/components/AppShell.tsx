import type { ReactNode } from "react";
import { type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";

/**
 * Localized page chrome: skip link, header, main region, and footer. Rendered
 * per-locale so the navigation and footer are translated.
 */
export function AppShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const t = getDictionary(locale).common;
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        {t.skipToContent}
      </a>
      <SiteHeader locale={locale} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
