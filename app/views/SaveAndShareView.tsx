import { getFeature, getContent } from "../lib/content";
import { getDictionary } from "../i18n/getDictionary";
import { type Locale, localizedUrl } from "../i18n/config";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { FaqList } from "../components/Faq";
import { RelatedFeatures } from "../components/RelatedFeatures";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export function SaveAndShareView({ locale }: { locale: Locale }) {
  const feature = getFeature("save-and-share", locale)!;
  const content = getContent(locale);
  const t = getDictionary(locale).toolPages.saveAndShare;
  const c = getDictionary(locale).common;

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive Save & Share",
          description:
            "Save AI-animated photos as real videos and share them anywhere from iPhone and iPad.",
          url: localizedUrl(feature.href, locale),
          locale,
        })}
      />
      <JsonLd data={faqSchema(t.faqs)} />

      <PageHeader
        eyebrow={t.headerEyebrow}
        title={t.headerTitle}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: c.nav.features, path: "/features" },
          { name: feature.name, path: feature.href },
        ]}
        intro={t.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">{t.leadTitle}</h2>
            <p className="text-lg leading-relaxed text-muted">{t.leadBody}</p>
            <CheckList items={t.checklist} />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Screenshot shot={content.shots.portrait} priority width={340} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.historyEyebrow}
          title={t.historyTitle}
          description={t.historyDescription}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.historyItems.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3 p-7">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={c.faqEyebrow} title={t.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={t.faqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug={feature.slug} locale={locale} />

      <CTA
        title={t.ctaTitle}
        description={t.ctaDescription}
        secondary={{ label: t.ctaSecondary, href: "/animation-ideas" }}
        locale={locale}
      />
    </>
  );
}
