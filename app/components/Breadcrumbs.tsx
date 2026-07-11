import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "../lib/schema";

export type Crumb = { name: string; path: string };

/** Visual breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-muted">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className="text-foreground">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.path}
                      className="transition-colors hover:text-foreground"
                    >
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true" className="text-border-strong">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
