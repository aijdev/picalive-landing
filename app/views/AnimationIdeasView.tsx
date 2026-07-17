import { getDictionary } from "../i18n/getDictionary";
import { type Locale, localizedUrl } from "../i18n/config";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export function AnimationIdeasView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).animationIdeasPage;
  const c = getDictionary(locale).common;

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive Photo Animator",
          description: "Turn still photos into realistic AI-animated videos on iPhone and iPad.",
          url: localizedUrl("/animation-ideas", locale),
          locale,
        })}
      />
      <JsonLd data={faqSchema(t.faqs)} />

      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: t.header.eyebrow, path: "/animation-ideas" },
        ]}
        intro={t.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      {/* Ideas by category */}
      <Section>
        <SectionHeading
          eyebrow={t.ideasSection.eyebrow}
          title={t.ideasSection.title}
          description={t.ideasSection.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.categories.map((category) => (
            <div key={category.name} className="card flex flex-col gap-4 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{category.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{category.blurb}</p>
              <ul className="flex flex-col gap-2.5">
                {category.ideas.map((idea) => (
                  <li
                    key={idea}
                    className="rounded-xl bg-surface px-4 py-3 text-sm leading-snug text-muted-strong ring-1 ring-border"
                  >
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Tips */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t.tipsSection.eyebrow}
              title={t.tipsSection.title}
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">{t.tipsSection.description}</p>
            <Button
              href="/features/photo-to-video"
              variant="secondary"
              className="mt-6 w-fit"
              locale={locale}
            >
              {t.tipsSection.cta}
            </Button>
          </div>
          <CheckList items={t.tips} className="lg:mt-4" />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow={c.faqEyebrow} title={t.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={t.faqs} />
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
