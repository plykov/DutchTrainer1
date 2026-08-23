import type { NextConfig } from "next";

// GitHub Pages serves project sites from https://<owner>.github.io/<repo>/,
// so the static export needs a matching basePath. Local dev and Vercel-style
// hosting stay at the root; only the Pages build (GITHUB_PAGES=true, set by
// .github/workflows/deploy-pages.yml) turns this on.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "DutchTrainer1";

const nextConfig: NextConfig = {
  output: "export",
  // Playwright opens the dev server on 127.0.0.1 while Next starts on
  // localhost by default. Allow that loopback origin for local browser tests
  // without changing production behaviour.
  allowedDevOrigins: ["127.0.0.1"],
  basePath: isGithubPages ? `/${repoName}` : undefined,
  images: { unoptimized: true },
  // Static export writes each route as <route>/index.html when this is on,
  // so both /exam and /exam/ resolve on GitHub Pages instead of only the
  // no-slash form.
  trailingSlash: true,
};

export default nextConfig;
