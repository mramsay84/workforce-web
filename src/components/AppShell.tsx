"use client";

import React from "react";

/**
 * AppShell — wraps every page with the Workforce ambient gradient background
 * and the silver orb glow rising from the bottom.
 *
 * Usage: wrap page content inside <AppShell> in page-level layouts.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: "var(--wf-shell-bg)" }}>
      {/* Shell ambient gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "var(--wf-shell-gradient)" }}
      />

      {/* Silver orb — bottom-rising glow */}
      <SilverOrb />

      {/* Page content */}
      <div className="relative z-10 flex flex-col flex-1">
        {children}
      </div>
    </div>
  );
}

/**
 * SilverOrb — the bottom-rising ambient glow present on all pages.
 */
export function SilverOrb() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-0 h-full"
      style={{ background: "var(--wf-orb-gradient)" }}
    />
  );
}
