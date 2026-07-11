import { HOW_IT_WORKS } from "../lib/content";

/** Four-step "how it works" sequence shared by the home and features pages. */
export function HowItWorks() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {HOW_IT_WORKS.map((step) => (
        <li key={step.step} className="card flex flex-col gap-3 p-6">
          <span className="text-3xl font-bold tabular-nums text-gradient">
            {step.step}
          </span>
          <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
