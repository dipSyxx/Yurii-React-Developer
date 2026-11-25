import { ArrowUpRight, Boxes, Gauge, PanelsTopLeft, Workflow } from 'lucide-react'
import { InteractiveSurface } from '@/components/interactive-surface'
import { SectionWrapper } from '@/components/section-wrapper'
import { StackExplorer } from '@/components/stack-explorer'

const capabilities = [
  {
    icon: PanelsTopLeft,
    mark: 'UI',
    title: 'Frontend Engineering',
    description: 'Build and maintain React and Next.js interfaces for web products.',
    details: ['Reusable components', 'Responsive layouts', 'Accessibility'],
  },
  {
    icon: Workflow,
    mark: 'FX',
    title: 'Full-Stack Development',
    description: 'Build web and mobile features from requirements through release.',
    details: ['Forms & validation', 'Dashboards', 'Testing'],
  },
  {
    icon: Boxes,
    mark: 'DX',
    title: 'Backend & Integrations',
    description: 'Design typed APIs, data models, and authentication for production workflows.',
    details: ['Role-based access', 'Relational data', 'Third-party APIs'],
  },
  {
    icon: Gauge,
    mark: 'UX',
    title: 'Performance & UX',
    description: 'Keep data-heavy interfaces responsive and loading states clear.',
    details: ['Row virtualization', 'Batching', 'Client-side persistence'],
  },
]

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      index="04"
      label="Capabilities & stack"
      title="Engineering & technologies"
      subtitle="Frontend systems, backend services, and performance optimization."
    >
      <div className="ref-capability-grid" data-reveal="viewport">
        {capabilities.map((capability) => {
          const Icon = capability.icon
          return (
            <InteractiveSurface as="article" key={capability.title} className="ref-capability-card" maxShift={8} maxTilt={0.8}>
              <span className="ref-capability-watermark" aria-hidden="true">{capability.mark}</span>

              <div className="ref-capability-card-head" aria-hidden="true">
                <i className="ref-capability-status" />
              </div>

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
