import type { MetadataRoute } from "next";

const BASE_URL = "https://workforce-dev.rawaihub.com";

// D0 launch date — used as lastModified for static pages
const LAUNCH_DATE = new Date("2026-04-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/use-cases`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // D0 use case pages
    {
      url: `${BASE_URL}/use-cases/saas-mvp`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/use-cases/product-launch-gtm`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/use-cases/investment-memo`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/use-cases/nda-triage`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/use-cases/literature-review`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/trust`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
