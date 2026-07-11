import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { APP_STORE_URL, SUPPORT_EMAIL } from "../lib/site";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { CTA } from "../components/CTA";
import { MailIcon, StarIcon, HeartIcon } from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Contact PicAlive — Support & Feedback",
  description:
    "Get in touch with the PicAlive team. Email support, share feedback, or rate PicAlive on the App Store. We're one message away.",
  path: "/contact",
  keywords: ["PicAlive support", "PicAlive contact", "PicAlive feedback"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        intro="Whether you have a question, hit a snag, or just brought a photo to life that you're proud of, the PicAlive team is one message away."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <MailIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">Email support</h2>
            <p className="text-sm leading-relaxed text-muted">
              Questions, bug reports, subscription help, or privacy requests — send
              them our way and we&apos;ll get back to you.
            </p>
            <Button
              href={`mailto:${SUPPORT_EMAIL}`}
              external
              variant="secondary"
              className="mt-auto w-full justify-center"
            >
              {SUPPORT_EMAIL}
            </Button>
          </div>

          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <HeartIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">In-app feedback</h2>
            <p className="text-sm leading-relaxed text-muted">
              After a result, tap “Happy with the result?” If something isn&apos;t
              right, choose “Not really” to send feedback that reaches the team
              directly.
            </p>
            <Button href="/faq" variant="secondary" className="mt-auto w-full justify-center">
              Read the FAQ first
            </Button>
          </div>

          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <StarIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">Rate PicAlive</h2>
            <p className="text-sm leading-relaxed text-muted">
              Enjoying the app? A rating on the App Store genuinely helps other
              people discover PicAlive.
            </p>
            <Button
              href={APP_STORE_URL}
              external
              variant="secondary"
              className="mt-auto w-full justify-center"
            >
              Rate on the App Store
            </Button>
          </div>
        </div>
      </Section>

      <CTA
        title="Haven't tried PicAlive yet?"
        description="Download it free and watch your first photo come alive in seconds."
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}
