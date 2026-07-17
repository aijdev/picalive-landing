import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { AboutView } from "../views/AboutView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.about,
  "/about",
  defaultLocale,
);

export default function AboutPage() {
  return (
    <AppShell locale={defaultLocale}>
      <AboutView locale={defaultLocale} />
    </AppShell>
  );
}
