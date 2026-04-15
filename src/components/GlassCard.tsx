import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

/**
 * GlassCard — Workforce frosted-glass surface component.
 * Applies the 2% white bg, 6% white border, 12px blur, 16px radius treatment
 * from the Workforce Theme Guideline.
 */
export function GlassCard({ children, className = "", header, style }: GlassCardProps) {
  return (
    <div
      className={`wf-glass ${className}`}
      style={style}
    >
      {header && (
        <div
          className="px-6 py-4"
          style={{
            background: "var(--wf-card-header-bg)",
            borderBottom: "var(--wf-surface-border)",
            borderRadius: "var(--wf-radius-lg) var(--wf-radius-lg) 0 0",
          }}
        >
          {header}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
