import { CheckIcon } from "./Icons";

/** Bullet list with brand check marks — used for feature/benefit lists. */
export function CheckList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
            <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span className="text-muted-strong">{item}</span>
        </li>
      ))}
    </ul>
  );
}
