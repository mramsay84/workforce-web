/**
 * GA4 analytics helpers for the Workforce marketing site.
 *
 * All events are typed to match the schema defined in /project/outputs/analytics-event-spec.md
 * Measurement ID is loaded from NEXT_PUBLIC_GA_MEASUREMENT_ID at build time.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''

export type CtaStage = 'awareness' | 'consideration' | 'evaluation' | 'decision'
export type AudienceDomain = 'dev' | 'marketing' | 'legal' | 'research' | 'finance' | 'strategy'

/** Safe gtag wrapper — no-ops if window.gtag is not available (SSR, blocked, not loaded) */
function gtag(command: string, ...args: unknown[]): void {
  if (typeof window === 'undefined') return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any
  if (typeof w.gtag !== 'function') return
  w.gtag(command, ...args)
}

// ---------------------------------------------------------------------------
// Typed event helpers
// ---------------------------------------------------------------------------

/** page_view — fires on every route change via Next.js App Router */
export function trackPageView(page_path: string, page_title?: string): void {
  gtag('event', 'page_view', {
    page_path,
    page_title: page_title ?? (typeof document !== 'undefined' ? document.title : ''),
    send_to: GA_MEASUREMENT_ID,
  })
}

/** cta_click — any CTA button or link click */
export function trackCtaClick(params: {
  cta_label: string
  cta_stage: CtaStage
  page_path: string
}): void {
  gtag('event', 'cta_click', params)
}

/** audience_path_select — domain card click on homepage or nav use-case category click */
export function trackAudiencePathSelect(params: {
  audience_domain: AudienceDomain
  page_path: string
}): void {
  gtag('event', 'audience_path_select', params)
}

/** use_case_view — use case detail page load */
export function trackUseCaseView(params: {
  use_case_slug: string
  icp_tier: number
}): void {
  gtag('event', 'use_case_view', params)
}

/** outbound_conversion — click navigating to /signup or /login on workforce-dev.rawaihub.com */
export function trackOutboundConversion(params: {
  destination: 'signup' | 'login'
  source_page: string
  cta_stage: CtaStage
}): void {
  gtag('event', 'outbound_conversion', params)
}

/** demo_cta_click — "Book a demo" button clicks specifically */
export function trackDemoCtaClick(params: {
  page_path: string
  cta_stage: CtaStage
}): void {
  gtag('event', 'demo_cta_click', params)
}

/** nav_cta_click — header "Get Access" / primary nav CTA */
export function trackNavCtaClick(page_path: string): void {
  gtag('event', 'nav_cta_click', { page_path })
}

/** scroll_depth — 25%, 50%, 75%, 90% milestones on the homepage */
export function trackScrollDepth(params: {
  depth_percent: 25 | 50 | 75 | 90
  page_path: string
}): void {
  gtag('event', 'scroll_depth', params)
}

// ---------------------------------------------------------------------------
// Utility: infer CTA stage from current page path
// ---------------------------------------------------------------------------

export function ctaStageFromPath(pathname: string): CtaStage {
  if (pathname.startsWith('/use-cases/')) return 'evaluation'
  if (pathname === '/pricing') return 'decision'
  if (pathname === '/trust') return 'consideration'
  if (pathname === '/how-it-works') return 'consideration'
  return 'awareness'
}
