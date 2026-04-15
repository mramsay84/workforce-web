import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Workforce — AI Workforce Platform",
    template: "%s | Workforce",
  },
  description:
    "Workforce is an AI Workforce Platform that lets you deploy intelligent agent teams to handle complex business operations at scale.",
  keywords: ["AI workforce", "AI agents", "automation", "AI platform"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Workforce",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --wf-font-body: var(--font-dm-sans), system-ui, -apple-system, sans-serif;
                --wf-font-mono: var(--font-jetbrains-mono), ui-monospace, 'SF Mono', Menlo, monospace;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "var(--wf-bg)" }}>
        {children}
      </body>
    </html>
  );
}
