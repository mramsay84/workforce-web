import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageContent } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing",
    description:
      "Workforce is in early access. Usage-based billing — pay for what your AI team executes. No seat fees, no minimums. You approve the plan before work begins.",
    alternates: { canonical: "/pricing" },
    openGraph: {
      title: "Pricing",
      description:
        "Workforce is in early access. Usage-based billing — pay for what your AI team executes. No seat fees, no minimums. You approve the plan before work begins.",
      url: "/pricing",
      type: "website",
    },
    twitter: {
      title: "Pricing",
      description:
        "Workforce is in early access. Usage-based billing — pay for what your AI team executes. No seat fees, no minimums. You approve the plan before work begins.",
    },
  };
}

export default async function PricingPage() {
  const page = getPageContent("pricing");
  if (!page) return <main className="px-6 py-32 text-center"><p className="text-[#6e7a93]">pricing.mdx not found</p></main>;

  return (
    <main>
      <MDXRemote source={page.content} components={mdxComponents} />
    </main>
  );
}
