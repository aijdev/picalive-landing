import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { HowItWorksView } from "../views/HowItWorksView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.howItWorks,
  "/how-it-works",
  defaultLocale,
);

export default function HowItWorksPage() {
  return (
    <AppShell locale={defaultLocale}>
      <HowItWorksView locale={defaultLocale} />
    </AppShell>
  );
}
