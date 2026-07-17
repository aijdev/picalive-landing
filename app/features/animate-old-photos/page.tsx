import type { Metadata } from "next";
import { buildMetadata, defaultLocale } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { getFeature } from "../../lib/content";
import { AppShell } from "../../components/AppShell";
import { AnimateOldPhotosView } from "../../views/AnimateOldPhotosView";

const feature = getFeature("animate-old-photos", defaultLocale)!;
const meta = getDictionary(defaultLocale).meta.animateOldPhotos;

export const metadata: Metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: feature.href,
  locale: defaultLocale,
  keywords: feature.keywords,
});

export default function AnimateOldPhotosPage() {
  return (
    <AppShell locale={defaultLocale}>
      <AnimateOldPhotosView locale={defaultLocale} />
    </AppShell>
  );
}
