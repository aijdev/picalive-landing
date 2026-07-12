import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { getFeature, SHOTS } from "../../lib/content";
import { softwareAppSchema, faqSchema } from "../../lib/schema";

import { PageHeader } from "../../components/PageHeader";
import { Section, SectionHeading } from "../../components/Section";
import { Screenshot } from "../../components/Screenshot";
import { CheckList } from "../../components/CheckList";
import { AppStoreButton } from "../../components/AppStoreButton";
import { FaqList } from "../../components/Faq";
import { RelatedFeatures } from "../../components/RelatedFeatures";
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const feature = getFeature("photo-to-video")!;

export const metadata: Metadata = buildMetadata({
  title: "Photo to Video AI — Turn Any Picture into a Moving Video",
  description:
    "PicAlive's photo-to-video AI turns a single still image into a realistic moving video in minutes. No prompts, no editing, no account — pick a photo, tap once, and watch it come alive on iPhone and iPad.",
  path: feature.href,
  keywords: feature.keywords,
});

const STEPS = [
  {
    n: "1",
    title: "Pick any photo",
    body: "Choose a portrait, selfie, pet, or landscape from your library. A clear subject and good lighting give the most natural motion.",
  },
  {
    n: "2",
    title: "Tap Make Alive",
    body: "That's the whole interface. No prompt writing, no style pickers — PicAlive works out the right, believable motion automatically.",
  },
  {
    n: "3",
    title: "Watch the progress",
    body: "The app shows live status while the AI generates your clip in the cloud — usually just a few minutes.",
  },
  {
    n: "4",
    title: "Save & share",
    body: "The finished video loops instantly. Save it to Photos or share it to Messages, Instagram, TikTok, and more.",
  },
];

const relatedFaqs = [
  {
    q: "How does photo-to-video AI work?",
    a: "PicAlive sends your chosen photo to its cloud AI, which analyzes the scene and generates natural, believable motion — faces smile, hair sways, water ripples. A few minutes later you get a finished, looping video, no editing required.",
  },
  {
    q: "Do I need to write a prompt?",
    a: "No. Unlike most AI video tools, PicAlive needs no prompts, styles, or settings. You pick the photo and tap once — the AI decides on realistic motion automatically.",
  },
  {
    q: "What kinds of photos can I turn into video?",
    a: "Almost anything: portraits, selfies, pets, landscapes, group shots, and old family photos. Higher-resolution images with a clear subject give the AI the most detail to work with.",
  },
  {
    q: "Is PicAlive free to use?",
    a: "Yes — PicAlive is free to download and your first animation is free during onboarding, with no account or credit card required. PicAlive PRO optionally unlocks unlimited, watermark-free videos with priority processing.",
  },
];

export default function PhotoToVideoPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive Photo to Video AI",
          description:
            "Turn any still photo into a realistic, AI-generated moving video on iPhone and iPad.",
          url: `${SITE_URL}${feature.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="Photo to Video"
        title="Photo to video AI — one tap, real motion"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "Photo to Video AI", path: feature.href },
        ]}
        intro="Turn any still picture into a realistic moving video. PicAlive analyzes your photo and generates natural motion — no prompts to write, no timeline to edit, no account to create."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              From frozen moment to living video
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Most AI video generators ask you to describe a scene in words.
              PicAlive starts from the photo you already love and simply makes
              it move — the same faces, the same place, the same moment, now
              alive. It&apos;s the shortest possible path from a picture to a
              video worth sharing.
            </p>
            <CheckList
              items={[
                "Realistic, believable motion — not a cartoon filter",
                "Works on portraits, pets, landscapes, and scenes",
                "A finished, standard video file every time",
                "Every clip kept in History to replay or regenerate",
              ]}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Screenshot shot={SHOTS.breathe} priority width={340} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="How it works"
          title="Photo in, video out — in four taps"
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="card flex flex-col gap-3 p-6">
              <span className="text-4xl font-bold text-gradient">{step.n}</span>
              <h3 className="text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative flex flex-col gap-4">
            <span className="eyebrow">Want prompt-driven video instead?</span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Describe a brand-new scene with Videx
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted">
              PicAlive animates the photos you already have. If you&apos;d
              rather type an idea and generate a stylized clip from scratch —
              Cinematic, Anime, Cyberpunk — try{" "}
              <a
                href="https://videx.app/features/photo-to-video"
                target="_blank"
                rel="noopener"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                Videx, the AI video generator
              </a>{" "}
              from the same AI Journey team.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="Photo to video questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug={feature.slug} />

      <CTA
        title="Turn your first photo into a video"
        description="Download PicAlive free and watch a still picture come alive in minutes."
        secondary={{ label: "Get animation ideas", href: "/animation-ideas" }}
      />
    </>
  );
}
