import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { AppStoreButton } from "./AppStoreButton";
import { SITE_NAME } from "../lib/site";
import { getContent, PORTFOLIO } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

/** Legal pages are English-only; they always link to the un-prefixed root. */
const LEGAL_PATHS = new Set(["/privacy", "/terms"]);

function footerHref(path: string, locale: Locale): string {
  return LEGAL_PATHS.has(path) ? path : localizedPath(path, locale);
}

export function Footer({ locale = defaultLocale }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const common = getDictionary(locale).common;
  const t = common.footer;
  const homeAria = common.homeAria.replace("{name}", SITE_NAME);
  const companions = getContent(locale).companionApps;

  const groups = [
    {
      title: t.productTitle,
      links: [
        { label: t.links.overview, href: "/" },
        { label: t.links.features, href: "/features" },
        { label: t.links.howItWorks, href: "/how-it-works" },
        { label: t.links.examples, href: "/examples" },
        { label: t.links.animationIdeas, href: "/animation-ideas" },
      ],
    },
    {
      title: t.companyTitle,
      links: [
        { label: t.links.about, href: "/about" },
        { label: t.links.faq, href: "/faq" },
        { label: t.links.contact, href: "/contact" },
      ],
    },
    {
      title: t.legalTitle,
      links: [
        { label: t.links.privacy, href: "/privacy" },
        { label: t.links.terms, href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo locale={locale} homeAria={homeAria} />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {t.tagline}
            </p>
            <AppStoreButton size="md" locale={locale} />
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={footerHref(link.href, locale)}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-border py-8">
          <h2 className="text-sm font-semibold text-foreground">
            {t.moreFrom}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {companions.map((app) => (
              <li key={app.name}>
                <a
                  href={app.href}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {app.name}
                  <span className="ml-1.5 text-muted/70">{app.what}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={PORTFOLIO.url}
                target="_blank"
                rel="noopener"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {PORTFOLIO.name}
                <span className="ml-1.5 text-muted/70">{t.portfolioLabel}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {SITE_NAME}. {t.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              {t.links.privacy}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              {t.links.terms}
            </Link>
            <Link
              href={localizedPath("/contact", locale)}
              className="transition-colors hover:text-foreground"
            >
              {t.links.contact}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
