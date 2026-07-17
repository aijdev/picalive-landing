import Link from "next/link";
import { getContent } from "../lib/content";
import { getDictionary } from "../i18n/getDictionary";
import { SITE_NAME } from "../lib/site";
import { type Locale, localizedPath } from "../i18n/config";
import { softwareAppSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { CompanionApps } from "../components/CompanionApps";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { ArrowRightIcon } from "../components/Icons";

export function FeaturesView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const t = getDictionary(locale).featuresPage;
  const c = getDictionary(locale).common;

  return (
    <>
      <JsonLd data={softwareAppSchema({ locale })} />

      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: c.nav.features, path: "/features" },
        ]}
        intro={t.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      {/* Feature cards */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {content.features.map((feature) => (
            <Link
              key={feature.slug}
              href={localizedPath(feature.href, locale)}
              className="card card-hover group flex flex-col gap-4 p-7"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl font-semibold tracking-tight">{feature.name}</h2>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1" />
              </div>
              <p className="text-sm leading-relaxed text-muted">{feature.blurb}</p>
              <span className="mt-auto text-sm font-medium text-brand">{c.learnMore}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* One loop overview */}
      <Section className="bg-surface">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow={t.oneLoopSection.eyebrow}
              title={t.oneLoopSection.title}
              align="left"
            />
            <p className="text-lg leading-relaxed text-muted">{t.oneLoopSection.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/how-it-works" variant="secondary" locale={locale}>
                {t.oneLoopSection.cta1}
              </Button>
              <Button href="/examples" variant="secondary" locale={locale}>
                {t.oneLoopSection.cta2}
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[320px]">
            <Screenshot shot={content.shots.memories} priority width={320} />
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section>
        <SectionHeading
          eyebrow={t.companionSection.eyebrow}
          title={t.companionSection.title.replace("{name}", SITE_NAME)}
          description={t.companionSection.description}
        />
        <div className="mt-12">
          <CompanionApps locale={locale} />
        </div>
      </Section>

      <CTA
        title={t.cta.title}
        description={t.cta.description}
        secondary={{ label: t.cta.secondary, href: "/how-it-works" }}
        locale={locale}
      />
    </>
  );
}
