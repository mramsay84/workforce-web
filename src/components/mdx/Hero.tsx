import type { ReactNode } from "react";
import { clsx } from "clsx";

interface HeroProps {
  headline: string;
  subheadline?: string;
  children?: ReactNode;
  cta?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  badge?: string;
  align?: "left" | "center";
}

/**
 * Hero — full-bleed hero panel.
 * Always renders with the dark surface (#09090b) per Workforce theme spec.
 *
 * Usage in MDX:
 *   <Hero
 *     headline="Your headline here"
 *     subheadline="Supporting copy"
 *     badge="New"
 *     cta={{ label: "Get started", href: "https://workforce-dev.rawaihub.com/signup" }}
 *     ctaSecondary={{ label: "Sign in", href: "https://workforce-dev.rawaihub.com/login" }}
 *   />
 */
export function Hero({
  headline,
  subheadline,
  children,
  cta,
  ctaSecondary,
  badge,
  align = "center",
}: HeroProps) {
  return (
    <section
      className={clsx(
        "relative w-full bg-[#09090b] text-[#fdfdff] overflow-hidden",
        "border-b border-white/[0.06]",
        "px-6 py-24 md:py-32 lg:py-40"
      )}
    >
      {/* Ambient orb gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.06) 40%, transparent 72%)",
        }}
      />

      <div
        className={clsx(
          "relative mx-auto max-w-5xl",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {badge && (
          <div className="mb-6 inline-flex">
            <span
              className={clsx(
                "rounded-full px-3 py-1 text-xs font-semibold tracking-[2.5px] uppercase",
                "bg-[#6366f1]/[0.18] text-[#818cf8] border border-[#6366f1]/45"
              )}
            >
              {badge}
            </span>
          </div>
        )}

        <h1
          className={clsx(
            "font-display font-bold tracking-[-2px] leading-[1.02]",
            "text-4xl md:text-5xl lg:text-[56px]",
            "text-[#fdfdff]"
          )}
        >
          {headline}
        </h1>

        {subheadline && (
          <p
            className={clsx(
              "mt-6 font-body text-[15px] leading-[1.65] text-[#b5b5c2]",
              "mx-auto max-w-2xl"
            )}
          >
            {subheadline}
          </p>
        )}

        {children && (
          <div className="mt-6 text-[#b5b5c2] font-body text-[15px] leading-[1.65]">
            {children}
          </div>
        )}

        {(cta || ctaSecondary) && (
          <div
            className={clsx(
              "mt-10 flex flex-wrap gap-3",
              align === "center" ? "justify-center" : "justify-start"
            )}
          >
            {cta && (
              <a
                href={cta.href}
                data-ga-cta
                data-cta-label={cta.label}
                data-cta-stage="awareness"
                className={clsx(
                  "inline-flex h-10 items-center rounded-md px-5 text-sm font-medium transition-colors",
                  cta.variant === "secondary"
                    ? "bg-white/[0.06] text-[#fdfdff] border border-white/[0.12] hover:bg-white/[0.10]"
                    : "bg-[#6366f1] text-white hover:bg-[#818cf8]"
                )}
              >
                {cta.label}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                data-ga-cta
                data-cta-label={ctaSecondary.label}
                data-cta-stage="awareness"
                className={clsx(
                  "inline-flex h-10 items-center rounded-md px-5 text-sm font-medium transition-colors",
                  "bg-white/[0.06] text-[#fdfdff] border border-white/[0.12] hover:bg-white/[0.10]"
                )}
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
