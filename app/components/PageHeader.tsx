import type { ReactNode } from "react";
import { Container } from "./Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/** Standard interior-page hero: breadcrumbs, eyebrow, H1, intro, and actions. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
  actions,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  crumbs: Crumb[];
  actions?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <div className="brand-glow pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative py-12 sm:py-16">
        <Breadcrumbs crumbs={crumbs} />
        <div className="mt-6 flex max-w-3xl flex-col gap-5">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-[3.25rem]">
            {title}
          </h1>
          {intro ? (
            <p className="text-lg leading-relaxed text-muted sm:text-xl">{intro}</p>
          ) : null}
          {actions ? <div className="mt-2 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </Container>
    </div>
  );
}
