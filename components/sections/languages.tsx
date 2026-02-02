'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'

export function LanguagesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper
      id="languages"
      title="Languages"
      subtitle="Languages I work with on a daily basis."
    >
      <div ref={ref} className="flex flex-wrap justify-center gap-4">
        {profile.languages.map((language, index) => (
          <motion.div
            key={language.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-full bg-card border border-border spotlight"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100
              e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
              e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
            }}
          >
            <div className="p-2 rounded-full bg-primary/10">
              <Globe className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">{language.name}</div>
              <div className="text-xs text-muted-foreground">{language.level}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
