import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  index?: string
  label?: string
  className?: string
  children: ReactNode
  title: string
  subtitle?: string
}

export function SectionWrapper({
  id,
  index = '00',
  label,
  className,
  children,
  title,
  subtitle,
}: SectionWrapperProps) {
  const titleId = `${id}-title`

  return (
    <section id={id} aria-labelledby={titleId} className={cn('ref-section', className)}>
      <div className="site-shell">
        <header className="ref-section-head" data-reveal>
          <div>
            <p><span>{index}</span>{label ?? title}</p>
            <h2 id={titleId}>{title}</h2>
          </div>
          {subtitle ? <p>{subtitle}</p> : null}
          <span aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  )
}
