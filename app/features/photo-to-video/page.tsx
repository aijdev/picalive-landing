import type { Metadata } from "next";
import { buildMetadata, defaultLocale } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { getFeature } from "../../lib/content";
import { AppShell } from "../../components/AppShell";
import { PhotoToVideoView } from "../../views/PhotoToVideoView";

const feature = getFeature("photo-to-video", defaultLocale)!;
const meta = getDictionary(defaultLocale).meta.photoToVideo;

export const metadata: Metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: feature.href,
  locale: defaultLocale,
  keywords: feature.keywords,
});

export default function PhotoToVideoPage() {
  return (
    <AppShell locale={defaultLocale}>
      <PhotoToVideoView locale={defaultLocale} />
    </AppShell>
  );
}
