import { clsx } from "clsx";

interface TrustBadgeProps {
  items: Array<{
    label: string;
    value?: string;
    description?: string;
  }>;
  variant?: "row" | "grid";
}

/**
 * TrustBadge — social proof / trust signals block.
 * Use for metrics, company highlights, or key claims on the trust page.
 *
 * Usage in MDX:
 *   <TrustBadge items={[
 *     { value: "$50–200/day", label: "vs $500K+/year for human teams" },
 *     { value: "24/7", label: "Agents work without breaks" },
 *     { value: "Zero", label: "Knowledge lost on departure" },
 *   ]} />
 */
export function TrustBadge({ items, variant = "row" }: TrustBadgeProps) {
  return (
    <div
      className={clsx(
        variant === "row"
          ? "flex flex-wrap gap-4"
          : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={clsx(
            "rounded-lg border px-6 py-5",
            "bg-white/[0.02] border-white/[0.06]",
            variant === "row" ? "flex-1 min-w-[140px] text-center" : ""
          )}
        >
          {item.value && (
            <div className="font-display text-[28px] font-bold tracking-[-0.8px] text-[#6366f1]">
              {item.value}
            </div>
          )}
          <div className="mt-1 font-body text-[13px] font-semibold leading-[1.5] tracking-[1px] uppercase text-[#b5b5c2]">
            {item.label}
          </div>
          {item.description && (
            <p className="mt-2 font-body text-[13px] leading-[1.5] text-[#6e7a93]">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
