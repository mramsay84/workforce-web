import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageContent } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageContent("how-it-works");
  if (!page) return {};
  return {
    title: page.frontmatter.title,
    description: page.frontmatter.description,
  };
}

export default async function HowItWorksPage() {
  const page = getPageContent("how-it-works");
  if (!page) return <main className="px-6 py-32 text-center"><p className="text-[#6e7a93]">how-it-works.mdx not found</p></main>;

  return (
    <main>
      <MDXRemote source={page.content} components={mdxComponents} />
    </main>
  );
}
