import { renderOgCard, OG_SIZE } from "../lib/ogCard";

export const alt = "PicAlive — Photo Animation Ideas";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Photo animation ideas",
    line2: "to try first",
    tags: ["Family memories", "Pets", "Travel", "iPhone & iPad"],
  });
}
