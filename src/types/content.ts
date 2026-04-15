/**
 * Frontmatter schema for all content types in the Workforce marketing site.
 * These types correspond to the YAML frontmatter in content MDX files.
 */

export type ContentPhase = "D0" | "W1" | "M1";

export type ContentType = "page" | "use-case";

export type ContentAudience =
  | "engineering"
  | "founders"
  | "investors"
  | "operations"
  | "legal"
  | "finance"
  | "marketing"
  | "research"
  | "healthcare"
  | "general";

export type UseCaseDomain =
  | "development"
  | "marketing"
  | "research"
  | "legal"
  | "finance"
  | "operations"
  | "healthcare"
  | "education"
  | "creative"
  | "strategy";

/** Frontmatter for static pages (home, how-it-works, pricing, trust) */
export interface PageFrontmatter {
  title: string;
  description: string;
  slug: string;
  type: "page";
  phase: ContentPhase;
}

/** Frontmatter for use case pages at /use-cases/[slug] */
export interface UseCaseFrontmatter {
  title: string;
  description: string;
  slug: string;
  type: "use-case";
  domain: UseCaseDomain;
  audience: ContentAudience[];
  phase: ContentPhase;
  hero_use_case: boolean;
  /** Short summary shown on the use cases listing page */
  tagline: string;
  /** Work mode(s) that power this use case */
  modes: string[];
  /** Key deliverables produced */
  deliverables: string[];
  /** Related use case slugs for the "Related Use Cases" section */
  related?: string[];
}

/** Parsed content entry for use in components */
export interface UseCaseEntry {
  slug: string;
  frontmatter: UseCaseFrontmatter;
}

export interface PageEntry {
  slug: string;
  frontmatter: PageFrontmatter;
}
