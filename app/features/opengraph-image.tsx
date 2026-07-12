import { renderOgCard, OG_SIZE } from "../lib/ogCard";

export const alt = "PicAlive Features — Photo to Video AI, Old Photo Animation & More";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Everything PicAlive",
    line2: "can do",
    tags: ["Photo to video", "Old photos", "Save & share", "iPhone & iPad"],
  });
}
