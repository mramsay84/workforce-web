import type { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  variant?: "default" | "surface" | "dark";
  width?: "default" | "wide" | "narrow";
  align?: "left" | "center";
}

/**
 * Section — content section wrapper with optional heading.
 *
 * Usage in MDX:
 *   <Section title="How it works" subtitle="Three steps to your AI workforce" id="how-it-works">
 *     ...content...
 *   </Section>
 */
export function Section({
  children,
  title,
  subtitle,
  id,
  variant = "default",
  width = "default",
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "w-full px-6 py-20 md:py-28",
        variant === "surface" && "bg-[#09090b] border-y border-white/[0.06]",
        variant === "dark" && "bg-[#050507]",
        variant === "default" && "bg-transparent"
      )}
    >
      <div
        className={clsx(
          "mx-auto",
          width === "default" && "max-w-5xl",
          width === "wide" && "max-w-7xl",
          width === "narrow" && "max-w-3xl"
        )}
      >
        {(title || subtitle) && (
          <div
            className={clsx(
              "mb-12",
              align === "center" && "text-center"
            )}
          >
            {title && (
              <h2
                className={clsx(
                  "font-display font-bold tracking-[-0.8px] leading-[1.15]",
                  "text-2xl md:text-[28px] text-[#fdfdff]"
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
          {children}
        </div>
      </div>
    </section>
  );
}
