import type { Metadata } from "next";
import { metaFrom, defaultLocale } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { AnimationIdeasView } from "../views/AnimationIdeasView";

export const metadata: Metadata = metaFrom(
  getDictionary(defaultLocale).meta.animationIdeas,
  "/animation-ideas",
  defaultLocale,
);

export default function AnimationIdeasPage() {
  return (
    <AppShell locale={defaultLocale}>
      <AnimationIdeasView locale={defaultLocale} />
    </AppShell>
  );
}
