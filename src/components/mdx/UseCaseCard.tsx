import { clsx } from "clsx";
import type { UseCaseEntry } from "@/types/content";

const DOMAIN_LABELS: Record<string, string> = {
  development: "Development",
  marketing: "Marketing",
  research: "Research",
  legal: "Legal",
  finance: "Finance",
  operations: "Operations",
  healthcare: "Healthcare",
  education: "Education",
  creative: "Creative",
  strategy: "Strategy",
};

interface UseCaseCardProps {
  slug: string;
  title: string;
  tagline: string;
  domain: string;
  hero?: boolean;
}

/**
 * UseCaseCard — card linking to a use case detail page.
 * Used on the /use-cases listing page.
 *
 * Usage in MDX or React:
 *   <UseCaseCard slug="full-stack-saas-mvp" title="..." tagline="..." domain="development" />
 */
export function UseCaseCard({ slug, title, tagline, domain, hero }: UseCaseCardProps) {
  return (
    <a
      href={`/use-cases/${slug}`}
      className={clsx(
        "group relative block rounded-lg border p-6 backdrop-blur-md transition-colors",
        "bg-white/[0.02] border-white/[0.06]",
        "hover:bg-white/[0.04] hover:border-[#6366f1]/40",
        hero && "border-[#6366f1]/20 bg-[#6366f1]/[0.04]"
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-[#6366f1]/[0.18] border border-[#6366f1]/45 px-2.5 py-0.5 text-xs font-semibold text-[#818cf8]">
          {DOMAIN_LABELS[domain] ?? domain}
        </span>
        {hero && (
          <span className="rounded-full border border-white/[0.08] bg-white/[0.06] px-2.5 py-0.5 text-xs font-semibold tracking-[2px] uppercase text-[#b5b5c2]">
            Featured
          </span>
        )}
      </div>
      <h3 className="font-display text-[20px] font-semibold tracking-[-0.4px] text-[#fdfdff] group-hover:text-[#818cf8] transition-colors">
        {title}
      </h3>
      <p className="mt-2 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
        {tagline}
      </p>
      <span className="mt-4 inline-flex text-sm font-medium text-[#6366f1] group-hover:text-[#818cf8] transition-colors">
        Learn more →
      </span>
    </a>
  );
}

interface UseCaseGridProps {
  entries: UseCaseEntry[];
}

/**
 * UseCaseGrid — renders a grid of UseCaseCards from content entries.
 */
export function UseCaseGrid({ entries }: UseCaseGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map(({ slug, frontmatter }) => (
        <UseCaseCard
          key={slug}
          slug={slug}
          title={frontmatter.title}
          tagline={frontmatter.tagline}
          domain={frontmatter.domain}
          hero={frontmatter.hero_use_case}
        />
      ))}
    </div>
  );
}
