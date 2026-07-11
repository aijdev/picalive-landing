import { APP_STORE_URL } from "../lib/site";
import { AppleIcon } from "./Icons";

/**
 * "Download on the App Store" badge. Built as an accessible custom button
 * (rather than a static image) so it stays crisp on every screen and theme.
 */
export function AppStoreButton({
  className = "",
  size = "lg",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  // "sm" is a compact single-line pill for tight spots like the mobile header.
  if (size === "sm") {
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download PicAlive on the App Store"
        className={`inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-semibold tracking-tight text-background shadow-soft transition-all duration-200 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
      >
        <AppleIcon className="h-4 w-4" />
        App Store
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
      aria-label="Download PicAlive on the App Store"
      className={`group inline-flex items-center gap-3 rounded-2xl bg-foreground ${pad} text-background shadow-soft transition-all duration-200 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      <AppleIcon className={iconSize} />
      <span className="flex flex-col items-start leading-none">
        <span className={`${small} font-medium opacity-80`}>Download on the</span>
        <span className={`${big} font-semibold tracking-tight`}>App Store</span>
      </span>
    </a>
  );
}
