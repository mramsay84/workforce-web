import { clsx } from "clsx";

interface PricingTier {
  name: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  highlighted?: boolean;
}

interface PricingTableProps {
  tiers: PricingTier[];
}

/**
 * PricingTable — pricing tier comparison block.
 *
 * Usage in MDX:
 *   <PricingTable tiers={[
 *     {
 *       name: "Starter",
 *       price: "$49",
 *       period: "/month",
 *       description: "For individuals and small teams.",
 *       features: ["5 concurrent agents", "Standard work modes", "Community support"],
 *       cta: { label: "Get started", href: "https://workforce-dev.rawaihub.com/signup" },
 *     },
 *     // ...
 *   ]} />
 */
export function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier, i) => (
        <div
          key={i}
          className={clsx(
            "relative flex flex-col rounded-xl border p-8 transition-colors",
            tier.highlighted
              ? "bg-[#6366f1]/[0.08] border-[#6366f1]/40 shadow-surface"
              : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
          )}
          style={{ backdropFilter: "blur(12px)" }}
        >
          {tier.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-[#6366f1] px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            </div>
          )}

          <div>
            <h3 className="font-display text-[20px] font-semibold tracking-[-0.4px] text-[#fdfdff]">
              {tier.name}
            </h3>
            {tier.price && (
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-[40px] font-bold tracking-[-1.6px] text-[#fdfdff]">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="mb-1 font-body text-[15px] text-[#b5b5c2]">
                    {tier.period}
                  </span>
                )}
              </div>
            )}
            <p className="mt-2 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
              {tier.description}
            </p>
          </div>

          <ul className="mt-6 flex-1 space-y-3">
            {tier.features.map((feature, j) => (
              <li key={j} className="flex items-start gap-3 font-body text-[15px] text-[#b5b5c2]">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#6366f1]"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8l4 4 7-7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={tier.cta.href}
            className={clsx(
              "mt-8 inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors",
              tier.highlighted
                ? "bg-[#6366f1] text-white hover:bg-[#818cf8]"
                : "border border-white/[0.12] bg-white/[0.06] text-[#fdfdff] hover:bg-white/[0.10]"
            )}
          >
            {tier.cta.label}
          </a>
        </div>
      ))}
    </div>
  );
}
