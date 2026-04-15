import Link from 'next/link'

const footerLinks = {
  Product: [
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Trust & Security', href: '/trust' },
  ],
  'Use Cases': [
    { name: 'SaaS MVP', href: '/use-cases/saas-mvp' },
    { name: 'Product Launch GTM', href: '/use-cases/product-launch-gtm' },
    { name: 'Investment Memo', href: '/use-cases/investment-memo' },
    { name: 'NDA Triage', href: '/use-cases/nda-triage' },
    { name: 'Literature Review', href: '/use-cases/literature-review' },
  ],
  Company: [
    { name: 'Contact', href: 'mailto:hello@rawaihub.com' },
    { name: 'Trust & Security', href: '/trust' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--wf-border-soft)] bg-[var(--wf-bg)]">
      <div className="mx-auto max-w-[1120px] px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 no-underline">
              <div className="flex items-center justify-center rounded-lg flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[var(--wf-primary)] to-[#4f46e5]">
                <span className="text-white font-bold text-xs">W</span>
              </div>
              <span className="font-bold text-base text-[var(--wf-fg)] tracking-[-0.02em]">
                Workforce
              </span>
            </Link>
            <p className="text-sm text-[var(--wf-fg-dim)] leading-relaxed max-w-[180px]">
              Brief it. It staffs. It executes. It delivers.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-[0.6875rem] font-semibold tracking-[0.07em] uppercase text-[var(--wf-fg-dim)] mb-4">
                {section}
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--wf-fg-muted)] no-underline transition-micro hover:text-[var(--wf-fg)]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-6 border-t border-[var(--wf-border-soft)]">
          <p className="text-[0.8125rem] text-[var(--wf-fg-dim)]">
            © {new Date().getFullYear()} Workforce. All rights reserved.
          </p>
          <p className="text-[0.8125rem] text-[var(--wf-fg-dim)]">
            AI analysis only — not professional advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
