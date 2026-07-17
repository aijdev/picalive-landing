import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "./lib/seo";
import { getDictionary } from "./i18n/getDictionary";
import { AppShell } from "./components/AppShell";
import { HomeView } from "./views/HomeView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.home,
  "/",
  defaultLocale,
  { absoluteTitle: true },
);

export default function HomePage() {
  return (
    <AppShell locale={defaultLocale}>
      <HomeView locale={defaultLocale} />
    </AppShell>
  );
}
