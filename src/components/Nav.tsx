import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust" },
];

/**
 * Nav — site-wide top navigation bar.
 * Inherits AppShell z-index context.
 */
export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(5, 5, 7, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--wf-border-soft)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: "1200px", padding: "0 24px", height: "64px" }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--wf-font-display)",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "var(--wf-fg)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Workforce
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "var(--wf-fg-muted)",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
                transition: "color 150ms ease",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://workforce-dev.rawaihub.com/login"
            style={{
              color: "var(--wf-fg-muted)",
              fontSize: "0.9375rem",
              fontWeight: 500,
              textDecoration: "none",
              padding: "8px 16px",
            }}
          >
            Log in
          </a>
          <a
            href="https://workforce-dev.rawaihub.com/signup"
            style={{
              backgroundColor: "var(--wf-primary)",
              color: "var(--wf-primary-fg)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "var(--wf-radius-md)",
              transition: "background-color 150ms ease",
            }}
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
