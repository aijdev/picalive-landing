import Link from "next/link";
import { RATING, SITE_NAME, USERS } from "../lib/site";
import { getContent } from "../lib/content";
import { getDictionary } from "../i18n/getDictionary";
import { type Locale, localizedPath } from "../i18n/config";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { Container } from "../components/Container";
import { Section, SectionHeading } from "../components/Section";
import { Button } from "../components/Button";
import { AppStoreButton } from "../components/AppStoreButton";
import { Screenshot } from "../components/Screenshot";
import { StatStrip } from "../components/StatStrip";
import { FeatureGrid } from "../components/FeatureGrid";
import { AlternatingFeature } from "../components/AlternatingFeature";
import { HowItWorks } from "../components/HowItWorks";
import { UseCaseCard } from "../components/UseCaseCard";
import { Testimonials } from "../components/Testimonials";
import { CompanionApps } from "../components/CompanionApps";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { CheckList } from "../components/CheckList";
import { StarIcon, PlayIcon } from "../components/Icons";

export function HomeView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const t = getDictionary(locale).home;
  const homeFaqs = content.faqs[0].items;

  return (
    <>
      <JsonLd data={softwareAppSchema({ locale })} />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="brand-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
            <div className="flex flex-col items-start gap-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-strong shadow-soft">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5 text-star" />
                  ))}
                </span>
                <span className="font-semibold text-foreground">{RATING}</span>
                <span className="text-border-strong">·</span>
                {USERS} {t.hero.ratingSuffix}
              </span>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {t.hero.titlePre} <br className="hidden sm:block" />
                <span className="text-gradient">{t.hero.titleAccent}</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {t.hero.description}
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AppStoreButton locale={locale} />
                <Button href="/how-it-works" variant="secondary" size="lg" locale={locale}>
                  <PlayIcon className="h-4 w-4" />
                  {t.hero.exploreCta}
                </Button>
              </div>

              <p className="text-sm text-muted">{t.hero.freeNote}</p>
            </div>

            <div className="relative flex justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-x-[15%] top-[8%] bottom-[8%] rounded-full bg-brand-gradient opacity-20 blur-3xl"
              />
              <Screenshot
                shot={content.shots.memories}
                priority
                width={360}
                sizes="(max-width: 1024px) 70vw, 360px"
                className="relative w-[260px] animate-float sm:w-[320px] lg:w-[360px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Social proof stats */}
      <Container>
        <StatStrip locale={locale} />
      </Container>

      {/* Pillars */}
      <Section id="why">
        <SectionHeading
          eyebrow={t.whySection.eyebrow}
          title={t.whySection.title}
          description={t.whySection.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.pillars.map((pillar) => (
            <div key={pillar.name} className="card flex flex-col gap-3 p-7">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand">
                {pillar.name}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.howSection.eyebrow}
          title={t.howSection.title}
          description={t.howSection.description}
        />
        <div className="mt-12">
          <HowItWorks locale={locale} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/how-it-works" variant="secondary" locale={locale}>
            {t.howSection.cta}
          </Button>
        </div>
      </Section>

      {/* Alternating feature highlights */}
      <Section>
        <div className="flex flex-col gap-20 lg:gap-28">
          <AlternatingFeature
            locale={locale}
            eyebrow={t.alternatingFeatures[0].eyebrow}
            title={t.alternatingFeatures[0].title}
            description={t.alternatingFeatures[0].description}
            bullets={t.alternatingFeatures[0].bullets}
            shot={content.shots.oneTap}
            cta={{ label: t.alternatingFeatures[0].cta, href: "/examples" }}
          />
          <AlternatingFeature
            locale={locale}
            reversed
            eyebrow={t.alternatingFeatures[1].eyebrow}
            title={t.alternatingFeatures[1].title}
            description={t.alternatingFeatures[1].description}
            bullets={t.alternatingFeatures[1].bullets}
            shot={content.shots.breathe}
            cta={{ label: t.alternatingFeatures[1].cta, href: "/how-it-works" }}
          />
          <AlternatingFeature
            locale={locale}
            eyebrow={t.alternatingFeatures[2].eyebrow}
            title={t.alternatingFeatures[2].title}
            description={t.alternatingFeatures[2].description}
            bullets={t.alternatingFeatures[2].bullets}
            shot={content.shots.portrait}
            cta={{ label: t.alternatingFeatures[2].cta, href: "/features/save-and-share" }}
          />
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.featuresSection.eyebrow}
          title={t.featuresSection.title}
          description={t.featuresSection.description}
        />
        <div className="mt-12">
          <FeatureGrid locale={locale} />
        </div>
      </Section>

      {/* Examples */}
      <Section>
        <SectionHeading
          eyebrow={t.examplesSection.eyebrow}
          title={t.examplesSection.title}
          description={t.examplesSection.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.useCases.slice(0, 3).map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} locale={locale} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/examples" variant="secondary" locale={locale}>
            {t.examplesSection.seeAll}
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.testimonialsSection.eyebrow}
          title={t.testimonialsSection.title.replace("{users}", USERS)}
          description={t.testimonialsSection.description.replace("{rating}", RATING)}
        />
        <div className="mt-12">
          <Testimonials locale={locale} />
        </div>
      </Section>

      {/* Free-to-start teaser */}
      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">{t.freeToStart.eyebrow}</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.freeToStart.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted">{t.freeToStart.description}</p>
              <div className="flex flex-wrap gap-3">
                <AppStoreButton size="md" locale={locale} />
                <Button href="/features" variant="secondary" locale={locale}>
                  {t.freeToStart.exploreAllCta}
                </Button>
              </div>
            </div>
            <CheckList className="lg:justify-self-end" items={t.freeToStart.checklist} />
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.companionSection.eyebrow}
          title={t.companionSection.title}
          description={t.companionSection.description}
        />
        <div className="mt-12">
          <CompanionApps locale={locale} />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow={t.faqSection.eyebrow}
          title={t.faqSection.title}
          description={
            <>
              {t.faqSection.descriptionPre}
              <Link href={localizedPath("/faq", locale)} className="font-medium text-brand">
                {t.faqSection.seeFullFaq}
              </Link>
              .
            </>
          }
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={homeFaqs} />
        </div>
      </Section>

      <CTA
        title={t.cta.title}
        description={t.cta.description.replace("{name}", SITE_NAME)}
        secondary={{ label: t.cta.secondary, href: "/how-it-works" }}
        locale={locale}
      />
    </>
  );
}
