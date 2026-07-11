import type { Faq as FaqType } from "../lib/content";
import { ChevronDownIcon } from "./Icons";

/**
 * Accessible FAQ accordion built on native <details>/<summary> — no JavaScript,
 * keyboard-friendly, and indexable by search engines.
 */
export function FaqList({ items }: { items: FaqType[] }) {
  return (
    <div className="card divide-y divide-border overflow-hidden p-0">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-semibold transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 group-open:rotate-180 group-open:border-brand/40 group-open:text-brand">
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </summary>
          <div className="-mt-1 px-5 pb-5 leading-relaxed text-muted">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
