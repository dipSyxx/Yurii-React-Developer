'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'

export function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Learning journey and formal studies."
    >
      <div ref={ref} className="grid gap-6 max-w-4xl mx-auto">
        {profile.education.map((item, index) => (
          <motion.div
            key={`${item.school}-${item.degree}`}
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
              <div>
                <p className="text-sm text-muted-foreground">{item.school}</p>
                <h3 className="text-lg font-semibold">{item.degree}</h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>{item.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
