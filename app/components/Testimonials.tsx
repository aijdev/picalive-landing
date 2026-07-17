import { getContent } from "../lib/content";
import { type Locale, defaultLocale } from "../i18n/config";
import { StarIcon } from "./Icons";

export function Testimonials({ locale = defaultLocale }: { locale?: Locale }) {
  const testimonials = getContent(locale).testimonials;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.name} className="card flex flex-col gap-4 p-6 sm:p-7">
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4 text-star" />
            ))}
          </div>
          <blockquote className="text-muted-strong leading-relaxed">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-auto flex items-center gap-3 text-sm">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white"
            >
              {t.name.charAt(0)}
            </span>
            <span>
              <span className="block font-semibold text-foreground">{t.name}</span>
              <span className="block text-muted">{t.role}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
