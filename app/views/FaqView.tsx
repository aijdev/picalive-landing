import { getContent } from "../lib/content";
import { getDictionary } from "../i18n/getDictionary";
import { type Locale } from "../i18n/config";
import { faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export function FaqView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const t = getDictionary(locale).faqPage;
  const c = getDictionary(locale).common;

  return (
    <>
      <JsonLd data={faqSchema(content.allFaqs)} />

      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: c.nav.faq, path: "/faq" },
        ]}
        intro={t.header.intro}
        locale={locale}
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          {content.faqs.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">{group.category}</h2>
              <FaqList items={group.items} />
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title={t.ctaTitle}
        description={t.ctaDescription}
        secondary={{ label: t.ctaSecondary, href: "/contact" }}
        locale={locale}
      />
    </>
  );
}
