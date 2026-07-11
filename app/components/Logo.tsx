import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "../lib/site";

export function Logo({
  className = "",
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${SITE_NAME} home`}
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
