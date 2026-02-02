'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, ExternalLink } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper
      id="experience"
      className="bg-muted/30"
      title="Experience"
      subtitle="Where I've worked and what I delivered."
    >
      <div ref={ref} className="space-y-6 max-w-4xl mx-auto">
        {profile.experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="p-6 rounded-2xl bg-card border border-border spotlight"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100
              e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
              e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                {item.logo && (
                  <div className="h-12 w-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center overflow-hidden">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div>
                  {item.website ? (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.company}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  )}
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-xs text-muted-foreground">{item.type}</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>{item.period}</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
