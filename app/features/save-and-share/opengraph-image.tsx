import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "PicAlive — Save & Share Animated Photos";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "A real video to keep,",
    line2: "post, and send",
    tags: ["Save to Photos", "Share anywhere", "iPhone & iPad"],
  });
}
