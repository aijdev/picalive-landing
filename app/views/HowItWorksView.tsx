import { getContent } from "../lib/content";
import { getDictionary } from "../i18n/getDictionary";
import { type Locale, localizedUrl } from "../i18n/config";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { CheckList } from "../components/CheckList";
import { HowItWorks } from "../components/HowItWorks";
import { FeatureGrid } from "../components/FeatureGrid";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export function HowItWorksView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const t = getDictionary(locale).howItWorksPage;
  const c = getDictionary(locale).common;
  const howFaqs = content.faqs[1].items;

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive — Photo to Video AI",
          description: "Turn a still photo into a realistic moving video on iPhone and iPad.",
          url: localizedUrl("/how-it-works", locale),
          locale,
        })}
      />
      <JsonLd data={faqSchema(howFaqs)} />

      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: c.nav.howItWorks, path: "/how-it-works" },
        ]}
        intro={t.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      {/* Intro: no skills required */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">{t.introSection.title}</h2>
            <p className="text-lg leading-relaxed text-muted">{t.introSection.description}</p>
            <CheckList items={t.introSection.checklist} />
          </div>
          <div className="flex justify-center">
            <Screenshot
              shot={content.shots.memories}
              priority
              width={300}
              className="w-[240px] sm:w-[300px]"
            />
          </div>
        </div>
      </Section>

      {/* The four steps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.stepsSection.eyebrow}
          title={t.stepsSection.title}
          description={t.stepsSection.description}
        />
        <div className="mt-12">
          <HowItWorks locale={locale} />
        </div>
      </Section>

      {/* What comes alive */}
      <Section>
        <SectionHeading
          eyebrow={t.comesAliveSection.eyebrow}
          title={t.comesAliveSection.title}
          description={t.comesAliveSection.description}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.comesAlive.map((item) => (
            <div key={item.label} className="card flex items-start gap-4 p-6">
              <span className="text-3xl" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold tracking-tight">{item.label}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Photo tips */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t.tipsSection.eyebrow}
              title={t.tipsSection.title}
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">{t.tipsSection.description}</p>
            <Button href="/examples" variant="secondary" className="mt-6 w-fit" locale={locale}>
              {t.tipsSection.cta}
            </Button>
          </div>
          <CheckList items={t.tips} className="lg:mt-4" />
        </div>
      </Section>

      {/* After the result: capabilities */}
      <Section>
        <SectionHeading
          eyebrow={t.afterSection.eyebrow}
          title={t.afterSection.title}
          description={t.afterSection.description}
        />
        <div className="mt-12">
          <FeatureGrid locale={locale} />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading eyebrow={c.faqEyebrow} title={t.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={howFaqs} />
        </div>
      </Section>

      <CTA
        title={t.ctaTitle}
        description={t.ctaDescription}
        secondary={{ label: t.ctaSecondary, href: "/examples" }}
        locale={locale}
      />
    </>
  );
}
