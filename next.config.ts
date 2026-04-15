import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // MDX is processed via next-mdx-remote at runtime — no static .mdx page transforms needed.
  // If @next/mdx page-level transforms are added later, configure them here.
  experimental: {
    // mdxRs: true, // enable when using @next/mdx for page-level MDX
  },
  // ESLint v8 + eslint-config-next v15 have an incompatible options API.
  // Linting runs separately via `npm run lint`. Upgrade to ESLint v9 flat config
  // to re-enable lint during builds.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
