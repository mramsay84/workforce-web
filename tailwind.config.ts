import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Workforce design tokens — dark theme (default)
        wf: {
          bg: "#050507",
          "bg-surface": "#09090b",
          "bg-surface-2": "#0a0a0c",
          fg: "#fdfdff",
          "fg-muted": "#b5b5c2",
          "fg-dim": "#6e7a93",
          primary: "#6366f1",
          "primary-hover": "#818cf8",
          "primary-fg": "#ffffff",
          border: "#1e1e21",
          accent: "#27272a",
        },
      },
      fontFamily: {
        display: ["Aileron", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["56px", { lineHeight: "1.02", letterSpacing: "-2px", fontWeight: "700" }],
        headline: ["40px", { lineHeight: "1.08", letterSpacing: "-1.6px", fontWeight: "700" }],
        title: ["28px", { lineHeight: "1.15", letterSpacing: "-0.8px", fontWeight: "600" }],
        subtitle: ["20px", { lineHeight: "1.3", letterSpacing: "-0.4px", fontWeight: "600" }],
        body: ["15px", { lineHeight: "1.65" }],
        label: ["13px", { lineHeight: "1.5", letterSpacing: "2.5px" }],
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      boxShadow: {
        surface: "0 8px 60px rgba(0,0,0,0.40), 0 2px 20px rgba(0,0,0,0.25)",
        "surface-light": "0 8px 60px rgba(0,0,0,0.08), 0 2px 20px rgba(0,0,0,0.04)",
      },
      spacing: {
        "wf-1": "4px",
        "wf-2": "8px",
        "wf-3": "12px",
        "wf-4": "16px",
        "wf-6": "24px",
        "wf-8": "32px",
        "wf-12": "48px",
        "wf-16": "64px",
      },
      screens: {
        // Mobile-first breakpoints — 375px base (mobile), 768 (tablet), 1280 (desktop)
        xs: "375px",
        // sm, md, lg, xl, 2xl — Tailwind defaults preserved
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 320ms ease forwards",
        "fade-in-up": "fade-in-up 400ms ease forwards",
        "slide-in": "slide-in 300ms ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
