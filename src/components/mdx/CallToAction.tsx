import { clsx } from "clsx";

interface CallToActionProps {
  headline: string;
  body?: string;
  primary: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
  variant?: "default" | "dark";
}

/**
 * CallToAction — conversion block driving users to signup/login.
 * Primary CTA should always point to /signup; secondary to /login.
 *
 * Usage in MDX:
 *   <CallToAction
 *     headline="Ready to deploy your AI workforce?"
 *     body="Start free, scale as you grow."
 *     primary={{ label: "Get started free", href: "https://workforce-dev.rawaihub.com/signup" }}
 *     secondary={{ label: "Sign in", href: "https://workforce-dev.rawaihub.com/login" }}
 *   />
 */
export function CallToAction({
  headline,
  body,
  primary,
  secondary,
  variant = "dark",
}: CallToActionProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-xl border px-8 py-12 text-center",
        variant === "dark"
          ? "bg-[#09090b] border-white/[0.06]"
          : "bg-[#6366f1]/[0.06] border-[#6366f1]/20"
      )}
    >
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <h2
          className={clsx(
            "font-display font-bold tracking-[-0.8px]",
            "text-2xl md:text-[28px] text-[#fdfdff]"
          )}
        >
          {headline}
        </h2>
        {body && (
          <p className="mt-3 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
            {body}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={primary.href}
            data-ga-cta
            data-cta-label={primary.label}
            className="inline-flex h-11 min-h-[44px] items-center rounded-md bg-[#4f46e5] px-5 text-sm font-medium text-white transition-colors hover:bg-[#818cf8]"
          >
            {primary.label}
          </a>
          {secondary && (
            <a
              href={secondary.href}
              data-ga-cta
              data-cta-label={secondary.label}
              className="inline-flex h-11 min-h-[44px] items-center rounded-md border border-white/[0.12] bg-white/[0.06] px-5 text-sm font-medium text-[#fdfdff] transition-colors hover:bg-white/[0.10]"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
