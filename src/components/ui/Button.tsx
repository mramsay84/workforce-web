import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--wf-primary-cta)",
    color: "var(--wf-primary-fg)",
    border: "none",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--wf-fg)",
    border: "1px solid var(--wf-border-softer)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--wf-fg-muted)",
    border: "none",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: "0.875rem", borderRadius: "var(--wf-radius-sm)" },
  md: { padding: "12px 24px", fontSize: "1rem", borderRadius: "var(--wf-radius-md)" },
  lg: { padding: "16px 32px", fontSize: "1.125rem", borderRadius: "var(--wf-radius-md)" },
};

/**
 * Button — Workforce button with primary / secondary / ghost variants.
 * Renders as <a> when href is provided.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--wf-font-body)",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 150ms ease, color 150ms ease, border-color 150ms ease, opacity 150ms ease",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  if (href) {
    return (
      <a href={href} style={baseStyle} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button style={baseStyle} className={className} {...props}>
      {children}
    </button>
  );
}
