import { AppShell } from "@/components/AppShell";
import { Nav } from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Security",
  description: "How Workforce protects your data and keeps your AI agents secure.",
};

export default function TrustPage() {
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
          Trust &amp; Security
        </h1>
        <p style={{ color: "var(--wf-fg-muted)", fontSize: "1.125rem" }}>
          Content coming soon — Trust &amp; Security page stub.
        </p>
      </main>
    </AppShell>
  );
}
