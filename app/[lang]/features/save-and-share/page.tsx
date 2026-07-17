import type { Metadata } from "next";
import { type Locale, prefixedLocales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/getDictionary";
import { buildMetadata } from "../../../lib/seo";
import { getFeature } from "../../../lib/content";
import { SaveAndShareView } from "../../../views/SaveAndShareView";

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
  const meta = getDictionary(locale).meta.saveAndShare;
  const feature = getFeature("save-and-share", locale)!;
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: feature.href,
    locale,
    keywords: feature.keywords,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <SaveAndShareView locale={lang as Locale} />;
}
