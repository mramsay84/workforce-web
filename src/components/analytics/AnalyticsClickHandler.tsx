'use client'

/**
 * AnalyticsClickHandler — global click delegation for GA4 events.
 *
 * Intercepts all <a> clicks in the document and fires the appropriate GA4 events
 * based on href content and data attributes. This avoids converting server
 * components to client components just to attach onClick handlers.
 *
 * Data attributes read from anchor elements:
 *   data-ga-cta           — fires cta_click (presence flag)
 *   data-cta-label        — cta_label for cta_click (falls back to textContent)
 *   data-cta-stage        — overrides inferred stage
 *   data-ga-nav-cta       — fires nav_cta_click (presence flag)
 *   data-ga-demo-cta      — fires demo_cta_click (presence flag)
 *   data-ga-audience-domain — fires audience_path_select with this domain value
 */

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackOutboundConversion,
  trackCtaClick,
  trackNavCtaClick,
  trackDemoCtaClick,
  trackAudiencePathSelect,
  ctaStageFromPath,
  type CtaStage,
  type AudienceDomain,
} from '@/lib/analytics'

export function AnalyticsClickHandler() {
  const pathname = usePathname()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''
      const inferredStage = ctaStageFromPath(pathname)
      const stage = (anchor.dataset.ctaStage as CtaStage | undefined) ?? inferredStage

      // outbound_conversion — any click to signup or login
      if (href.includes('workforce-dev.rawaihub.com/signup')) {
        trackOutboundConversion({ destination: 'signup', source_page: pathname, cta_stage: stage })
      } else if (href.includes('workforce-dev.rawaihub.com/login')) {
        trackOutboundConversion({ destination: 'login', source_page: pathname, cta_stage: stage })
      }

      // nav_cta_click — header primary CTA
      if ('gaNavCta' in anchor.dataset) {
        trackNavCtaClick(pathname)
      }

      // demo_cta_click — "Book a demo" buttons
      if ('gaDemoCta' in anchor.dataset) {
        trackDemoCtaClick({ page_path: pathname, cta_stage: stage })
      }

      // cta_click — any CTA marked with data-ga-cta
      if ('gaCta' in anchor.dataset) {
        const label = anchor.dataset.ctaLabel ?? anchor.textContent?.trim() ?? ''
        trackCtaClick({ cta_label: label, cta_stage: stage, page_path: pathname })
      }

      // audience_path_select — domain card or nav use-case category click
      if (anchor.dataset.gaAudienceDomain) {
        trackAudiencePathSelect({
          audience_domain: anchor.dataset.gaAudienceDomain as AudienceDomain,
          page_path: pathname,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return null
}
