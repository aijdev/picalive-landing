import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { PROBLEMS_SOLVED, SHOT_ORDER, USE_CASES } from "../lib/content";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { UseCaseCard } from "../components/UseCaseCard";
import { Screenshot } from "../components/Screenshot";
import { AppStoreButton } from "../components/AppStoreButton";
import { CTA } from "../components/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Examples — What You Can Bring to Life",
  description:
    "Real ways people use PicAlive: animating old family photos, portraits and selfies, pets, landscapes, and social content. See what a still photo becomes when you make it move.",
  path: "/examples",
  keywords: [
    "animate old photos",
    "make pet photos move",
    "animate portraits AI",
    "living photo examples",
    "photo animation ideas",
  ],
});

export default function ExamplesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Examples"
        title="What you can bring to life"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Examples", path: "/examples" },
        ]}
        intro="If it's a photo, PicAlive can make it move. Here are the moments people love to bring to life — and the exact feeling each one gives back."
        actions={<AppStoreButton size="md" />}
      />

      {/* Screenshot gallery */}
      <Section>
        <SectionHeading
          eyebrow="See it in action"
          title="One photo in, a living video out"
          description="Every example below starts as an ordinary still. A single tap turns it into a realistic, looping clip."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {SHOT_ORDER.map((shot) => (
            <figure key={shot.src} className="flex flex-col gap-3">
              <Screenshot shot={shot} width={260} className="w-full" />
              <figcaption className="text-center text-sm text-muted">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Use case cards */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Ways to use it"
          title="Moments worth un-freezing"
          description="Whatever you point it at, the promise is the same — a frozen moment becomes a living one."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>
      </Section>

      {/* Emotional prompts */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="The feeling"
            title="PicAlive is for you if you've ever thought…"
            align="center"
          />
          <ul className="mt-10 flex flex-col gap-3">
            {PROBLEMS_SOLVED.map((problem) => (
              <li
                key={problem}
                className="rounded-2xl border border-border bg-card px-6 py-4 text-lg text-muted-strong shadow-soft"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA
        title="Bring your favorite photo to life"
        description="Whatever moment you choose, PicAlive turns it into a living, shareable video in seconds. Download free."
        secondary={{ label: "How it works", href: "/how-it-works" }}
      />
    </>
  );
}
