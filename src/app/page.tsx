import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageContent } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";

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
