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

const feature = getFeature("save-and-share")!;

export const metadata: Metadata = buildMetadata({
  title: "Save & Share — Keep and Post Every Animated Photo",
  description:
    "Every PicAlive animation is a real video: save it to your Photos library, share it to Messages, Instagram, or TikTok, and replay or regenerate any clip from History. PicAlive PRO exports are watermark-free.",
  path: feature.href,
  keywords: feature.keywords,
});

const relatedFaqs = [
  {
    q: "What format is the finished animation?",
    a: "A standard video file that plays anywhere. It loops automatically on the Result screen, saves straight to your Photos library, and shares through the normal iOS share sheet.",
  },
  {
    q: "Where do my past animations live?",
    a: "Every generation is kept in your History inside the app. From there you can replay a clip, save it again, share it, regenerate a fresh take from the same photo, or delete it.",
  },
  {
    q: "Do saved videos have a watermark?",
    a: "Videos saved or shared on the free tier carry a small, semi-transparent PicAlive watermark. PicAlive PRO removes the watermark from every video you export.",
  },
  {
    q: "Can I post PicAlive videos to social media?",
    a: "Yes — the finished clip is a normal video, so it posts to Instagram, TikTok, Facebook, and anywhere else exactly like footage from your camera.",
  },
];

export default function SaveAndSharePage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "PicAlive Save & Share",
          description:
            "Save AI-animated photos as real videos and share them anywhere from iPhone and iPad.",
          url: `${SITE_URL}${feature.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="Save & Share"
        title="A real video you can keep, post, and send"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "Save & Share", path: feature.href },
        ]}
        intro="The magic moment isn't just seeing your photo move — it's sending it to the person who'll gasp. Every PicAlive result is a standard video, ready for your camera roll, the group chat, or your feed."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              Made to be shared
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              The result plays on a loop the instant it&apos;s ready. Save it to
              your camera roll with one tap, or share it straight from the iOS
              share sheet — a clip that&apos;s genuinely fun to send to friends
              and family, and that stops thumbs on any feed.
            </p>
            <CheckList
              items={[
                "Auto-playing, looping result you can replay",
                "One-tap save to your Photos library",
                "Share to Messages, Instagram, TikTok, and more",
                "History keeps every clip to revisit or regenerate",
              ]}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Screenshot shot={SHOTS.portrait} priority width={340} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="History"
          title="Your animations, always one tap away"
          description="PicAlive keeps a library of everything you've made — no files to manage, nothing to lose."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Replay",
              body: "Open any past result and watch it loop again — the finished clip stays ready whenever you want to see it.",
            },
            {
              title: "Regenerate",
              body: "Reuse a previous photo to run a fresh animation. Every run produces new motion, so favorites are worth a second take.",
            },
            {
              title: "Manage",
              body: "Save a clip you skipped earlier, share it somewhere new, or delete the experiments you don't need.",
            },
          ].map((item) => (
            <div key={item.title} className="card flex flex-col gap-3 p-7">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Saving & sharing questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug={feature.slug} />

      <CTA
        title="Make a clip worth sending"
        description="Download PicAlive free, animate a photo, and share the moment with someone who'll love it."
        secondary={{ label: "Get animation ideas", href: "/animation-ideas" }}
      />
    </>
  );
}
