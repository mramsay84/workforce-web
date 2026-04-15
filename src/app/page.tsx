import { AppShell } from "@/components/AppShell";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <AppShell>
      <Nav />
      <main
        className="flex-1 flex flex-col items-center justify-center"
        style={{ padding: "var(--wf-space-16) var(--wf-space-6)" }}
      >
        <div style={{ maxWidth: "800px", textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--wf-primary)",
              marginBottom: "var(--wf-space-4)",
            }}
          >
            AI Workforce Platform
          </p>
          <h1
            style={{
              fontFamily: "var(--wf-font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--wf-fg)",
              marginBottom: "var(--wf-space-6)",
            }}
          >
            Deploy AI agent teams
            <br />
            that actually work
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--wf-fg-muted)",
              lineHeight: 1.6,
              marginBottom: "var(--wf-space-8)",
              maxWidth: "600px",
              margin: "0 auto var(--wf-space-8)",
            }}
          >
            Workforce lets you spin up intelligent agent teams to handle complex
            business operations — at the speed and scale that your business demands.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://workforce-dev.rawaihub.com/signup"
              style={{
                backgroundColor: "var(--wf-primary)",
                color: "var(--wf-primary-fg)",
                fontWeight: 600,
                fontSize: "1.0625rem",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "var(--wf-radius-md)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Start building free
            </a>
            <a
              href="/how-it-works"
              style={{
                color: "var(--wf-fg-muted)",
                fontWeight: 500,
                fontSize: "1.0625rem",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "var(--wf-radius-md)",
                border: "1px solid var(--wf-border-softer)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              See how it works
            </a>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
