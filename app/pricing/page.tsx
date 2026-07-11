import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { FAQS, PLANS, PLAN_COMPARISON, PRO_BENEFITS } from "../lib/content";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { CheckIcon } from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — PicAlive PRO Plans",
  description:
    "PicAlive is free to try. Go PRO for unlimited, watermark-free videos with priority processing — Weekly from $2.99 your first week, or Quarterly for the best value. Cancel anytime.",
  path: "/pricing",
  keywords: [
    "PicAlive pricing",
    "PicAlive PRO cost",
    "photo to video app price",
    "PicAlive subscription",
  ],
});

const pricingFaqs = FAQS[2].items;

const FINE_PRINT = [
  "All plans auto-renew and can be cancelled anytime in your Apple ID subscription settings.",
  "Prices are shown in the app and localized to your region by the App Store.",
  "Payment is handled entirely by Apple — PicAlive never sees your card details.",
  "Restore Purchases re-applies an active subscription on the same device.",
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Free to try. PRO when you want more."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
        intro="Animate your first photo for free during onboarding — no account, no credit card. When you're ready to create without limits, PicAlive PRO unlocks unlimited, watermark-free videos with priority processing."
        actions={<AppStoreButton size="md" />}
      />

      {/* Plans */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`card relative flex flex-col gap-5 p-8 ${
                plan.featured ? "ring-2 ring-brand" : ""
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 right-6 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  Most popular
                </span>
              ) : null}
              <h2 className="text-lg font-semibold tracking-tight">{plan.name}</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.cadence}</span>
              </div>
              {plan.intro ? (
                <span className="w-fit rounded-full bg-surface px-3 py-1 text-sm font-medium text-brand ring-1 ring-border">
                  {plan.intro}
                </span>
              ) : (
                <span className="w-fit rounded-full bg-surface px-3 py-1 text-sm font-medium text-muted ring-1 ring-border">
                  Best value
                </span>
              )}
              <p className="text-sm leading-relaxed text-muted">{plan.blurb}</p>
              <AppStoreButton size="md" className="mt-auto w-full justify-center" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="card p-8">
            <h3 className="text-lg font-semibold tracking-tight">
              Everything in PicAlive PRO
            </h3>
            <CheckList items={PRO_BENEFITS} className="mt-5" />
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Free vs PRO"
          title="What you get at each tier"
          description="PicAlive is genuinely useful for free. PRO removes the limits and the watermark."
        />
        <div className="mx-auto mt-12 max-w-3xl overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse overflow-hidden rounded-2xl border border-border">
            <thead>
              <tr className="bg-card text-left">
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  Feature
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  Free
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-brand">
                  PRO
                </th>
              </tr>
            </thead>
            <tbody>
              {PLAN_COMPARISON.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="border-t border-border bg-card px-5 py-4 text-left text-sm font-medium"
                  >
                    {row.label}
                  </th>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.free}
                  </td>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted-strong">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-brand">
                        <CheckIcon className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      {row.pro}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          {FINE_PRINT.join(" ")}
        </p>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Pricing & subscription questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={pricingFaqs} />
        </div>
      </Section>

      <CTA
        title="Start free, upgrade anytime"
        description="Download PicAlive, animate your first photo free, and go PRO whenever you want unlimited, watermark-free videos."
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}
