import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "PicAlive — Photo to Video AI";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Photo to video AI —",
    line2: "one tap, real motion",
    tags: ["No prompts", "Realistic motion", "iPhone & iPad"],
  });
}
