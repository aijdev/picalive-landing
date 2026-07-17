import type { Metadata } from "next";
import { buildMetadata, defaultLocale } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { getFeature } from "../../lib/content";
import { AppShell } from "../../components/AppShell";
import { SaveAndShareView } from "../../views/SaveAndShareView";

const feature = getFeature("save-and-share", defaultLocale)!;
const meta = getDictionary(defaultLocale).meta.saveAndShare;

export const metadata: Metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: feature.href,
  locale: defaultLocale,
  keywords: feature.keywords,
});

export default function SaveAndSharePage() {
  return (
    <AppShell locale={defaultLocale}>
      <SaveAndShareView locale={defaultLocale} />
    </AppShell>
  );
}
