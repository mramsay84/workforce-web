import { AppShell } from "@/components/AppShell";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

interface UseCasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title,
    description: `Learn how Workforce AI agents power ${title} workflows.`,
  };
}

export default async function UseCaseDetailPage({ params }: UseCasePageProps) {
  const { slug } = await params;

  return (
    <AppShell>
      <Nav />
      <main
        className="flex-1 flex flex-col"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "var(--wf-space-16) var(--wf-space-6)", width: "100%" }}
      >
        <h1
          style={{
            fontFamily: "var(--wf-font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--wf-fg)",
            marginBottom: "var(--wf-space-6)",
          }}
        >
          Use Case: {slug}
        </h1>
        <p style={{ color: "var(--wf-fg-muted)", fontSize: "1.125rem" }}>
          Content coming soon — Use Case detail page stub.
        </p>
      </main>
    </AppShell>
  );
}
