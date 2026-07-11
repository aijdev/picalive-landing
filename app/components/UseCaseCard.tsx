import type { UseCase } from "../lib/content";

/** Full use-case card: audience, problem, solution, and a concrete example. */
export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <article className="card card-hover flex flex-col gap-4 p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-2xl ring-1 ring-border"
        >
          {useCase.emoji}
        </span>
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand ring-1 ring-border">
          {useCase.audience}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight">{useCase.title}</h3>

      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        <p className="text-muted">
          <span className="font-semibold text-foreground">The problem — </span>
          {useCase.problem}
        </p>
        <p className="text-muted">
          <span className="font-semibold text-foreground">With PicAlive — </span>
          {useCase.solution}
        </p>
      </div>

      <p className="mt-auto rounded-xl bg-surface p-4 text-sm italic leading-relaxed text-muted-strong">
        {useCase.example}
      </p>
    </article>
  );
}
