import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { COMPANION_APPS } from "../lib/content";
import { RATING, USERS } from "../lib/site";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CompanionApps } from "../components/CompanionApps";
import { CTA } from "../components/CTA";

export const metadata: Metadata = buildMetadata({
  title: "About PicAlive — The Effortless Way to Animate Photos",
  description:
    "PicAlive exists to let anyone bring their photos to life in seconds, with zero skill required. Learn about our mission, who PicAlive is for, and the AI Journey family behind it.",
  path: "/about",
  keywords: ["about PicAlive", "AI Journey apps", "photo animation app maker"],
});

const AUDIENCE = [
  {
    who: "Nostalgia seekers",
    want: "To see old and family photos move again",
    how: "Realistic animation that makes frozen memories feel alive",
  },
  {
    who: "Social media users & creators",
    want: "Eye-catching, novel video content to post",
    how: "Instant, shareable clips with zero editing skill",
  },
  {
    who: "Casual “wow-factor” explorers",
    want: "To try fun, magical AI effects",
    how: "An effortless, one-tap AI experience",
  },
  {
    who: "Non-technical users of all ages",
    want: "Results without learning editing tools",
    how: "No prompts, timelines, or settings — just one tap",
  },
];

const STRENGTHS = [
  {
    title: "Radical simplicity",
    body: "The whole product is one verb — Make Alive. No prompt writing, no configuration, nothing between you and a delightful result.",
  },
  {
    title: "An instant “wow”",
    body: "Onboarding lets you animate your own photo for free before anything else — a confidence-building demonstration of the magic.",
  },
  {
    title: "An emotional core",
    body: "Bringing photos to life taps directly into nostalgia and wonder, setting PicAlive apart from generic AI-effect apps.",
  },
  {
    title: "Polished, focused UX",
    body: "A clean, cinematic dark interface, live queue feedback, and graceful failure states keep the experience calm and reassuring.",
  },
  {
    title: "A frictionless start",
    body: "No account, login, or personal data required — an anonymous device identity gets you creating immediately.",
  },
  {
    title: "A complete loop",
    body: "Generate, view, save, share, and revisit in history — the whole creation journey lives inside one simple app.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Let anyone bring their photos to life"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        intro="Still photos are frozen moments, and people wish they could see them come alive. PicAlive exists to make that possible for anyone — in seconds, with zero skill required."
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-muted">
          <p>
            <span className="font-semibold text-foreground">Our mission is simple:</span>{" "}
            let anyone bring their photos to life in seconds, with zero skill
            required. Old family portraits, favorite selfies, landscapes, and pet
            photos all become dynamic, shareable video — without any editing skill,
            timeline software, or technical knowledge.
          </p>
          <p>
            We took a sophisticated AI capability and distilled it into the
            simplest possible consumer experience: upload a photo, get a video.
            There are no prompts to write, no styles to choose, and no settings to
            adjust. PicAlive handles enhancing the animation, running the model,
            and delivering a realistic, looping clip you can save and share.
          </p>
          <p className="card p-6 text-xl font-medium text-foreground">
            “The simplest way to turn any photo into a realistic living video — one
            tap, no skill, ready to share.”
          </p>
          <p>
            That promise resonates: PicAlive holds a {RATING}-star rating and has
            welcomed {USERS} happy users who relive memories, delight friends, and
            create share-ready moments every day.
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Who it's for" title="Built for everyone" />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl border border-border">
            <thead>
              <tr className="bg-card text-left">
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  Audience
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  What they want
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  How PicAlive helps
                </th>
              </tr>
            </thead>
            <tbody>
              {AUDIENCE.map((row) => (
                <tr key={row.who}>
                  <th
                    scope="row"
                    className="border-t border-border bg-card px-5 py-4 text-left text-sm font-medium"
                  >
                    {row.who}
                  </th>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.want}
                  </td>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.how}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why it works" title="What makes PicAlive different" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STRENGTHS.map((s) => (
            <div key={s.title} className="flex flex-col gap-2 card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="AI Journey"
          title="Part of a family of AI creativity apps"
          description={`PicAlive is one of ${COMPANION_APPS.length + 1} apps in the AI Journey suite. Each explores a different corner of AI creativity — video, images, enhancement, and face swap.`}
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>

      <CTA />
    </>
  );
}
