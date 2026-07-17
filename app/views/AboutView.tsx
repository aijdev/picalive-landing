import { RATING, USERS } from "../lib/site";
import { getContent } from "../lib/content";
import { getDictionary } from "../i18n/getDictionary";
import { type Locale } from "../i18n/config";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CompanionApps } from "../components/CompanionApps";
import { CTA } from "../components/CTA";

export function AboutView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const t = getDictionary(locale).aboutPage;
  const c = getDictionary(locale).common;

  return (
    <>
      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: c.nav.about, path: "/about" },
        ]}
        intro={t.header.intro}
        locale={locale}
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-muted">
          <p>
            <span className="font-semibold text-foreground">{t.missionLead}</span>{" "}
            {t.missionBody1}
          </p>
          <p>{t.missionBody2}</p>
          <p className="card p-6 text-xl font-medium text-foreground">{t.pullQuote}</p>
          <p>{t.ratingLine.replace("{rating}", RATING).replace("{users}", USERS)}</p>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow={t.audienceSection.eyebrow} title={t.audienceSection.title} />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl border border-border">
            <thead>
              <tr className="bg-card text-left">
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  {t.audienceSection.colAudience}
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  {t.audienceSection.colWant}
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  {t.audienceSection.colHow}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.audience.map((row) => (
                <tr key={row.who}>
                  <th
                    scope="row"
                    className="border-t border-border bg-card px-5 py-4 text-left text-sm font-medium"
                  >
                    {row.who}
                  </th>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.want}
                  </td>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.how}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={t.strengthsSection.eyebrow} title={t.strengthsSection.title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.strengths.map((s) => (
            <div key={s.title} className="flex flex-col gap-2 card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t.familySection.eyebrow}
          title={t.familySection.title}
          description={t.familySection.descriptionTemplate.replace(
            "{count}",
            String(content.companionApps.length + 1),
          )}
        />
        <div className="mt-12">
          <CompanionApps locale={locale} />
        </div>
      </Section>

      <CTA locale={locale} />
    </>
  );
}
