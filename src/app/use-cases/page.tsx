import { AppShell } from "@/components/AppShell";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "Explore how teams use Workforce AI agents across industries and workflows.",
};

export default function UseCasesPage() {
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
          Use Cases
        </h1>
        <p style={{ color: "var(--wf-fg-muted)", fontSize: "1.125rem" }}>
          Content coming soon — Use Cases page stub.
        </p>
      </main>
    </AppShell>
  );
}
