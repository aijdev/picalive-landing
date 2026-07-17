import type { Metadata } from "next";
import { type Locale, prefixedLocales } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { metaFrom } from "../lib/seo";
import { HomeView } from "../views/HomeView";

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  return metaFrom(getDictionary(locale).meta.home, "/", locale, { absoluteTitle: true });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <HomeView locale={lang as Locale} />;
}
