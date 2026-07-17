import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { ContactView } from "../views/ContactView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.contact,
  "/contact",
  defaultLocale,
);

export default function ContactPage() {
  return (
    <AppShell locale={defaultLocale}>
      <ContactView locale={defaultLocale} />
    </AppShell>
  );
}
