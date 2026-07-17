import { notFound } from "next/navigation";
import {
  type Locale,
  hreflangMap,
  isLocale,
  prefixedLocales,
} from "../i18n/config";
import { AppShell } from "../components/AppShell";
import { LangSetter } from "../components/LangSetter";

/** Only the non-default (prefixed) locales are generated under /[lang]. */
export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === "en") notFound();
  const locale = lang as Locale;

  return (
    <>
      <LangSetter lang={hreflangMap[locale]} />
      <AppShell locale={locale}>{children}</AppShell>
    </>
  );
}
