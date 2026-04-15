'use client'

/**
 * HomepageScrollTracker — fires scroll_depth GA4 events at 25%, 50%, 75%, and 90%
 * scroll milestones on the homepage (/).
 *
 * Uses a passive scroll listener. Each milestone fires at most once per page load.
 * Resets when the pathname changes (i.e. user navigates away and back).
 */

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackScrollDepth } from '@/lib/analytics'

const MILESTONES = [25, 50, 75, 90] as const

export function HomepageScrollTracker() {
  const pathname = usePathname()
  const fired = useRef(new Set<number>())

  useEffect(() => {
    if (pathname !== '/') return

    // Reset milestones on homepage entry
    fired.current = new Set()

    function handleScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (total === 0) return
      const pct = (scrolled / total) * 100

      for (const milestone of MILESTONES) {
        if (pct >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone)
          trackScrollDepth({ depth_percent: milestone, page_path: '/' })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check immediately in case content is short and page is already scrolled
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return null
}
