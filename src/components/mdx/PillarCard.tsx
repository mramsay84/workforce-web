import type { ReactNode } from "react";
import { clsx } from "clsx";

interface PillarCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  accent?: boolean;
}

/**
 * PillarCard — large value-prop card for homepage pillars section.
 * Use to highlight core platform differentiators.
 *
 * Usage in MDX:
 *   <PillarCard title="Specialised teams" description="Not one agent doing everything.">
 *     Frontend lead, backend lead, QA, security — each owns their domain.
 *   </PillarCard>
 */
export function PillarCard({ title, description, children, accent }: PillarCardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border p-8 backdrop-blur-md transition-colors",
        accent
          ? "bg-[#6366f1]/[0.06] border-[#6366f1]/25 hover:border-[#6366f1]/40"
          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.10]"
      )}
    >
      <h3
        className={clsx(
          "font-display font-semibold tracking-[-0.4px]",
          "text-[20px] md:text-[24px]",
          accent ? "text-[#818cf8]" : "text-[#fdfdff]"
        )}
      >
        {title}
      </h3>
      <p className="mt-3 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
        {description}
      </p>
      {children && (
        <div className="mt-4 font-body text-[15px] leading-[1.65] text-[#6e7a93]">
          {children}
        </div>
      )}
    </div>
  );
}
