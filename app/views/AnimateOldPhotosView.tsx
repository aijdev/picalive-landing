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

export function AnimateOldPhotosView({ locale }: { locale: Locale }) {
  const feature = getFeature("animate-old-photos", locale)!;
  const content = getContent(locale);
  const t = getDictionary(locale).toolPages.animateOldPhotos;
  const c = getDictionary(locale).common;

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive Old Photo Animator",
          description:
            "Bring old family photos and black-and-white portraits to life with AI animation on iPhone and iPad.",
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
            <Screenshot shot={content.shots.memories} priority width={340} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={c.bestResultsEyebrow}
          title={t.tipsTitle}
          description={t.tipsDescription}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.tips.map((tip) => (
            <div key={tip.title} className="card flex flex-col gap-3 p-7">
              <h3 className="text-lg font-semibold tracking-tight">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{tip.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative flex flex-col gap-4">
            <span className="eyebrow">{t.crossPromo.eyebrow}</span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t.crossPromo.title}
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted">
              {t.crossPromo.bodyPre}
              <a
                href="https://fxai.app/features/restore"
                target="_blank"
                rel="noopener"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {t.crossPromo.linkText}
              </a>
              {t.crossPromo.bodyPost}
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow={c.faqEyebrow} title={t.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={t.faqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug={feature.slug} locale={locale} />

      <CTA
        title={t.ctaTitle}
        description={t.ctaDescription}
        secondary={{ label: t.ctaSecondary, href: "/examples" }}
        locale={locale}
      />
    </>
  );
}
