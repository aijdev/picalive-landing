import { COMPANION_APPS, PORTFOLIO } from "../lib/content";

/**
 * Cross-promotion strip for the wider AI Photo Journey app family. Every card
 * is a followable outbound link to a sibling app's own site, and the note below
 * links back to the company hub — building a dense, reciprocal cross-link graph
 * across the family for SEO.
 */
export function CompanionApps() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {COMPANION_APPS.map((app) => (
          <a
            key={app.name}
            href={app.href}
            target="_blank"
            rel="noopener"
            className="card flex flex-col items-center gap-2 p-6 text-center transition-colors hover:border-foreground/30"
          >
            <span className="text-3xl" aria-hidden="true">
              {app.emoji}
            </span>
            <span className="font-semibold tracking-tight">{app.name}</span>
            <span className="text-xs text-muted">{app.what}</span>
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-muted">
        Part of{" "}
        <a
          href={PORTFOLIO.pageUrl}
          target="_blank"
          rel="noopener"
          className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          {PORTFOLIO.name}
        </a>{" "}
        — a family of AI creativity apps for iPhone and iPad.
      </p>
    </div>
  );
}
