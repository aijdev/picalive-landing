"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { type Locale, localizedPath } from "../i18n/config";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AppleIcon, CloseIcon, MenuIcon } from "./Icons";

type NavItem = { label: string; href: string };

/**
 * Site header. Rendered by the server layout, which passes already-resolved,
 * localized strings so no translation dictionary reaches the client bundle.
 */
export function Header({
  locale,
  navItems,
  appStore,
  homeAria,
  menuLabels,
  switcherLabel,
}: {
  locale: Locale;
  navItems: NavItem[];
  appStore: { href: string; ariaLabel: string; name: string };
  homeAria: string;
  menuLabels: { open: string; close: string };
  switcherLabel: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open, and let Escape close it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const home = localizedPath("/", locale);
  function isActive(href: string) {
    return href === home ? pathname === home : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo locale={locale} homeAria={homeAria} />

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher locale={locale} label={switcherLabel} />
            </div>
            <a
              href={appStore.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={appStore.ariaLabel}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-semibold tracking-tight text-background shadow-soft transition-all duration-200 hover:shadow-lift"
            >
              <AppleIcon className="h-4 w-4" />
              {appStore.name}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? menuLabels.close : menuLabels.open}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface md:hidden"
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
              {navItems.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-surface text-foreground"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-3">
                <LanguageSwitcher locale={locale} label={switcherLabel} />
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
