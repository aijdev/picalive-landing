import { APP_STORE_URL, SITE_NAME } from "../lib/site";
import { type Locale, defaultLocale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { AppleIcon } from "./Icons";

/**
 * "Download on the App Store" badge. Built as an accessible custom button
 * (rather than a static image) so it stays crisp on every screen and theme.
 */
export function AppStoreButton({
  className = "",
  size = "lg",
  locale = defaultLocale,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  locale?: Locale;
}) {
  const t = getDictionary(locale).common;
  const ariaLabel = t.appStoreAria.replace("{name}", SITE_NAME);

  // "sm" is a compact single-line pill for tight spots like the mobile header.
  if (size === "sm") {
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-semibold tracking-tight text-background shadow-soft transition-all duration-200 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
      >
        <AppleIcon className="h-4 w-4" />
        {t.appStoreName}
      </a>
    );
  }

  const pad = size === "lg" ? "h-14 px-6" : "h-12 px-5";
  const iconSize = size === "lg" ? "h-7 w-7" : "h-6 w-6";
  const small = size === "lg" ? "text-[11px]" : "text-[10px]";
  const big = size === "lg" ? "text-lg" : "text-base";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`group inline-flex items-center gap-3 rounded-2xl bg-foreground ${pad} text-background shadow-soft transition-all duration-200 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      <AppleIcon className={iconSize} />
      <span className="flex flex-col items-start leading-none">
        <span className={`${small} font-medium opacity-80`}>{t.appStoreDownloadOn}</span>
        <span className={`${big} font-semibold tracking-tight`}>{t.appStoreName}</span>
      </span>
    </a>
  );
}
