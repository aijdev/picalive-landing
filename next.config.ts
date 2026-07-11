import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (`out/`) for GitHub Pages — no Node server at runtime.
  output: "export",

  // Served at the root of a custom domain (picalive.app), so no base path.
  // BASE_PATH stays configurable for a repo-subpath deploy (user.github.io/repo).
  basePath: process.env.BASE_PATH || undefined,

  // The production image optimizer requires the `sharp` native module, which is
  // intentionally not installed here. `unoptimized` is also required by static
  // export. We ship pre-sized assets (the App Store screenshots in /public).
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
