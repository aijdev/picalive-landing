import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { AppStoreButton } from "./AppStoreButton";
import { FOOTER_NAV, SITE_NAME, SITE_TAGLINE } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {SITE_NAME} — {SITE_TAGLINE.toLowerCase()}. Turn any still photo
              into a realistic, AI-generated moving video on iPhone and iPad.
            </p>
            <AppStoreButton size="md" />
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {FOOTER_NAV.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
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

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
