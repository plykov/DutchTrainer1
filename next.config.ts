import type { NextConfig } from "next";

// GitHub Pages serves project sites from https://<owner>.github.io/<repo>/,
// so the static export needs a matching basePath. Local dev and Vercel-style
// hosting stay at the root; only the Pages build (GITHUB_PAGES=true, set by
// .github/workflows/deploy-pages.yml) turns this on.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "DutchTrainer1";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
