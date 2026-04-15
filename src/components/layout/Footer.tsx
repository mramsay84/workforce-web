import Link from 'next/link'

const footerLinks = {
  Product: [
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Pricing', href: '/pricing' },
  ],
  Solutions: [
    { name: 'For Engineering Teams', href: '/solutions/engineering' },
    { name: 'For Marketing Teams', href: '/solutions/marketing' },
    { name: 'For Legal Teams', href: '/solutions/legal' },
    { name: 'For Strategy & Finance', href: '/solutions/strategy' },
    { name: 'For Research Teams', href: '/solutions/research' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Contact', href: 'mailto:hello@rawaihub.com' },
  ],
  'Legal & Trust': [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Trust & Security', href: '/trust' },
  ],
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--wf-border-soft)',
        background: 'var(--wf-bg)',
        marginTop: '0',
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: '1200px', padding: '64px 24px 48px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4" style={{ textDecoration: 'none' }}>
              <div
                className="flex items-center justify-center rounded-lg flex-shrink-0"
                style={{
                  width: '28px',
                  height: '28px',
                  background: 'linear-gradient(135deg, var(--wf-primary) 0%, #4f46e5 100%)',
                }}
              >
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '12px', fontFamily: 'var(--wf-font-display)' }}>W</span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--wf-font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--wf-fg)',
                  letterSpacing: '-0.02em',
                }}
              >
                Workforce
              </span>
            </Link>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--wf-fg-dim)',
                lineHeight: 1.6,
                maxWidth: '180px',
              }}
            >
              Brief it. It staffs. It executes. It delivers.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--wf-fg-dim)',
                  marginBottom: '16px',
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--wf-fg-muted)',
                        textDecoration: 'none',
                        transition: 'color 150ms ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid var(--wf-border-soft)',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'var(--wf-fg-dim)' }}>
            © {new Date().getFullYear()} Workforce. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--wf-fg-dim)' }}>
            AI analysis only — not professional advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
