import Image from "next/image";
import type { Shot } from "../lib/content";

/**
 * App Store screenshot presented in a subtle rounded frame. The source images
 * already include a device mockup and marketing headline, so we avoid wrapping
 * them in a second phone frame and just give them a clean, elevated card.
 */
export function Screenshot({
  shot,
  priority = false,
  className = "",
  width = 380,
  sizes = "(max-width: 640px) 70vw, 380px",
}: {
  shot: Shot;
  priority?: boolean;
  className?: string;
  width?: number;
  sizes?: string;
}) {
  // Source screenshots are 1284×2778 (≈0.462 aspect ratio).
  const height = Math.round(width * (2778 / 1284));
  return (
    <figure className={`relative ${className}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="h-auto w-full rounded-[2rem] shadow-lift ring-1 ring-border"
      />
    </figure>
  );
}
