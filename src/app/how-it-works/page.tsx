import { AppShell } from "@/components/AppShell";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Workforce AI agent teams operate and integrate into your business.",
};

export default function HowItWorksPage() {
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
          How It Works
        </h1>
        <p style={{ color: "var(--wf-fg-muted)", fontSize: "1.125rem" }}>
          Content coming soon — How It Works page stub.
        </p>
      </main>
    </AppShell>
  );
}
