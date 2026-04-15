/**
 * Content loading utilities for the Workforce marketing site.
 *
 * Reads MDX files from /content/ at build time, parses frontmatter with gray-matter,
 * and returns typed content objects for use in Next.js App Router pages.
 *
 * Usage in a Server Component:
 *   import { getUseCaseBySlug, getAllUseCases } from "@/lib/content"
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  PageFrontmatter,
  UseCaseFrontmatter,
  UseCaseEntry,
} from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "content");

// ─── Internal helpers ────────────────────────────────────────────────────────

function readMdxFile(filePath: string): { frontmatter: Record<string, unknown>; content: string } | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

// ─── Page content ─────────────────────────────────────────────────────────────

/**
 * Load a static page MDX file by slug.
 * Reads from /content/pages/{slug}.mdx
 */
export function getPageContent(slug: string): {
  frontmatter: PageFrontmatter;
  content: string;
} | null {
  const filePath = path.join(CONTENT_ROOT, "pages", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  return {
    frontmatter: result.frontmatter as unknown as PageFrontmatter,
    content: result.content,
  };
}

// ─── Use case content ─────────────────────────────────────────────────────────

/**
 * Load a single use case MDX file by slug.
 * Reads from /content/use-cases/{slug}.mdx
 */
export function getUseCaseBySlug(slug: string): {
  frontmatter: UseCaseFrontmatter;
  content: string;
} | null {
  const filePath = path.join(CONTENT_ROOT, "use-cases", `${slug}.mdx`);
  const result = readMdxFile(filePath);
  if (!result) return null;
  // Merge safe defaults so array fields never crash the render.
  // Content authors should provide all fields per UseCaseFrontmatter;
  // this prevents build failures while MDX files are still being authored.
  const raw = result.frontmatter as Record<string, unknown>;
  // Merge safe defaults so array fields never crash the render.
  // Content authors should provide all fields per UseCaseFrontmatter;
  // this prevents build failures while MDX files are still being authored.
  const merged = {
    title: "",
    description: "",
    slug: slug,
    type: "use-case" as const,
    domain: "development" as const,
    audience: [] as UseCaseFrontmatter["audience"],
    phase: "D0" as const,
    hero_use_case: false,
    tagline: "",
    modes: [] as string[],
    deliverables: [] as string[],
    ...result.frontmatter,
  };
  // Coerce array fields — gray-matter parses YAML arrays correctly but defensively ensure.
  const frontmatter: UseCaseFrontmatter = {
    ...merged,
    modes: Array.isArray(raw.modes) ? (raw.modes as string[]) : merged.modes,
    deliverables: Array.isArray(raw.deliverables) ? (raw.deliverables as string[]) : merged.deliverables,
    audience: Array.isArray(raw.audience) ? (raw.audience as UseCaseFrontmatter["audience"]) : merged.audience,
    related: Array.isArray(raw.related) ? (raw.related as string[]) : undefined,
  };
  return { frontmatter, content: result.content };
}

/**
 * Get all use case slugs (for generateStaticParams).
 */
export function getAllUseCaseSlugs(): string[] {
  const dir = path.join(CONTENT_ROOT, "use-cases");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") && file !== "index.mdx")
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get all use case entries with frontmatter (for listing pages).
 * Sorted: hero use cases first, then alphabetically by title.
 * Filters out incomplete placeholder files (empty title or missing tagline).
 */
export function getAllUseCases(): UseCaseEntry[] {
  return getAllUseCaseSlugs()
    .map((slug) => {
      const result = getUseCaseBySlug(slug);
      if (!result) return null;
      return { slug, frontmatter: result.frontmatter };
    })
    .filter((entry): entry is UseCaseEntry => {
      // Skip placeholder/incomplete entries
      if (!entry) return false;
      if (!entry.frontmatter.title || entry.frontmatter.title.trim() === "") return false;
      return true;
    })
    .sort((a, b) => {
      // Hero use cases first
      if (a.frontmatter.hero_use_case && !b.frontmatter.hero_use_case) return -1;
      if (!a.frontmatter.hero_use_case && b.frontmatter.hero_use_case) return 1;
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });
}

/**
 * Get use cases filtered by domain.
 */
export function getUseCasesByDomain(domain: string): UseCaseEntry[] {
  return getAllUseCases().filter(
    (entry) => entry.frontmatter.domain === domain
  );
}

/**
 * Get related use cases by slugs (for the use case detail page).
 */
export function getRelatedUseCases(slugs: string[]): UseCaseEntry[] {
  return slugs
    .map((slug) => {
      const result = getUseCaseBySlug(slug);
      if (!result) return null;
      return { slug, frontmatter: result.frontmatter };
    })
    .filter((entry): entry is UseCaseEntry => entry !== null);
}
