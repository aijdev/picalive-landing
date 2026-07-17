import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "../lib/site";

import { AppShell } from "../components/AppShell";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";

// Legal pages are English-only: no localized copies, no hreflang alternates.
export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "A plain-language summary of the PicAlive Terms of Use — using the app, subscriptions and billing through Apple, acceptable use and content safety, and ownership of the videos you create.",
  path: "/terms",
  locale: "en",
  alternates: false,
  keywords: ["PicAlive terms of use", "PicAlive terms", "photo animation app terms"],
});

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "Using PicAlive",
    body: "PicAlive lets you turn a still photo into an AI-generated video on iPhone and iPad. You may use the app for personal, non-commercial enjoyment. You are responsible for the photos you choose to animate and should only use images you have the right to use.",
  },
  {
    title: "No account needed",
    body: "PicAlive has no logins or accounts. Your usage and any PicAlive PRO entitlement are tied to an anonymous identifier on your device rather than to a personal account, so there is no username or password to manage.",
  },
  {
    title: "Subscriptions & billing",
    body: "PicAlive is free to try. PicAlive PRO is an auto-renewing subscription (Weekly or Quarterly) purchased through your Apple ID. Payment is charged to your Apple account, renews automatically unless cancelled at least 24 hours before the period ends, and can be managed or cancelled anytime in your Apple ID settings. Prices are shown in the app and set by the App Store for your region.",
  },
  {
    title: "Acceptable use & content safety",
    body: "Don't use PicAlive to create, upload, or share content that is unlawful, harmful, or that impersonates or harasses others. A content-safety filter may reject images it detects as unsafe or inappropriate. We may limit or suspend access that violates these terms or abuses the service.",
  },
  {
    title: "Your content & ownership",
    body: "The videos you generate from your own photos are yours to save and share. The PicAlive app, its design, branding, and underlying technology remain the property of PicAlive and the AI Journey team. Free-tier videos include a small PicAlive watermark; PicAlive PRO removes it.",
  },
  {
    title: "Disclaimers",
    body: "PicAlive is provided “as is.” AI-generated results can vary, and we don't guarantee that every animation will meet your expectations or that the service will be uninterrupted. To the extent permitted by law, PicAlive is not liable for indirect or incidental damages arising from use of the app.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms as the app evolves. Continued use of PicAlive after an update means you accept the revised terms. Significant changes will be reflected here.",
  },
];

export default function TermsPage() {
  return (
    <AppShell locale="en">
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]}
        intro={`A plain-language summary of the terms for using ${SITE_NAME}. This overview is not a substitute for the full legal agreement — contact us anytime for the complete text.`}
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
              <p className="leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="leading-relaxed text-muted">
              Questions about these terms? Email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              and the team will help.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to bring a photo to life?"
        description="Download PicAlive free and turn a still photo into a living, shareable video in seconds."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </AppShell>
  );
}
