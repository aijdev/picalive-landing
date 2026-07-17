import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "../lib/site";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";

export function Logo({
  className = "",
  withWordmark = true,
  locale = defaultLocale,
  homeAria,
}: {
  className?: string;
  withWordmark?: boolean;
  locale?: Locale;
  /** Resolved "{name} home" label, passed in so this stays dictionary-free
   *  (it is rendered inside the client Header). */
  homeAria?: string;
}) {
  return (
    <Link
      href={localizedPath("/", locale)}
      aria-label={homeAria ?? SITE_NAME}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo.jpg"
        alt="PicAlive app icon"
        width={36}
        height={36}
        priority
        className="h-9 w-9 rounded-[10px] shadow-soft ring-1 ring-border"
      />
      {withWordmark ? (
        <span className="text-lg font-bold tracking-tight">{SITE_NAME}</span>
      ) : null}
    </Link>
  );
}
