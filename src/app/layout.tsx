import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { AnalyticsClickHandler } from "@/components/analytics/AnalyticsClickHandler";
import { HomepageScrollTracker } from "@/components/analytics/HomepageScrollTracker";

export const metadata: Metadata = {
  title: {
    default: "Workforce — AI Workforce Platform",
    template: "%s | Workforce",
  },
  description:
    "Workforce plans, staffs, and executes complex professional work — structured teams of specialized AI agents deliver complete deliverables, not better chat responses.",
  metadataBase: new URL("https://workforce-dev.rawaihub.com"),
  openGraph: {
    type: "website",
    siteName: "Workforce",
    title: {
      default: "Workforce — AI Workforce Platform",
      template: "%s | Workforce",
    },
    description:
      "Brief it. Workforce assembles specialized AI agent teams and delivers complete work — across development, legal, research, marketing, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Workforce — AI Workforce Platform",
      template: "%s | Workforce",
    },
    description:
      "Brief it. Workforce assembles specialized AI agent teams and delivers complete work — across development, legal, research, marketing, and more.",
  },
};

/**
 * Root layout — minimal shell for the Workforce marketing site.
 * Navigation and footer are owned by the Page Builder (frontend-lead).
 * MDX pipeline specialist owns the content rendering layer below this.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* DM Sans — body font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050507] text-[#fdfdff] antialiased">
        {/* 
          Shell gradient background — ambient orb effect from theme spec.
          Page Builder will add nav/footer around {children}.
        */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 40% 30% at 22% 14%, color-mix(in srgb, #6366f1 4%, rgba(51,65,85,0.035)) 0%, transparent 72%),
              radial-gradient(ellipse 40% 30% at 80% 86%, color-mix(in srgb, #6366f1 4%, rgba(51,65,85,0.04)) 0%, transparent 72%)
            `,
          }}
        />
        <GoogleAnalytics />
        <AnalyticsClickHandler />
        <HomepageScrollTracker />
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
