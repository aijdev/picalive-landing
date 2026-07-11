import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SITE_URL } from "../lib/site";
import { FAQS, SHOTS } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { Screenshot } from "../components/Screenshot";
import { CheckList } from "../components/CheckList";
import { HowItWorks } from "../components/HowItWorks";
import { FeatureGrid } from "../components/FeatureGrid";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "How to Bring a Photo to Life — The Make Alive Flow",
  description:
    "See exactly how PicAlive animates a still photo into a realistic AI video: choose a photo, tap Make Alive, watch the live queue, then save or share. No prompts, styles, or editing.",
  path: "/how-it-works",
  keywords: [
    "how to animate a photo",
    "how to make a photo move",
    "photo to video how it works",
    "AI photo animation",
  ],
});

const howFaqs = FAQS[1].items;

const COMES_ALIVE = [
  { emoji: "😊", label: "Faces", detail: "Smiles, blinks, and subtle expressions" },
  { emoji: "💇", label: "Hair", detail: "Gentle sway and natural movement" },
  { emoji: "🌊", label: "Water", detail: "Rippling, flowing, and reflections" },
  { emoji: "🍃", label: "Foliage", detail: "Leaves and branches drifting in a breeze" },
  { emoji: "☁️", label: "Skies", detail: "Clouds and light shifting overhead" },
  { emoji: "✨", label: "Depth", detail: "A believable sense of a living scene" },
];

const PHOTO_TIPS = [
  "Choose a clear photo where the main subject is easy to see.",
  "Good, even lighting gives the most natural-looking motion.",
  "Photos with a face, a pet, or moving elements like water shine.",
  "Higher-resolution images give the AI more detail to work with.",
  "Scanned or screenshotted old photos work great — give them a try.",
  "If a result isn't quite right, just make it alive again for a fresh take.",
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive — Photo to Video AI",
          description:
            "Turn a still photo into a realistic moving video on iPhone and iPad.",
          url: `${SITE_URL}/how-it-works`,
        })}
      />
      <JsonLd data={faqSchema(howFaqs)} />

      <PageHeader
        eyebrow="How it works"
        title="How to bring a photo to life"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ]}
        intro="PicAlive reduces a sophisticated AI process to a single tap. Here's exactly what happens from the moment you pick a photo to the finished, living video — and why you never have to write a prompt or touch a setting."
        actions={<AppStoreButton size="md" />}
      />

      {/* Intro: no skills required */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              One tap. No prompts, no skills.
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Most AI tools ask you to describe what you want, pick a style, and
              tweak settings before you see anything. PicAlive flips that around.
              You provide a photo — that&apos;s the entire input. The animation
              instructions are written automatically on the server, so from your
              side the experience is fully hands-off.
            </p>
            <CheckList
              items={[
                "No prompt to write and no style to choose",
                "Photos are optimized to Full HD before upload",
                "The result is a standard, shareable video",
                "Every generation is saved to your history",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <Screenshot
              shot={SHOTS.memories}
              priority
              width={300}
              className="w-[240px] sm:w-[300px]"
            />
          </div>
        </div>
      </Section>

      {/* The four steps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="The Make Alive loop"
          title="Four steps, every time"
          description="The same simple rhythm powers every animation you make in PicAlive."
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </Section>

      {/* What comes alive */}
      <Section>
        <SectionHeading
          eyebrow="What moves"
          title="What comes alive in your photo"
          description="PicAlive aims for natural, believable motion across the whole image — not a single cartoonish effect."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMES_ALIVE.map((item) => (
            <div key={item.label} className="card flex items-start gap-4 p-6">
              <span className="text-3xl" aria-hidden="true">
                {item.emoji}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold tracking-tight">{item.label}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Photo tips */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Best results"
              title="How to pick the best photo"
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">
              PicAlive does the creative work — your photo just needs to give it a
              clear starting point. A few simple habits go a long way.
            </p>
            <Button href="/examples" variant="secondary" className="mt-6 w-fit">
              See what to animate
            </Button>
          </div>
          <CheckList items={PHOTO_TIPS} className="lg:mt-4" />
        </div>
      </Section>

      {/* After the result: capabilities */}
      <Section>
        <SectionHeading
          eyebrow="After it's ready"
          title="Save, share, and revisit"
          description="Once your video is generated, everything you need is one tap away."
        />
        <div className="mt-12">
          <FeatureGrid />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="How it works — common questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={howFaqs} />
        </div>
      </Section>

      <CTA
        title="Try it on your own photo"
        description="Download PicAlive free and watch your first still photo come alive in seconds."
        secondary={{ label: "See examples", href: "/examples" }}
      />
    </>
  );
}
