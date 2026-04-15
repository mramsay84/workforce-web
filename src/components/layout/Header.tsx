'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

// audience_domain values for GA4 audience_path_select events
const CATEGORY_AUDIENCE: Record<string, string> = {
  'Development': 'dev',
  'Marketing & Content': 'marketing',
  'Research & Analysis': 'research',
  'Legal & Compliance': 'legal',
}

const useCasesDropdown = {
  Development: [
    { name: 'SaaS MVP', href: '/use-cases/saas-mvp', desc: 'Full-stack app, deployed' },
    { name: 'Codebase Audit', href: '/use-cases/legacy-codebase-audit', desc: 'Week 1', disabled: true },
    { name: 'API Design', href: '/use-cases/api-design', desc: 'Week 1', disabled: true },
  ],
  'Marketing & Content': [
    { name: 'Product Launch GTM', href: '/use-cases/product-launch-gtm', desc: 'Strategy to launch assets' },
    { name: 'Content Calendar', href: '/use-cases/content-calendar', desc: 'Week 1', disabled: true },
    { name: 'Competitive Positioning', href: '/use-cases/competitive-positioning', desc: 'Week 1', disabled: true },
  ],
  'Research & Analysis': [
    { name: 'Investment Memo', href: '/use-cases/investment-memo', desc: 'Market, financial, legal synthesis' },
    { name: 'Literature Review', href: '/use-cases/literature-review', desc: 'Systematic evidence synthesis' },
    { name: 'Due Diligence', href: '/use-cases/due-diligence', desc: 'Week 1', disabled: true },
  ],
  'Legal & Compliance': [
    { name: 'NDA Triage at Scale', href: '/use-cases/nda-triage', desc: 'Contract review at volume' },
    { name: 'Regulatory Assessment', href: '/use-cases/regulatory-compliance', desc: 'Week 1', disabled: true },
  ],
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,5,7,0.85)] backdrop-blur-[12px] border-b border-[var(--wf-border-soft)] transition-nav">
        <div className="mx-auto flex items-center justify-between max-w-[1120px] px-6 h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 no-underline">
            <div className="flex items-center justify-center rounded-lg flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[var(--wf-primary)] to-[#4f46e5]">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-[1.125rem] text-[var(--wf-fg)] tracking-[-0.02em]">
              Workforce
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Use Cases Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 rounded-lg transition-micro py-2 px-3.5 text-[0.9375rem] font-medium text-[var(--wf-fg-muted)] hover:text-[var(--wf-fg)] bg-transparent border-0 cursor-pointer"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Use Cases
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-150${dropdownOpen ? ' rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`nav-dropdown absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[540px] bg-[#09090b] border border-[var(--wf-border)] rounded-[var(--wf-radius-xl)] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_4px_20px_rgba(0,0,0,0.4)] p-6 z-[100]${dropdownOpen ? ' is-open' : ''}`}
              >
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(useCasesDropdown).map(([category, items]) => (
                    <div key={category}>
                      <p className="text-[0.6875rem] font-semibold tracking-[0.07em] uppercase text-[var(--wf-fg-dim)] mb-2.5">
                        {category}
                      </p>
                      <ul className="list-none p-0 m-0 flex flex-col gap-0.5">
                        {items.map((item) => (
                          <li key={item.name}>
                            {item.disabled ? (
                              <span className="flex items-center gap-2 py-[7px] px-2.5 rounded-[var(--wf-radius-sm)] text-sm text-[#3a3a4a] cursor-default">
                                <span>{item.name}</span>
                                <span className="text-[0.6875rem] bg-[#1a1a24] text-[#4a4a6a] py-px px-1.5 rounded border border-[#2a2a3a]">
                                  Soon
                                </span>
                              </span>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setDropdownOpen(false)}
                                data-ga-audience-domain={CATEGORY_AUDIENCE[category]}
                                className="flex flex-col py-[7px] px-2.5 rounded-[var(--wf-radius-sm)] no-underline transition-micro hover:bg-white/[0.04]"
                              >
                                <span className="text-sm font-medium text-[var(--wf-fg)] leading-snug">
                                  {item.name}
                                </span>
                                <span className="text-xs text-[var(--wf-fg-dim)] leading-tight">
                                  {item.desc}
                                </span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-[18px] pt-3.5 border-t border-[var(--wf-border)]">
                  <Link
                    href="/use-cases"
                    onClick={() => setDropdownOpen(false)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--wf-primary)] no-underline transition-micro hover:text-[var(--wf-primary-hover)]"
                  >
                    Browse all use cases
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/trust">Trust</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://workforce-dev.rawaihub.com/login"
              className="text-[var(--wf-fg-muted)] text-[0.9375rem] font-medium no-underline py-2 px-3.5 transition-micro hover:text-[var(--wf-fg)]"
            >
              Sign in
            </a>
            <a
              href="https://workforce-dev.rawaihub.com/signup"
              data-ga-nav-cta
              data-ga-cta
              data-cta-label="Get Access"
              data-cta-stage="awareness"
              className="inline-flex items-center gap-1.5 bg-[var(--wf-primary-cta)] text-white text-[0.9375rem] font-semibold no-underline py-2.5 px-5 rounded-[var(--wf-radius-md)] transition-micro hover:bg-[var(--wf-primary-hover)]"
            >
              Get Access
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Animated hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`hamburger md:hidden flex flex-col gap-[5px] p-2 rounded-[var(--wf-radius-sm)] bg-transparent border-0 cursor-pointer text-[var(--wf-fg-muted)] hover:text-[var(--wf-fg)] transition-micro${mobileOpen ? ' is-open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-bar hamburger-bar--top" />
            <span className="hamburger-bar hamburger-bar--mid" />
            <span className="hamburger-bar hamburger-bar--bottom" />
          </button>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`mobile-menu-backdrop fixed inset-0 z-40 bg-black/60 md:hidden${mobileOpen ? ' is-open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Full-screen mobile menu overlay */}
      <div
        className={`mobile-menu fixed top-16 left-0 right-0 bottom-0 z-40 bg-[rgba(5,5,7,0.98)] overflow-y-auto md:hidden${mobileOpen ? ' is-open' : ''}`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">

          {/* Use Cases — accordion */}
          <div className={`accordion-item${mobileUseCasesOpen ? ' is-open' : ''}`}>
            <button
              onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
              className="flex items-center justify-between w-full py-3 px-3 rounded-[var(--wf-radius-sm)] text-[0.9375rem] font-medium text-[var(--wf-fg-muted)] bg-transparent border-0 cursor-pointer transition-micro hover:text-[var(--wf-fg)] hover:bg-white/[0.04]"
            >
              Use Cases
              <svg className="accordion-chevron w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="accordion-content pl-3">
              {Object.entries(useCasesDropdown).map(([category, items]) => (
                <div key={category} className="mb-3">
                  <p className="text-xs text-[var(--wf-fg-dim)] px-3 mb-1">{category}</p>
                  {items.filter((i) => !i.disabled).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 px-3 rounded-[var(--wf-radius-sm)] text-[0.9375rem] text-[var(--wf-fg-muted)] no-underline transition-micro hover:text-[var(--wf-fg)] hover:bg-white/[0.04]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/use-cases"
                onClick={() => setMobileOpen(false)}
                className="block py-2 px-3 text-sm text-[var(--wf-primary)] no-underline"
              >
                Browse all use cases →
              </Link>
            </div>
          </div>

          {/* Primary nav links */}
          <div className="border-t border-[var(--wf-border-soft)] pt-2 mt-1 flex flex-col gap-0.5">
            {[
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/trust', label: 'Trust' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-3 rounded-[var(--wf-radius-sm)] text-[0.9375rem] font-medium text-[var(--wf-fg-muted)] no-underline transition-micro hover:text-[var(--wf-fg)] hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="border-t border-[var(--wf-border-soft)] pt-4 mt-2 flex gap-3">
            <a
              href="https://workforce-dev.rawaihub.com/login"
              className="flex-1 text-center py-3 rounded-[var(--wf-radius-md)] border border-[var(--wf-border-softer)] text-[0.9375rem] font-medium text-[var(--wf-fg-muted)] no-underline transition-micro hover:text-[var(--wf-fg)] hover:border-[var(--wf-border)]"
            >
              Sign in
            </a>
            <a
              href="https://workforce-dev.rawaihub.com/signup"
              data-ga-nav-cta
              data-ga-cta
              data-cta-label="Get Access"
              data-cta-stage="awareness"
              className="flex-1 text-center py-3 rounded-[var(--wf-radius-md)] bg-[var(--wf-primary-cta)] text-[0.9375rem] font-semibold text-white no-underline transition-micro hover:bg-[var(--wf-primary-hover)]"
            >
              Get Access
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="py-2 px-3.5 text-[0.9375rem] font-medium text-[var(--wf-fg-muted)] no-underline rounded-[var(--wf-radius-sm)] transition-micro hover:text-[var(--wf-fg)] hover:bg-white/[0.04]"
    >
      {children}
    </Link>
  )
}
