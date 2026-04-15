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
        <div className="px-6 py-4 bg-[var(--wf-card-header-bg,rgba(255,255,255,0.03))] border-b border-[var(--wf-card-border,rgba(255,255,255,0.06))] rounded-t-[var(--wf-radius-lg)]">
          {header}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
