import { RATING, RATINGS_COUNT, USERS } from "../lib/site";
import { StarIcon } from "./Icons";

const STATS = [
  { value: RATING, label: "App Store rating", stars: true },
  { value: USERS, label: "Happy users" },
  { value: RATINGS_COUNT, label: "Five-star ratings" },
  { value: "1 tap", label: "To make a photo move" },
];

/** Compact social-proof row surfacing the app's headline numbers. */
export function StatStrip() {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.375rem] border border-border bg-border shadow-soft sm:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col-reverse items-center gap-1.5 bg-card px-4 py-7 text-center"
        >
          {/* dt must precede dd in the markup; flex-col-reverse keeps the
              value visually on top. */}
          <dt className="text-sm text-muted">{stat.label}</dt>
          <dd className="flex items-center gap-1.5 text-3xl font-bold tracking-tight sm:text-[2rem]">
            {stat.stars ? <StarIcon className="h-5 w-5 text-star" /> : null}
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
