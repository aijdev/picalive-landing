import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "./lib/seo";
import { RATING, SITE_NAME, USERS } from "./lib/site";
import { FAQS, PILLARS, SHOTS, USE_CASES } from "./lib/content";
import { softwareAppSchema, faqSchema } from "./lib/schema";

import { Container } from "./components/Container";
import { Section, SectionHeading } from "./components/Section";
import { Button } from "./components/Button";
import { AppStoreButton } from "./components/AppStoreButton";
import { Screenshot } from "./components/Screenshot";
import { StatStrip } from "./components/StatStrip";
import { FeatureGrid } from "./components/FeatureGrid";
import { AlternatingFeature } from "./components/AlternatingFeature";
import { HowItWorks } from "./components/HowItWorks";
import { UseCaseCard } from "./components/UseCaseCard";
import { Testimonials } from "./components/Testimonials";
import { CompanionApps } from "./components/CompanionApps";
import { FaqList } from "./components/Faq";
import { CTA } from "./components/CTA";
import { JsonLd } from "./components/JsonLd";
import { CheckList } from "./components/CheckList";
import { StarIcon, PlayIcon } from "./components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "PicAlive — Bring Your Photos to Life with AI Video for iPhone",
  description:
    "Turn any still photo into a realistic, AI-generated moving video. Pick a photo, tap once, and watch the moment come alive. Download PicAlive free for iPhone and iPad.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "photo to video AI",
    "animate photo app",
    "bring photos to life",
    "make photos move",
    "living photos app iPhone",
  ],
});

const homeFaqs = FAQS[0].items;

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareAppSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="brand-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
            <div className="flex flex-col items-start gap-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-strong shadow-soft">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5 text-star" />
                  ))}
                </span>
                <span className="font-semibold text-foreground">{RATING}</span>
                <span className="text-border-strong">·</span>
                {USERS} happy users
              </span>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Bring your photos <br className="hidden sm:block" />
                to <span className="text-gradient">life</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                PicAlive turns a single still photo into a realistic, AI-generated
                moving video. Pick a photo, tap once, and watch faces smile, hair
                sway, and the moment come alive — no editing, prompts, or accounts.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AppStoreButton />
                <Button href="/how-it-works" variant="secondary" size="lg">
                  <PlayIcon className="h-4 w-4" />
                  See how it works
                </Button>
              </div>

              <p className="text-sm text-muted">
                Free to download · No account or login required · iPhone &amp; iPad
              </p>
            </div>

            <div className="relative flex justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-x-[15%] top-[8%] bottom-[8%] rounded-full bg-brand-gradient opacity-20 blur-3xl"
              />
              <Screenshot
                shot={SHOTS.memories}
                priority
                width={360}
                sizes="(max-width: 1024px) 70vw, 360px"
                className="relative w-[260px] animate-float sm:w-[320px] lg:w-[360px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Social proof stats */}
      <Container>
        <StatStrip />
      </Container>

      {/* Pillars */}
      <Section id="why">
        <SectionHeading
          eyebrow="Why PicAlive"
          title="Effortless, realistic, and ready to share"
          description="A sophisticated AI capability, distilled into the simplest possible experience. Everything about PicAlive is built around one delightful moment: a still photo coming alive."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.name} className="card flex flex-col gap-3 p-7">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand">
                {pillar.name}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="How it works"
          title="From still photo to living video in four steps"
          description="The whole product is one loop — and it stays that simple every single time."
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/how-it-works" variant="secondary">
            See the full walkthrough
          </Button>
        </div>
      </Section>

      {/* Alternating feature highlights */}
      <Section>
        <div className="flex flex-col gap-20 lg:gap-28">
          <AlternatingFeature
            eyebrow="Old photos"
            title="Bring frozen memories back to life"
            description="Old family portraits, childhood snapshots, and photos of people no one ever filmed — PicAlive gives them natural motion, so a smile or a wave you never got to see finally happens."
            bullets={[
              "Works beautifully on scanned or screenshotted old photos",
              "Colorizes and animates faded black-and-white portraits",
              "Restores the feeling of a moment, not just the image",
              "A quietly emotional way to relive a memory",
            ]}
            shot={SHOTS.oneTap}
            cta={{ label: "Explore what to animate", href: "/examples" }}
          />
          <AlternatingFeature
            reversed
            eyebrow="One tap"
            title="Animate anything — in a single tap"
            description="There are no prompts to write, no styles to choose, and no timeline to edit. You provide the photo; PicAlive works out the right, believable motion automatically and returns a finished video."
            bullets={[
              "No prompt writing or settings to learn",
              "The animation is generated for you on the server",
              "Portraits, pets, landscapes, and scenes all work",
              "A finished, standard video every time",
            ]}
            shot={SHOTS.breathe}
            cta={{ label: "How the magic works", href: "/how-it-works" }}
          />
          <AlternatingFeature
            eyebrow="Save & share"
            title="A real video you can keep and post"
            description="The result plays on a loop the instant it's ready. Save it to your camera roll or share it straight from the iOS share sheet — a clip that's genuinely fun to send to friends and family."
            bullets={[
              "Auto-playing, looping result you can replay",
              "One-tap save to your Photos library",
              "Share to Messages, Instagram, TikTok, and more",
              "Every clip is kept in your history to revisit",
            ]}
            shot={SHOTS.portrait}
            cta={{ label: "Explore save & share", href: "/features/save-and-share" }}
          />
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need in one simple app"
          description="PicAlive keeps the whole experience to a single, focused loop — and makes every part of it feel effortless."
        />
        <div className="mt-12">
          <FeatureGrid />
        </div>
      </Section>

      {/* Examples */}
      <Section>
        <SectionHeading
          eyebrow="Examples"
          title="What people bring to life"
          description="From decades-old portraits to pets, landscapes, and social content — if it's a photo, PicAlive can make it move."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.slice(0, 3).map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/examples" variant="secondary">
            See all examples
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Loved by users"
          title={`Join ${USERS} people already creating`}
          description={`PicAlive holds a ${RATING}-star rating in the App Store. Here's what a few of them say.`}
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* Free-to-start teaser */}
      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">Free to start</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Try it free. Go PRO when you&apos;re hooked.
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                Animate your first photo for free — no account, no credit card.
                Upgrade to PicAlive PRO for unlimited, watermark-free videos with
                priority processing whenever you want more.
              </p>
              <div className="flex flex-wrap gap-3">
                <AppStoreButton size="md" />
                <Button href="/features" variant="secondary">
                  Explore all features
                </Button>
              </div>
            </div>
            <CheckList
              className="lg:justify-self-end"
              items={[
                "First animation free during onboarding",
                "PRO: unlimited generations, no limits",
                "PRO: no watermark, no ads",
                "PRO: priority, faster processing",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="The AI Journey family"
          title="More AI creativity beyond PicAlive"
          description="PicAlive is part of a broader suite of AI creativity apps. Explore the companions built by the same team."
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description={
            <>
              Everything you need to know to get started.{" "}
              <Link href="/faq" className="font-medium text-brand">
                See the full FAQ
              </Link>
              .
            </>
          }
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={homeFaqs} />
        </div>
      </Section>

      <CTA
        title="Bring your first photo to life today"
        description={`Download ${SITE_NAME} free and turn a still photo into a living, shareable video in seconds.`}
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}
