import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { FeaturesView } from "../views/FeaturesView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.features,
  "/features",
  defaultLocale,
);

export default function FeaturesPage() {
  return (
    <AppShell locale={defaultLocale}>
      <FeaturesView locale={defaultLocale} />
    </AppShell>
  );
}
