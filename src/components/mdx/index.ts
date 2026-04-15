/**
 * MDX component registry for the Workforce marketing site.
 *
 * Import from this file to get all MDX-compatible components:
 *   import { mdxComponents } from "@/components/mdx"
 *
 * Pass to next-mdx-remote:
 *   <MDXRemote source={content} components={mdxComponents} />
 */

export { Hero } from "./Hero";
export { Section } from "./Section";
export { CallToAction } from "./CallToAction";
export { FeatureCard, FeatureGrid } from "./FeatureCard";
export { UseCaseCard, UseCaseGrid } from "./UseCaseCard";
export { StepList } from "./StepList";
export { PillarCard } from "./PillarCard";
export { TrustBadge } from "./TrustBadge";
export { PricingTable } from "./PricingTable";

import { Hero } from "./Hero";
import { Section } from "./Section";
import { CallToAction } from "./CallToAction";
import { FeatureCard, FeatureGrid } from "./FeatureCard";
import { UseCaseCard, UseCaseGrid } from "./UseCaseCard";
import { StepList } from "./StepList";
import { PillarCard } from "./PillarCard";
import { TrustBadge } from "./TrustBadge";
import { PricingTable } from "./PricingTable";

/**
 * Component map for next-mdx-remote.
 * All custom MDX components must be registered here.
 */
export const mdxComponents = {
  // Workforce custom components
  Hero,
  Section,
  CallToAction,
  FeatureCard,
  FeatureGrid,
  UseCaseCard,
  UseCaseGrid,
  StepList,
  PillarCard,
  TrustBadge,
  PricingTable,
} as const;

export type MDXComponents = typeof mdxComponents;
