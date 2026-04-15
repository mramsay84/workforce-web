import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageContent } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";

export const metadata: Metadata = {
  title: { absolute: "Workforce — AI Workforce Platform" },
  description:
    "Workforce plans, staffs, and executes complex professional work — structured teams of specialized AI agents deliver complete deliverables, not better chat responses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Workforce — AI Workforce Platform",
    description:
      "Brief it. It staffs. It executes. It delivers. Workforce runs complex professional projects with structured AI agent teams — complete work, not better chat responses.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Workforce — AI Workforce Platform",
    description:
      "Brief it. It staffs. It executes. It delivers. Workforce runs complex professional projects with structured AI agent teams.",
  },
};

/**
 * Homepage — loads content from /content/pages/home.mdx
 */
export default async function HomePage() {
  const page = getPageContent("home");

  if (!page) {
    return (
      <main className="px-6 py-32 text-center">
        <p className="text-[#6e7a93]">home.mdx not found in /content/pages/</p>
      </main>
    );
  }

  return (
    <main>
      <MDXRemote source={page.content} components={mdxComponents} />
    </main>
  );
}
