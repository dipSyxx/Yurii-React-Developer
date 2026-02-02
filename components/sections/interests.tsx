'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Sparkles, Code2, Box, Users, ArrowUpRight } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'
import { TiltCard } from '@/components/tilt-card'

const iconMap: Record<string, React.ElementType> = {
  'UI engineering': Code2,
  Performance: Sparkles,
  'Modern frontend stack': Box,
  'State management': Users,
  'API integrations': Sparkles,
}

const colorMap: Record<string, string> = {
  'UI engineering': 'from-blue-500 to-cyan-500',
  Performance: 'from-amber-500 to-orange-500',
  'Modern frontend stack': 'from-purple-500 to-pink-500',
  'State management': 'from-emerald-500 to-green-500',
  'API integrations': 'from-indigo-500 to-sky-500',
}

export function InterestsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <SectionWrapper
      id="interests"
      title="Interests"
      subtitle="Things that spark my curiosity outside of work."
    >
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.interests.map((interest, index) => {
          const Icon = iconMap[interest.title] || Sparkles
          const gradient = colorMap[interest.title] || 'from-primary to-accent'
          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TiltCard 
                className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 spotlight cursor-default group"
                tiltAmount={8}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white`}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </motion.div>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:gradient-text transition-all">
                  {interest.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
                
                {/* Animated underline */}
                <motion.div
                  className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${gradient}`}
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
