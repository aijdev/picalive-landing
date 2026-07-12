import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../lib/seo";
import { SITE_NAME } from "../lib/site";
import { FEATURES, SHOTS } from "../lib/content";
import { softwareAppSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { CompanionApps } from "../components/CompanionApps";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { ArrowRightIcon } from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Features — Photo to Video AI, Old Photo Animation & More",
  description:
    "Everything PicAlive can do: turn any photo into a realistic AI video, bring old family portraits back to life, and save or share every clip. One tap, no editing skills — free on iPhone and iPad.",
  path: "/features",
  keywords: [
    "PicAlive features",
    "photo to video AI",
    "animate old photos",
    "photo animation app features",
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={softwareAppSchema()} />

      <PageHeader
        eyebrow="Features"
        title="Everything PicAlive can do"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ]}
        intro="PicAlive is one delightful loop — pick a photo, tap once, get a living video. These pages go deeper on what that loop makes possible, from animating brand-new selfies to reviving decades-old portraits."
        actions={<AppStoreButton size="md" />}
      />

      {/* Feature cards */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <Link
              key={feature.slug}
              href={feature.href}
              className="card card-hover group flex flex-col gap-4 p-7"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl font-semibold tracking-tight">
                  {feature.name}
                </h2>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1" />
              </div>
              <p className="text-sm leading-relaxed text-muted">{feature.blurb}</p>
              <span className="mt-auto text-sm font-medium text-brand">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* One loop overview */}
      <Section className="bg-surface">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="One simple loop"
              title="A sophisticated AI, distilled to a single tap"
              align="left"
            />
            <p className="text-lg leading-relaxed text-muted">
              There are no prompts to write, styles to pick, or timelines to
              edit. Every feature on this page rides the same flow: choose a
              photo, tap Make Alive, and a few minutes later a realistic,
              looping video is ready to save and share.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/how-it-works" variant="secondary">
                See the full walkthrough
              </Button>
              <Button href="/examples" variant="secondary">
                Browse examples
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[320px]">
            <Screenshot shot={SHOTS.memories} priority width={320} />
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section>
        <SectionHeading
          eyebrow="The AI Journey family"
          title={`More AI creativity beyond ${SITE_NAME}`}
          description="Need prompt-driven video, image generation, photo repair, or face swaps? A sibling app has it covered."
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>

      <CTA
        title="Try every feature free"
        description="Download PicAlive and bring your first photo to life today — no account, no editing skills."
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}
