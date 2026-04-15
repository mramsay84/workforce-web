import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageContent } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Trust & Security",
    description:
      "How Workforce handles your data, enforces output quality, and why legal and financial outputs are analysis, not legal advice — what to know before you brief.",
    alternates: { canonical: "/trust" },
    openGraph: {
      title: "Trust & Security",
      description:
        "How Workforce handles your data, enforces output quality, and why legal and financial outputs are analysis, not legal advice — what to know before you brief.",
      url: "/trust",
      type: "website",
    },
    twitter: {
      title: "Trust & Security",
      description:
        "How Workforce handles your data, enforces output quality, and why legal and financial outputs are analysis, not legal advice — what to know before you brief.",
    },
  };
}

export default async function TrustPage() {
  const page = getPageContent("trust");
  if (!page) return <main className="px-6 py-32 text-center"><p className="text-[#6e7a93]">trust.mdx not found</p></main>;

  return (
    <main>
      <MDXRemote source={page.content} components={mdxComponents} />
    </main>
  );
}
