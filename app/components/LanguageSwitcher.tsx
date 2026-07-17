"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  type Locale,
  localeNames,
  locales,
  localizedPath,
  stripLocalePrefix,
} from "../i18n/config";
import { GlobeIcon, ChevronDownIcon } from "./Icons";

/**
 * Crawlable language switcher: renders a real <a> to the equivalent page in
 * every locale, preserving the current path. Imports only from i18n/config
 * (locale metadata + helpers) — never the dictionaries — so no translation
 * data ships to the client.
 */
export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";
  const { basePath } = stripLocalePrefix(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
      >
        <GlobeIcon className="h-4 w-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-border bg-background p-1 shadow-lift"
        >
          {locales.map((l) => (
            <Link
              key={l}
              href={localizedPath(basePath, l)}
              hrefLang={l}
              role="menuitem"
              aria-current={l === locale ? "true" : undefined}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                l === locale
                  ? "bg-surface font-semibold text-foreground"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              {localeNames[l]}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
