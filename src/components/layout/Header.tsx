'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(5, 5, 7, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--wf-border-soft)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: '1200px', padding: '0 24px', height: '64px' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="flex items-center justify-center rounded-lg flex-shrink-0"
            style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--wf-primary) 0%, #4f46e5 100%)',
            }}
          >
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '14px', fontFamily: 'var(--wf-font-display)' }}>W</span>
          </div>
          <span
            style={{
              fontFamily: 'var(--wf-font-display)',
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--wf-fg)',
              letterSpacing: '-0.02em',
            }}
          >
            Workforce
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Use Cases Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 rounded-lg transition-colors"
              style={{
                padding: '8px 14px',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--wf-fg-muted)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--wf-font-body)',
              }}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Use Cases
              <svg
                style={{
                  width: '14px',
                  height: '14px',
                  transition: 'transform 150ms ease',
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute"
                style={{
                  top: 'calc(100% + 8px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '540px',
                  background: '#09090b',
                  border: '1px solid var(--wf-border)',
                  borderRadius: 'var(--wf-radius-xl)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)',
                  padding: '24px',
                  zIndex: 100,
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(useCasesDropdown).map(([category, items]) => (
                    <div key={category}>
                      <p
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          letterSpacing: '0.07em',
                          textTransform: 'uppercase',
                          color: 'var(--wf-fg-dim)',
                          marginBottom: '10px',
                        }}
                      >
                        {category}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {items.map((item) => (
                          <li key={item.name}>
                            {item.disabled ? (
                              <span
                                className="flex items-center gap-2"
                                style={{
                                  padding: '7px 10px',
                                  borderRadius: 'var(--wf-radius-sm)',
                                  fontSize: '0.875rem',
                                  color: '#3a3a4a',
                                  cursor: 'default',
                                }}
                              >
                                <span>{item.name}</span>
                                <span
                                  style={{
                                    fontSize: '0.6875rem',
                                    background: '#1a1a24',
                                    color: '#4a4a6a',
                                    padding: '1px 6px',
                                    borderRadius: '4px',
                                    border: '1px solid #2a2a3a',
                                  }}
                                >
                                  Soon
                                </span>
                              </span>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setDropdownOpen(false)}
                                className="flex flex-col"
                                style={{
                                  padding: '7px 10px',
                                  borderRadius: 'var(--wf-radius-sm)',
                                  textDecoration: 'none',
                                  transition: 'background 150ms ease',
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                                }}
                              >
                                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--wf-fg)', lineHeight: 1.4 }}>
                                  {item.name}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--wf-fg-dim)', lineHeight: 1.3 }}>
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
                <div
                  style={{
                    marginTop: '18px',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--wf-border)',
                  }}
                >
                  <Link
                    href="/use-cases"
                    onClick={() => setDropdownOpen(false)}
                    className="inline-flex items-center gap-1.5"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--wf-primary)',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                  >
                    Browse all use cases
                    <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink href="/how-it-works">How It Works</NavLink>
          <NavLink href="/capabilities">Capabilities</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://workforce-dev.rawaihub.com/login"
            style={{
              color: 'var(--wf-fg-muted)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
              padding: '8px 14px',
              transition: 'color 150ms ease',
            }}
          >
            Sign in
          </a>
          <a
            href="https://workforce-dev.rawaihub.com/signup"
            className="inline-flex items-center gap-1.5"
            style={{
              backgroundColor: 'var(--wf-primary)',
              color: '#fff',
              fontSize: '0.9375rem',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: 'var(--wf-radius-md)',
              transition: 'background-color 150ms ease',
            }}
          >
            Get Access
            <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{
            padding: '8px',
            borderRadius: 'var(--wf-radius-sm)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--wf-fg-muted)',
          }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg style={{ width: '22px', height: '22px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg style={{ width: '22px', height: '22px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: '1px solid var(--wf-border-soft)',
            padding: '16px 24px 24px',
            background: 'rgba(5,5,7,0.97)',
          }}
        >
          <div style={{ marginBottom: '16px' }}>
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'var(--wf-fg-dim)',
                marginBottom: '10px',
                padding: '0 4px',
              }}
            >
              Use Cases
            </p>
            {Object.entries(useCasesDropdown).map(([category, items]) => (
              <div key={category} style={{ marginBottom: '12px' }}>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--wf-fg-dim)',
                    padding: '0 4px',
                    marginBottom: '4px',
                  }}
                >
                  {category}
                </p>
                {items.filter((i) => !i.disabled).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      padding: '8px 12px',
                      borderRadius: 'var(--wf-radius-sm)',
                      fontSize: '0.9375rem',
                      color: 'var(--wf-fg-muted)',
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/use-cases"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '8px 12px',
                fontSize: '0.875rem',
                color: 'var(--wf-primary)',
                textDecoration: 'none',
              }}
            >
              Browse all use cases →
            </Link>
          </div>

          <div
            style={{
              borderTop: '1px solid var(--wf-border-soft)',
              paddingTop: '16px',
              marginBottom: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {[
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/capabilities', label: 'Capabilities' },
              { href: '/pricing', label: 'Pricing' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '10px 12px',
                  borderRadius: 'var(--wf-radius-sm)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--wf-fg-muted)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            style={{
              borderTop: '1px solid var(--wf-border-soft)',
              paddingTop: '16px',
              display: 'flex',
              gap: '12px',
            }}
          >
            <a
              href="https://workforce-dev.rawaihub.com/login"
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '12px',
                borderRadius: 'var(--wf-radius-md)',
                border: '1px solid var(--wf-border-softer)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--wf-fg-muted)',
                textDecoration: 'none',
              }}
            >
              Sign in
            </a>
            <a
              href="https://workforce-dev.rawaihub.com/signup"
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '12px',
                borderRadius: 'var(--wf-radius-md)',
                background: 'var(--wf-primary)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Get Access
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        padding: '8px 14px',
        fontSize: '0.9375rem',
        fontWeight: 500,
        color: 'var(--wf-fg-muted)',
        textDecoration: 'none',
        borderRadius: 'var(--wf-radius-sm)',
        transition: 'color 150ms ease',
      }}
    >
      {children}
    </Link>
  )
}
