import Link from "next/link";
import { FEATURES } from "../lib/content";
import { Section, SectionHeading } from "./Section";
import { ArrowRightIcon } from "./Icons";

/**
 * Sideways links between feature pages so every feature deep-links to its
 * siblings (not just back up to the /features hub) — strengthens the internal
 * link mesh for SEO and gives readers an obvious next page.
 */
export function RelatedFeatures({ currentSlug }: { currentSlug: string }) {
  const related = FEATURES.filter((f) => f.slug !== currentSlug);
  if (related.length === 0) return null;

  return (
    <Section>
      <SectionHeading
        eyebrow="Keep exploring"
        title="More PicAlive features"
        description="Every part of PicAlive is built around the same one-tap loop. See what else it does."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {related.map((feature) => (
          <Link
            key={feature.slug}
            href={feature.href}
            className="card card-hover group flex flex-col gap-3 p-7"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-semibold tracking-tight">
                {feature.name}
              </h3>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1" />
            </div>
            <p className="text-sm leading-relaxed text-muted">{feature.blurb}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
