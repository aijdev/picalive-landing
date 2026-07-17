import { getContent } from "../lib/content";
import { getDictionary } from "../i18n/getDictionary";
import { type Locale } from "../i18n/config";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { UseCaseCard } from "../components/UseCaseCard";
import { Screenshot } from "../components/Screenshot";
import { AppStoreButton } from "../components/AppStoreButton";
import { CTA } from "../components/CTA";

export function ExamplesView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const t = getDictionary(locale).examplesPage;
  const c = getDictionary(locale).common;

  return (
    <>
      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: c.nav.examples, path: "/examples" },
        ]}
        intro={t.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      {/* Screenshot gallery */}
      <Section>
        <SectionHeading
          eyebrow={t.gallerySection.eyebrow}
          title={t.gallerySection.title}
          description={t.gallerySection.description}
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {content.shotOrder.map((shot) => (
            <figure key={shot.src} className="flex flex-col gap-3">
              <Screenshot shot={shot} width={260} className="w-full" />
              <figcaption className="text-center text-sm text-muted">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Use case cards */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.useCasesSection.eyebrow}
          title={t.useCasesSection.title}
          description={t.useCasesSection.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.useCases.map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Emotional prompts */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={t.feelingSection.eyebrow}
            title={t.feelingSection.title}
            align="center"
          />
          <ul className="mt-10 flex flex-col gap-3">
            {content.problemsSolved.map((problem) => (
              <li
                key={problem}
                className="rounded-2xl border border-border bg-card px-6 py-4 text-lg text-muted-strong shadow-soft"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA
        title={t.ctaTitle}
        description={t.ctaDescription}
        secondary={{ label: t.ctaSecondary, href: "/how-it-works" }}
        locale={locale}
      />
    </>
  );
}
