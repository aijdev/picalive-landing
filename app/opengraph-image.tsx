import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "./lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated once at build time for the static export (`output: "export"`).
export const dynamic = "force-static";

// Dynamic, branded social-share card shared by OpenGraph and Twitter across
// the whole site (Next merges this file into every route's metadata).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060607",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ff2e3f 0%, rgba(255,46,63,0) 70%)",
            opacity: 0.5,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -140,
            width: 660,
            height: 660,
            borderRadius: "50%",
            background: "radial-gradient(circle, #ff5e3a 0%, rgba(255,94,58,0) 70%)",
            opacity: 0.4,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0f0f13",
              border: "1px solid #26262e",
            }}
          >
            {/* Play triangle — the PicAlive "bring to life" mark. */}
            <div
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "16px 0 16px 26px",
                borderColor: "transparent transparent transparent #ff2e3f",
                marginLeft: 6,
                display: "flex",
              }}
            />
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, color: "white" }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Bring your photos
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
              backgroundImage: "linear-gradient(100deg, #ff7a4d, #ff2e3f 55%, #ff1e56)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            to life
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            color: "#b9b9c8",
          }}
        >
          <span style={{ display: "flex" }}>Photo to video AI</span>
          <span style={{ display: "flex", color: "#4a4a58" }}>•</span>
          <span style={{ display: "flex" }}>One tap</span>
          <span style={{ display: "flex", color: "#4a4a58" }}>•</span>
          <span style={{ display: "flex" }}>Realistic motion</span>
          <span style={{ display: "flex", color: "#4a4a58" }}>•</span>
          <span style={{ display: "flex", color: "white" }}>iPhone &amp; iPad</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
