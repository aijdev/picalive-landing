import type { Metadata } from "next";
import { type Locale, prefixedLocales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/getDictionary";
import { buildMetadata } from "../../../lib/seo";
import { getFeature } from "../../../lib/content";
import { PhotoToVideoView } from "../../../views/PhotoToVideoView";

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
  const meta = getDictionary(locale).meta.photoToVideo;
  const feature = getFeature("photo-to-video", locale)!;
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
  return <PhotoToVideoView locale={lang as Locale} />;
}
