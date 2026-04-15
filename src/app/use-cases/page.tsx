import type { Metadata } from "next";
import { getAllUseCases } from "@/lib/content";
import { UseCasesFilterGrid } from "@/components/ui/UseCasesFilterGrid";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Real projects the Workforce AI platform can run — from full-stack development to legal review, investment research, and marketing production.",
  alternates: { canonical: "/use-cases" },
  openGraph: {
    title: "Use Cases",
    description:
      "Real projects the Workforce AI platform can run — from full-stack development to legal review, investment research, and marketing production.",
    url: "/use-cases",
    type: "website",
  },
  twitter: {
    title: "Use Cases",
    description:
      "Real projects the Workforce AI platform can run — from full-stack development to legal review, investment research, and marketing production.",
  },
};

/**
 * Use cases listing page — /use-cases
 * Renders all use case entries from /content/use-cases/ as a filterable grid.
 * Content authors add new use cases by dropping .mdx files in /content/use-cases/.
 */
export default function UseCasesPage() {
  const entries = getAllUseCases();

  return (
    <main className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#6366f1]/45 bg-[#6366f1]/[0.18] px-3 py-1 text-xs font-semibold tracking-[2.5px] uppercase text-[#818cf8]">
            Use Cases
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-[-1.6px] text-[#fdfdff] md:text-[40px]">
            What Workforce can run
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
            Real projects. Not aspirational demos — concrete use cases across development,
            legal, finance, research, marketing, and more.
          </p>
        </div>

        <h2 className="sr-only">Browse use cases</h2>
        <UseCasesFilterGrid entries={entries} />
      </div>
    </main>
  );
}
