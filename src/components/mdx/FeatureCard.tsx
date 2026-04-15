import type { ReactNode } from "react";
import { clsx } from "clsx";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  tag?: string;
  /** When provided, the card renders as a clickable link */
  href?: string;
  /** Optional CTA label shown at the bottom of a linked card */
  cta?: string;
  /** Indigo accent treatment — use for the "Workforce answer" card in comparison pairs */
  accent?: boolean;
}

/**
 * FeatureCard — glass-surface card for platform features.
 *
 * Usage in MDX:
 *   <FeatureCard
 *     title="Parallel execution"
 *     description="Multiple specialists work simultaneously..."
 *     tag="Core"
 *   />
 *
 * Linked variant (renders as <a>):
 *   <FeatureCard
 *     title="Full-Stack SaaS MVP"
 *     description="..."
 *     tag="Development"
 *     href="/use-cases/saas-mvp"
 *     cta="See how it works →"
 *   />
 */
export function FeatureCard({ title, description, icon, tag, href, cta, accent }: FeatureCardProps) {
  const inner = (
    <>
      {tag && (
        <span className={clsx(
          "mb-4 inline-block rounded-full border px-2.5 py-1 text-xs font-semibold tracking-[2.5px] uppercase",
          accent
            ? "border-[#6366f1]/45 bg-[#6366f1]/[0.18] text-[#818cf8]"
            : "border-white/[0.08] bg-white/[0.06] text-[#b5b5c2]"
        )}>
          {tag}
        </span>
      )}
      {icon && (
        <div className="mb-4 text-[#6366f1]">{icon}</div>
      )}
      <h3 className={clsx(
        "font-display text-[20px] font-semibold tracking-[-0.4px]",
        accent ? "text-[#818cf8]" : "text-[#fdfdff]"
      )}>
        {title}
      </h3>
      <p className="mt-2 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
        {description}
      </p>
      {cta && (
        <span className="mt-4 inline-flex text-sm font-medium text-[#6366f1] group-hover:text-[#818cf8] transition-colors">
          {cta}
        </span>
      )}
    </>
  );

  const classes = clsx(
    "group relative rounded-lg border p-6 transition-colors",
    accent
      ? "bg-[#6366f1]/[0.04] border-[#6366f1]/20 hover:border-[#6366f1]/40"
      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10]",
    href && "block"
  );

  if (href) {
    return (
      <a href={href} className={`${classes} backdrop-blur-md no-underline`}>
        {inner}
      </a>
    );
  }

  return (
    <div className={`${classes} backdrop-blur-md`}>
      {inner}
    </div>
  );
}

interface FeatureGridProps {
  children: ReactNode;
  columns?: 2 | 3;
}

/**
 * FeatureGrid — responsive grid wrapper for FeatureCards.
 */
export function FeatureGrid({ children, columns = 3 }: FeatureGridProps) {
  return (
    <div
      className={clsx(
        "grid gap-4",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {children}
    </div>
  );
}
