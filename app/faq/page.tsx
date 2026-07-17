import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { FaqView } from "../views/FaqView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.faq,
  "/faq",
  defaultLocale,
);

export default function FaqPage() {
  return (
    <AppShell locale={defaultLocale}>
      <FaqView locale={defaultLocale} />
    </AppShell>
  );
}
