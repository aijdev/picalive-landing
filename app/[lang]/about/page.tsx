import type { Metadata } from "next";
import { type Locale, prefixedLocales } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";
import { metaFrom } from "../../lib/seo";
import { AboutView } from "../../views/AboutView";

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
  return metaFrom(getDictionary(locale).meta.about, "/about", locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <AboutView locale={lang as Locale} />;
}
