import { AppStoreButton } from "./AppStoreButton";
import { Button } from "./Button";
import { StarIcon } from "./Icons";
import { Container } from "./Container";
import { RATING, USERS } from "../lib/site";
import { type Locale, defaultLocale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

/** Reusable "download" conversion band used near the foot of most pages. */
export function CTA({
  title,
  description,
  secondary,
  locale = defaultLocale,
}: {
  title?: string;
  description?: string;
  secondary?: { label: string; href: string };
  locale?: Locale;
}) {
  const t = getDictionary(locale).common;
  const heading = title ?? t.ctaDefault.title;
  const body = description ?? t.ctaDefault.description;
  const ratedBy = t.ctaRatedBy.replace("{rating}", RATING).replace("{users}", USERS);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
            <p className="text-lg text-muted">{body}</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <AppStoreButton locale={locale} />
              {secondary ? (
                <Button href={secondary.href} variant="secondary" size="lg" locale={locale}>
                  {secondary.label}
                </Button>
              ) : null}
            </div>
            <p className="flex items-center gap-2 text-sm text-muted">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-star" />
                ))}
              </span>
              {ratedBy}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
