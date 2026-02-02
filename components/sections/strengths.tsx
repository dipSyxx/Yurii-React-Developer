'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Eye, Lightbulb, MessageSquare, Zap, CheckCircle2 } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'
import { TiltCard } from '@/components/tilt-card'

const iconMap: Record<string, React.ElementType> = {
  'Attention to detail': Eye,
  'Performance mindset': Zap,
  Ownership: CheckCircle2,
  Adaptability: Lightbulb,
  Communication: MessageSquare,
}

export function StrengthsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <SectionWrapper
      id="strengths"
      className="bg-muted/30"
      title="Strengths"
      subtitle="Core competencies that I bring to every project."
    >
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {profile.strengths.map((strength, index) => {
          const Icon = iconMap[strength.title] || Lightbulb
          return (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TiltCard 
                className="relative h-full p-6 rounded-2xl bg-card border border-border overflow-hidden group cursor-default"
                tiltAmount={6}
              >
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-gradient-start/10 via-gradient-mid/5 to-gradient-end/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Number indicator */}
                <motion.div
                  className="absolute top-4 right-4 text-6xl font-bold text-muted/10 select-none"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    opacity: hoveredIndex === index ? 0.15 : 0.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 mb-4"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:gradient-text transition-all">
                    {strength.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {strength.description}
                  </p>
                  
                  {/* Verified badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1 text-xs text-primary"
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    Core strength
                  </motion.div>
                </div>
                
                {/* Bottom gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </TiltCard>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
