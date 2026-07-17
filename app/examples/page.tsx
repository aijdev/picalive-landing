import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { ExamplesView } from "../views/ExamplesView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.examples,
  "/examples",
  defaultLocale,
);

export default function ExamplesPage() {
  return (
    <AppShell locale={defaultLocale}>
      <ExamplesView locale={defaultLocale} />
    </AppShell>
  );
}
