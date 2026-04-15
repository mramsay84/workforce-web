import type { ReactNode } from "react";
import { clsx } from "clsx";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  tag?: string;
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
 */
export function FeatureCard({ title, description, icon, tag }: FeatureCardProps) {
  return (
    <div
      className={clsx(
        "relative rounded-lg border p-6 transition-colors",
        "bg-white/[0.02] border-white/[0.06]",
        "hover:bg-white/[0.04] hover:border-white/[0.10]"
      )}
      style={{ backdropFilter: "blur(12px)" }}
    >
      {tag && (
        <span className="mb-4 inline-block rounded-full border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 text-xs font-semibold tracking-[2.5px] uppercase text-[#b5b5c2]">
          {tag}
        </span>
      )}
      {icon && (
        <div className="mb-4 text-[#6366f1]">{icon}</div>
      )}
      <h3 className="font-display text-[20px] font-semibold tracking-[-0.4px] text-[#fdfdff]">
        {title}
      </h3>
      <p className="mt-2 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
        {description}
      </p>
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
