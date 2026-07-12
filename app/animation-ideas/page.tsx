import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SITE_URL } from "../lib/site";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Photo Animation Ideas — What to Bring to Life First",
  description:
    "Looking for photo animation ideas? Browse the pictures people love bringing to life with AI — old family portraits, wedding photos, pets, travel shots, and more — plus tips for picking photos that animate beautifully.",
  path: "/animation-ideas",
  keywords: [
    "photo animation ideas",
    "photos to animate",
    "animate a picture ideas",
    "living photo ideas",
    "AI photo animation inspiration",
  ],
});

const IDEA_CATEGORIES: {
  name: string;
  emoji: string;
  blurb: string;
  ideas: string[];
}[] = [
  {
    name: "Family memories",
    emoji: "👨‍👩‍👧",
    blurb: "The photos that mean the most are the ones that move people most.",
    ideas: [
      "A grandparent's portrait — see them smile again",
      "A scanned black-and-white wedding photo",
      "A childhood picture of a parent, back in motion",
      "The last photo you have of someone you miss",
      "A baby photo of someone who's all grown up now",
    ],
  },
  {
    name: "Milestones & celebrations",
    emoji: "🎉",
    blurb: "Big days deserve more than a frozen frame.",
    ideas: [
      "The graduation cap-toss photo",
      "Blowing out birthday candles",
      "The first-day-of-school photo on the doorstep",
      "A wedding portrait of the newlyweds",
      "The team photo after a championship win",
    ],
  },
  {
    name: "Pets",
    emoji: "🐾",
    blurb: "Ears perk, tails wag — pet photos animate wonderfully.",
    ideas: [
      "Your dog mid-head-tilt",
      "A cat loafing in a sunbeam",
      "A puppy photo from before they grew up",
      "A beloved pet you've said goodbye to",
    ],
  },
  {
    name: "Travel & landscapes",
    emoji: "🌊",
    blurb: "Water, clouds, and foliage gain mesmerizing natural motion.",
    ideas: [
      "A beach shot — watch the waves start rolling",
      "A waterfall or river from a favorite hike",
      "City lights and traffic from a rooftop",
      "A field or forest with wind-blown trees",
    ],
  },
  {
    name: "Selfies & portraits",
    emoji: "🤳",
    blurb: "Turn a good photo of yourself into a scroll-stopping clip.",
    ideas: [
      "Your best portrait, subtly alive for a profile",
      "A couple's photo where you both come to life",
      "A stylish shot for an Instagram or TikTok post",
      "A group selfie where everyone starts moving",
    ],
  },
  {
    name: "Surprises to send",
    emoji: "💌",
    blurb: "The best PicAlive moment is someone else's reaction.",
    ideas: [
      "Animate an old photo of a friend and drop it in the group chat",
      "A moving photo of grandkids, sent to grandparents",
      "An anniversary throwback that suddenly waves",
      "A holiday card photo that comes alive",
    ],
  },
];

const TIPS = [
  "Pick photos with a clear, well-lit subject — faces animate best",
  "Higher resolution gives the AI more detail to work with",
  "Scan or photograph old prints flat and glare-free",
  "Crop group shots to the person whose moment matters",
  "Regenerate from History for a different take on the same photo",
];

const faqs = [
  {
    q: "What photos animate best?",
    a: "Clear, well-lit photos with a visible subject — especially faces. Portraits, selfies, and pets give the most delightful results, while landscapes with water, clouds, or foliage gain beautiful ambient motion.",
  },
  {
    q: "Can I animate photos of people who have passed away?",
    a: "Many people use PicAlive exactly this way, and the gentle, realistic motion — a smile, a blink — is designed to feel respectful. It can be a deeply moving way to revisit a memory; go at your own pace.",
  },
  {
    q: "Do I need any editing skills for these ideas?",
    a: "No. Every idea on this page is the same flow: pick the photo, tap Make Alive, and PicAlive generates the motion automatically in a few minutes.",
  },
  {
    q: "Can I try an idea more than once?",
    a: "Yes. Each generation produces fresh motion, and the Regenerate action in History reuses a photo for a new take — favorites are worth running twice.",
  },
];

export default function AnimationIdeasPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive Photo Animator",
          description:
            "Turn still photos into realistic AI-animated videos on iPhone and iPad.",
          url: `${SITE_URL}/animation-ideas`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHeader
        eyebrow="Animation Ideas"
        title="Photo animation ideas to try first"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Animation Ideas", path: "/animation-ideas" },
        ]}
        intro="Everyone's camera roll is full of photos waiting to move. Here's what people love bringing to life with PicAlive — from decades-old portraits to pets and travel shots — plus quick tips for picking pictures that animate beautifully."
        actions={<AppStoreButton size="md" />}
      />

      {/* Ideas by category */}
      <Section>
        <SectionHeading
          eyebrow="Inspiration"
          title="What to bring to life"
          description="Grouped by the feeling you're going for. Find the photo, tap once, and watch it move."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {IDEA_CATEGORIES.map((category) => (
            <div key={category.name} className="card flex flex-col gap-4 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {category.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{category.blurb}</p>
              <ul className="flex flex-col gap-2.5">
                {category.ideas.map((idea) => (
                  <li
                    key={idea}
                    className="rounded-xl bg-surface px-4 py-3 text-sm leading-snug text-muted-strong ring-1 ring-border"
                  >
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Tips */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Best results"
              title="How to pick a photo that animates beautifully"
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">
              PicAlive handles all the animation decisions for you — the only
              creative choice you make is the photo. A few habits make that
              choice pay off every time.
            </p>
            <Button
              href="/features/photo-to-video"
              variant="secondary"
              className="mt-6 w-fit"
            >
              How photo-to-video works
            </Button>
          </div>
          <CheckList items={TIPS} className="lg:mt-4" />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Animation idea questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Section>

      <CTA
        title="Found the photo? Bring it to life."
        description="Download PicAlive free and turn the idea into a living, shareable video in minutes."
        secondary={{ label: "See real examples", href: "/examples" }}
      />
    </>
  );
}
