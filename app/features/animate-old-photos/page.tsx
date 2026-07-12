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

const feature = getFeature("animate-old-photos")!;

export const metadata: Metadata = buildMetadata({
  title: "Animate Old Photos — Bring Family Portraits Back to Life",
  description:
    "Animate old photos with AI on your iPhone. PicAlive gives scanned family portraits and black-and-white pictures natural motion — see a smile or a wave you never got to film. Free to try, no editing skills needed.",
  path: feature.href,
  keywords: feature.keywords,
});

const relatedFaqs = [
  {
    q: "Can PicAlive animate very old or black-and-white photos?",
    a: "Yes. Scanned prints, screenshots of old photos, and faded black-and-white portraits all work. PicAlive can colorize and animate them, giving decades-old pictures natural, believable motion.",
  },
  {
    q: "How do I get an old printed photo into the app?",
    a: "Photograph or scan the print with your iPhone, then pick that image in PicAlive like any other photo. A straight-on, well-lit capture of the print gives the best result.",
  },
  {
    q: "Will the person in the photo really look like themselves?",
    a: "PicAlive is built for realistic motion — a gentle smile, a blink, a turn of the head — rather than exaggerated effects, so the person stays unmistakably themselves. Results can vary photo to photo, and you can regenerate from History for a fresh take.",
  },
  {
    q: "Should I restore a damaged photo before animating it?",
    a: "It helps. For torn, blurry, or heavily faded prints, repair and colorize the image first with a restoration tool like FxAI, then animate the cleaned-up version in PicAlive for the most lifelike result.",
  },
];

export default function AnimateOldPhotosPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive Old Photo Animator",
          description:
            "Bring old family photos and black-and-white portraits to life with AI animation on iPhone and iPad.",
          url: `${SITE_URL}${feature.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="Old Photos"
        title="Animate old photos — see a memory move again"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "Animate Old Photos", path: feature.href },
        ]}
        intro="Old family portraits, childhood snapshots, and photos of people no one ever filmed — PicAlive gives them natural motion, so a smile or a wave you never got to see finally happens."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              The most emotional thing your camera roll can do
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Some moments only exist as a single still frame — a grandparent&apos;s
              portrait, a wedding photo from before video was everywhere, a
              childhood picture of someone you miss. PicAlive turns that frozen
              frame into a few seconds of gentle, lifelike motion, and it takes
              exactly one tap.
            </p>
            <CheckList
              items={[
                "Works on scanned, photographed, or screenshotted prints",
                "Colorizes and animates faded black-and-white portraits",
                "Gentle, respectful motion — a smile, a blink, a wave",
                "Restores the feeling of the moment, not just the image",
              ]}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Screenshot shot={SHOTS.memories} priority width={340} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Best results"
          title="Three tips for animating old photos"
          description="Old prints have quirks that new photos don't. A minute of preparation makes the animation dramatically better."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Capture the print flat and bright",
              body: "Photograph or scan the print straight-on in even light, avoiding glare and shadows. The clearer the face, the more natural the motion.",
            },
            {
              title: "Repair damage first",
              body: "For torn, creased, or blurry prints, run the image through a photo restorer such as FxAI's Restore tool, then animate the clean version.",
            },
            {
              title: "One clear subject works best",
              body: "A portrait with a visible face gives the most moving result. For group photos, crop to the person whose moment you want to relive.",
            },
          ].map((tip) => (
            <div key={tip.title} className="card flex flex-col gap-3 p-7">
              <h3 className="text-lg font-semibold tracking-tight">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{tip.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative flex flex-col gap-4">
            <span className="eyebrow">The perfect companion</span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Restore first with FxAI, then bring it to life
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted">
              Damaged or faded print?{" "}
              <a
                href="https://fxai.app/features/restore"
                target="_blank"
                rel="noopener"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                FxAI&apos;s AI photo restoration
              </a>{" "}
              — built by the same AI Journey team — unblurs, repairs, and
              colorizes old photos in one tap. Restore the image there, then
              animate the result in PicAlive.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="Old photo animation questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug={feature.slug} />

      <CTA
        title="Bring a memory back to life"
        description="Download PicAlive free and watch an old family photo move for the first time."
        secondary={{ label: "See more examples", href: "/examples" }}
      />
    </>
  );
}
