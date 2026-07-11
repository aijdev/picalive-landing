import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SUPPORT_EMAIL } from "../lib/site";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";
import {
  ShieldIcon,
  PhotoIcon,
  CheckIcon,
  SparklesIcon,
} from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Privacy — How PicAlive Handles Your Data",
  description:
    "An overview of privacy in PicAlive: no accounts or logins, an anonymous device identity, explicit tracking consent, a content-safety filter, and clear handling of the photos you animate.",
  path: "/privacy",
  keywords: ["PicAlive privacy", "photo animation privacy", "app tracking transparency"],
});

const PRINCIPLES = [
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "No accounts, no logins",
    body: "PicAlive has no user accounts, emails, or passwords. Each user gets a unique, anonymous ID stored securely in the device Keychain, so you can start creating immediately with nothing to leak.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Consent before tracking",
    body: "Before any personalized advertising, PicAlive presents Apple's App Tracking Transparency prompt, so you decide up front what you're comfortable with.",
  },
  {
    icon: <PhotoIcon className="h-6 w-6" />,
    title: "Your photos, your choice",
    body: "The photo you choose is sent to PicAlive's cloud service to generate your video. Saving the finished clip to your device is a deliberate step you take — the result is yours to keep and share.",
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Content-safety built in",
    body: "The backend can reject unsafe or inappropriate images, surfaced to you as a clear message, helping keep the experience appropriate for everyone.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy at PicAlive"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
        intro="PicAlive is designed to be fun and low-friction without asking for more than it needs. Here's a plain-language overview of how the app approaches your privacy."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="flex flex-col gap-3 card p-7">
              <span className="icon-badge h-11 w-11">{p.icon}</span>
              <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Your photos and videos
            </h2>
            <p className="leading-relaxed text-muted">
              PicAlive generates videos by calling a hosted AI service, so the
              photo you choose is processed to produce your result. Finished videos
              aren&apos;t stored in a personal cloud gallery — once you save a clip
              to your device&apos;s photo library, it&apos;s yours to keep and
              share. Free-tier exports carry a small PicAlive watermark; PicAlive
              PRO removes it from every video you save or share.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Subscriptions</h2>
            <p className="leading-relaxed text-muted">
              PicAlive PRO is purchased and managed through your Apple ID. Your
              subscription entitlement is stored per device rather than in a
              cross-device account, and Restore Purchases re-applies an active
              subscription on the same device. Payment is handled entirely by
              Apple — PicAlive never sees your card details.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Permissions we request
            </h2>
            <p className="leading-relaxed text-muted">
              PicAlive asks for access to your photo library so it can save
              finished videos, and presents the App Tracking Transparency prompt
              for personalized advertising. You can review or change these anytime
              in your device&apos;s Settings.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Questions about your data
            </h2>
            <p className="leading-relaxed text-muted">
              This page is a plain-language summary, not the full legal policy. For
              the complete privacy policy, data-handling details, or any specific
              request, email{" "}
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
        title="Create with confidence"
        description="Download PicAlive and start animating — no account, no profile, no fuss."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
