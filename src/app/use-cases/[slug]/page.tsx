import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getUseCaseBySlug, getAllUseCaseSlugs, getRelatedUseCases } from "@/lib/content";
import { mdxComponents, UseCaseGrid } from "@/components/mdx";
import { UseCaseViewTracker } from "@/components/analytics/UseCaseViewTracker";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  if (!useCase) return {};
  const { title, description } = useCase.frontmatter;
  return {
    title,
    description,
    alternates: { canonical: `/use-cases/${slug}` },
    openGraph: {
      title,
      description,
      url: `/use-cases/${slug}`,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
  };
}

/**
 * Use case detail page — /use-cases/[slug]
 * Loads MDX from /content/use-cases/{slug}.mdx
 * Renders frontmatter metadata + MDX content + related use cases.
 */
export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  const { frontmatter, content } = useCase;
  const relatedEntries = frontmatter.related
    ? getRelatedUseCases(frontmatter.related)
    : [];

  return (
    <main>
      {/* GA4: fires use_case_view with slug and ICP tier */}
      <UseCaseViewTracker
        use_case_slug={frontmatter.slug}
        icp_tier={frontmatter.icp_tier ?? 3}
      />

      {/* MDX content — Hero component inside MDX handles the page header */}
      <MDXRemote source={content} components={mdxComponents} />

      {/* Structured deliverables — shown after content body when available */}
      {frontmatter.deliverables.length > 0 && (
        <section className="border-t border-white/[0.06] px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#6366f1]/45 bg-[#6366f1]/[0.18] px-3 py-1 text-xs font-semibold text-[#818cf8]">
                {frontmatter.domain}
              </span>
              {frontmatter.modes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-1 text-xs font-semibold tracking-[2px] uppercase text-[#b5b5c2]"
                >
                  {mode}
                </span>
              ))}
            </div>
            <p className="mb-3 font-body text-[13px] font-semibold tracking-[2.5px] uppercase text-[#6e7a93]">
              What agents produce
            </p>
            <ul className="flex flex-wrap gap-2">
              {frontmatter.deliverables.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-body text-[13px] text-[#b5b5c2]"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related use cases */}
      {relatedEntries.length > 0 && (
        <section className="border-t border-white/[0.06] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-display text-[28px] font-semibold tracking-[-0.8px] text-[#fdfdff]">
              Related use cases
            </h2>
            <UseCaseGrid entries={relatedEntries} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-white/[0.06] px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[28px] font-bold tracking-[-0.8px] text-[#fdfdff]">
            Ready to run this with your team?
          </h2>
          <p className="mt-3 font-body text-[15px] leading-[1.65] text-[#b5b5c2]">
            Workforce runs this project type today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://workforce-dev.rawaihub.com/signup"
              data-ga-cta
              data-cta-label="Get started free"
              data-cta-stage="decision"
              className="inline-flex h-11 min-h-[44px] items-center rounded-md bg-[#4f46e5] px-5 text-sm font-medium text-white hover:bg-[#818cf8] transition-colors"
            >
              Get started free
            </a>
            <a
              href="https://workforce-dev.rawaihub.com/login"
              data-ga-cta
              data-cta-label="Sign in"
              data-cta-stage="decision"
              className="inline-flex h-11 min-h-[44px] items-center rounded-md border border-white/[0.12] bg-white/[0.06] px-5 text-sm font-medium text-[#fdfdff] hover:bg-white/[0.10] transition-colors"
            >
              Sign in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
