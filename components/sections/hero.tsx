import type { CSSProperties } from 'react'
import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react'
import { HeroIdentityPanel } from '@/components/hero-identity-panel'
import { profile } from '@/src/content/profile'

const facts = [
  { value: '3 years', label: 'Commercial experience' },
  { value: '150K–300K', label: 'Records in a UDEX workflow' },
  { value: 'iOS + Android', label: 'Published apps' },
]

export function HeroSection() {
  return (
    <section id="top" className="ref-hero" aria-labelledby="hero-title">
      <span className="ref-grid-plane" aria-hidden="true" />
      <div className="site-shell ref-hero-shell">
        <div className="ref-hero-copy">
          <p className="ref-hero-kicker" style={{ '--delay': '80ms' } as CSSProperties}>
            <span>FRONTEND / FULL-STACK DEVELOPER</span>
            <i aria-hidden="true" />
            NORWAY
          </p>

          <h1 id="hero-title" className="ref-display-title" aria-label={`${profile.name}, ${profile.title}`}>
            <span className="ref-display-line" data-copy="YURII">YURII</span>
            <span className="ref-display-line" data-copy="LINETSKYI">LINETSKYI</span>
          </h1>

          <p className="ref-hero-description">{profile.tagline}</p>

          <div className="ref-hero-actions">
            <a className="ref-primary-action" href="#work">
              View projects <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a className="ref-secondary-action" href={profile.links.cv} target="_blank" rel="noreferrer">
              <FileText size={15} aria-hidden="true" /> View CV <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        <HeroIdentityPanel />

        <dl className="ref-hero-facts">
          {facts.map((fact, index) => (
            <div key={fact.label}>
              <dt><span>{String(index + 1).padStart(2, '0')}</span>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
