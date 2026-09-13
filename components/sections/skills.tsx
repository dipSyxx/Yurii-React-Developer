import { ArrowUpRight, Boxes, Gauge, PanelsTopLeft, Workflow } from 'lucide-react'
import { InteractiveSurface } from '@/components/interactive-surface'
import { SectionWrapper } from '@/components/section-wrapper'
import { StackExplorer } from '@/components/stack-explorer'

const capabilities = [
  {
    icon: PanelsTopLeft,
    code: 'UI.SYSTEM',
    focus: 'CORE FRONTEND',
    mark: 'UI',
    title: 'Interface systems',
    description: 'Responsive product surfaces, reusable components, accessible states, and frontend architecture built to evolve.',
    details: ['Component systems', 'Responsive states', 'Accessibility'],
    outcome: 'FROM TOKEN TO INTERACTION',
  },
  {
    icon: Workflow,
    code: 'FLOW.STATE',
    focus: 'PRODUCT LOGIC',
    mark: 'FX',
    title: 'Product workflows',
    description: 'Complex forms, role-based tools, dashboards, mobile flows, and the edge cases around real user actions.',
    details: ['Role-based tools', 'Forms & validation', 'Edge cases'],
    outcome: 'FROM INTENT TO COMPLETION',
  },
  {
    icon: Boxes,
    code: 'SHIP.SUPPORT',
    focus: 'FEATURE BOUNDARY',
    mark: 'DX',
    title: 'Delivery & maintenance',
    description: 'Typed APIs, relational data, authentication, integrations, testing, and production debugging across the feature boundary.',
    details: ['Typed APIs', 'Relational data', 'Production support'],
    outcome: 'FROM MERGE TO MAINTENANCE',
  },
  {
    icon: Gauge,
    code: 'SPEED.CLARITY',
    focus: 'QUALITY LAYER',
    mark: 'UX',
    title: 'UX & performance',
    description: 'Clear information hierarchy, meaningful motion, dependable loading states, and practical performance work.',
    details: ['Information hierarchy', 'Loading states', 'Performance'],
    outcome: 'FROM SIGNAL TO RESPONSE',
  },
]

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      index="04"
      label="Capabilities & stack"
      title="What I do. What I build with."
      subtitle="Frontend engineering is my core. I also work across APIs, data, authentication, delivery, and production support."
    >
      <div className="ref-capability-grid" data-reveal="viewport">
        {capabilities.map((capability) => {
          const Icon = capability.icon
          return (
            <InteractiveSurface as="article" key={capability.title} className="ref-capability-card" maxShift={8} maxTilt={0.8}>
              <span className="ref-capability-watermark" aria-hidden="true">{capability.mark}</span>

              <header className="ref-capability-card-head">
                <span>{capability.code}</span>
                <span className="ref-capability-status"><i />{capability.focus}</span>
              </header>

              <div className="ref-capability-route" aria-hidden="true">
                <span className="ref-capability-node"><Icon size={22} /></span>
                <span className="ref-capability-path"><i /><i /><i /></span>
                <span className="ref-capability-endpoint" />
              </div>

              <div className="ref-capability-copy">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul aria-label={`${capability.title} focus areas`}>
                  {capability.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>

              <footer>
                <span>{capability.outcome}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </footer>
            </InteractiveSurface>
          )
        })}
      </div>
      <StackExplorer />
    </SectionWrapper>
  )
}
