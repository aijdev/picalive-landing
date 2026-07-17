import { getContent } from "../lib/content";
import { type Locale, defaultLocale } from "../i18n/config";

/** Four-step "how it works" sequence shared by the home and features pages. */
export function HowItWorks({ locale = defaultLocale }: { locale?: Locale }) {
  const steps = getContent(locale).howItWorks;
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
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
