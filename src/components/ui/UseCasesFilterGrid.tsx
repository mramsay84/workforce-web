'use client'

import { useState } from 'react'
import { UseCaseGrid } from '@/components/mdx'
import type { UseCaseEntry } from '@/types/content'

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
            onClick={() => setActiveDomain(domain)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
              activeDomain === domain
                ? 'bg-[#6366f1] border-[#6366f1] text-white'
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
