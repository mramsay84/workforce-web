'use client'

/**
 * UseCaseViewTracker — fires the use_case_view GA4 event on mount.
 * Placed inside use case detail pages (server components) as a lightweight client island.
 */

import { useEffect } from 'react'
import { trackUseCaseView } from '@/lib/analytics'

interface UseCaseViewTrackerProps {
  use_case_slug: string
  icp_tier: number
}

export function UseCaseViewTracker({ use_case_slug, icp_tier }: UseCaseViewTrackerProps) {
  useEffect(() => {
    trackUseCaseView({ use_case_slug, icp_tier })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
