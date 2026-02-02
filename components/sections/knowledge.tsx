'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'
import { Badge } from '@/components/ui/badge'

export function KnowledgeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper
      id="knowledge"
      title="Learned Knowledge"
      subtitle="Areas of expertise I've developed through study and practice."
    >
      <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {profile.learnedKnowledge.map((item, index) => (
          <motion.div
            key={item.area}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border spotlight"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100
              e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
              e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
            }}
          >
            <h3 className="font-semibold text-lg mb-4 gradient-text">{item.area}</h3>
            <div className="flex flex-wrap gap-2">
              {item.topics.map((topic, topicIndex) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + topicIndex * 0.05 }}
                >
                  <Badge variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
