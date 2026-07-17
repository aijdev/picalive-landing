import Link from "next/link";
import type { Shot } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { Screenshot } from "./Screenshot";
import { CheckList } from "./CheckList";
import { ArrowRightIcon } from "./Icons";

/** Image-beside-text feature block; alternate `reversed` for a zig-zag layout. */
export function AlternatingFeature({
  eyebrow,
  title,
  description,
  bullets,
  shot,
  reversed = false,
  cta,
  priority = false,
  locale = defaultLocale,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  shot: Shot;
  reversed?: boolean;
  cta?: { label: string; href: string };
  priority?: boolean;
  locale?: Locale;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reversed ? "lg:order-2" : ""}>
        <span className="text-sm font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        <CheckList items={bullets} className="mt-6" />
        {cta ? (
          <Link
            href={localizedPath(cta.href, locale)}
            className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
          >
            {cta.label}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        ) : null}
      </div>

      <div className={`flex justify-center ${reversed ? "lg:order-1" : ""}`}>
        <Screenshot
          shot={shot}
          priority={priority}
          width={320}
          className="w-[240px] sm:w-[280px] lg:w-[320px]"
        />
      </div>
    </div>
  );
}
