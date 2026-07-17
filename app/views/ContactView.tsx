import { APP_STORE_URL, SUPPORT_EMAIL } from "../lib/site";
import { getDictionary } from "../i18n/getDictionary";
import { type Locale } from "../i18n/config";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { CTA } from "../components/CTA";
import { MailIcon, StarIcon, HeartIcon } from "../components/Icons";

export function ContactView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contactPage;
  const c = getDictionary(locale).common;

  return (
    <>
      <PageHeader
        eyebrow={t.header.eyebrow}
        title={t.header.title}
        crumbs={[
          { name: c.breadcrumbHome, path: "/" },
          { name: c.footer.links.contact, path: "/contact" },
        ]}
        intro={t.header.intro}
        locale={locale}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <MailIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">{t.emailCard.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{t.emailCard.body}</p>
            <Button
              href={`mailto:${SUPPORT_EMAIL}`}
              external
              variant="secondary"
              className="mt-auto w-full justify-center"
              locale={locale}
            >
              {SUPPORT_EMAIL}
            </Button>
          </div>

          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <HeartIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">{t.feedbackCard.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{t.feedbackCard.body}</p>
            <Button
              href="/faq"
              variant="secondary"
              className="mt-auto w-full justify-center"
              locale={locale}
            >
              {t.feedbackCard.cta}
            </Button>
          </div>

          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <StarIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">{t.rateCard.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{t.rateCard.body}</p>
            <Button
              href={APP_STORE_URL}
              external
              variant="secondary"
              className="mt-auto w-full justify-center"
              locale={locale}
            >
              {t.rateCard.cta}
            </Button>
          </div>
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
