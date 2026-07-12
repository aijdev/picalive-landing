import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { ALL_FAQS, FAQS } from "../lib/content";
import { faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about PicAlive — how photo-to-video animation works, how long it takes, PicAlive PRO, privacy and safety, and getting started on iPhone and iPad.",
  path: "/faq",
  keywords: ["PicAlive FAQ", "photo to video app help", "PicAlive PRO questions"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL_FAQS)} />

      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        intro="Everything you might want to know about PicAlive — from how the animation works to timing, PicAlive PRO, privacy, and billing."
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          {FAQS.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">{group.category}</h2>
              <FaqList items={group.items} />
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Still have a question?"
        description="Reach the team directly and we'll help you get the most out of PicAlive."
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
