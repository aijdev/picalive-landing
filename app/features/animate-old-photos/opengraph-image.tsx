import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "PicAlive — Animate Old Photos";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Animate old photos —",
    line2: "see a memory move",
    tags: ["Old portraits", "Black & white", "iPhone & iPad"],
  });
}
