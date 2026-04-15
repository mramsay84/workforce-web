'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { UseCaseGrid } from '@/components/mdx'
import type { UseCaseEntry } from '@/types/content'
import { trackAudiencePathSelect, type AudienceDomain } from '@/lib/analytics'

// Maps domain keys → GA4 audience_domain values for audience_path_select events
const DOMAIN_TO_AUDIENCE: Record<string, AudienceDomain | null> = {
  all: null,
  development: 'dev',
  marketing: 'marketing',
  research: 'research',
  legal: 'legal',
  finance: 'finance',
  strategy: 'strategy',
}

const DOMAIN_LABELS: Record<string, string> = {
  all: 'All',
  development: 'Development',
  marketing: 'Marketing',
  research: 'Research',
  legal: 'Legal',
  finance: 'Finance',
  strategy: 'Strategy',
}

interface UseCasesFilterGridProps {
  entries: UseCaseEntry[]
}

export function UseCasesFilterGrid({ entries }: UseCasesFilterGridProps) {
  const [activeDomain, setActiveDomain] = useState('all')
  const pathname = usePathname()

  function handleDomainSelect(domain: string) {
    setActiveDomain(domain)
    const audienceDomain = DOMAIN_TO_AUDIENCE[domain]
    if (audienceDomain) {
      trackAudiencePathSelect({ audience_domain: audienceDomain, page_path: pathname })
    }
  }

  // Derive the set of domains that actually exist in the entries
  const availableDomains = ['all', ...Array.from(
    new Set(entries.map((e) => {
      // Normalize research-strategy → research so it groups together
      const d = e.frontmatter.domain as string
      return d === 'research-strategy' ? 'research' : d
    }))
  ).sort()]

  const filtered = activeDomain === 'all'
    ? entries
    : entries.filter((e) => {
        const d = e.frontmatter.domain as string
        const normalized = d === 'research-strategy' ? 'research' : d
        return normalized === activeDomain
      })

  return (
    <div>
      {/* Domain filter tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {availableDomains.map((domain) => (
          <button
            key={domain}
            onClick={() => handleDomainSelect(domain)}
            className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm font-medium transition-colors border ${
              activeDomain === domain
                ? 'bg-[#4f46e5] border-[#4f46e5] text-white'
                : 'border-white/[0.08] bg-white/[0.04] text-[#b5b5c2] hover:text-[#fdfdff] hover:border-white/[0.15]'
            }`}
          >
            {DOMAIN_LABELS[domain] ?? domain.charAt(0).toUpperCase() + domain.slice(1)}
          </button>
        ))}
      </div>

      {/* Filtered grid */}
      {filtered.length > 0 ? (
        <UseCaseGrid entries={filtered} />
      ) : (
        <p className="py-12 text-center text-[#6e7a93]">
          No use cases in this domain yet.
        </p>
      )}
    </div>
  )
}
