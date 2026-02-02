'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Target, ChevronRight, Rocket } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'

export function AmbitionsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const rectMapRef = useRef(new WeakMap<HTMLElement, DOMRect>())

  const updateSpotlight = (
    target: HTMLDivElement,
    clientX: number,
    clientY: number
  ) => {
    const storedRect = rectMapRef.current.get(target)
    const rect = storedRect ?? target.getBoundingClientRect()
    if (!storedRect) {
      rectMapRef.current.set(target, rect)
    }
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    target.style.setProperty('--mouse-x', `${x}%`)
    target.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <SectionWrapper
      id="ambitions"
      className="bg-muted/30"
      title="Ambitions"
      subtitle="Goals that drive my growth and keep me motivated."
    >
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {profile.ambitions.map((ambition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <div
                onMouseEnter={(e) => {
                  setHoveredIndex(index)
                  rectMapRef.current.set(
                    e.currentTarget,
                    e.currentTarget.getBoundingClientRect()
                  )
                  updateSpotlight(e.currentTarget, e.clientX, e.clientY)
                }}
                onMouseLeave={(e) => {
                  setHoveredIndex(null)
                  rectMapRef.current.delete(e.currentTarget)
                  e.currentTarget.style.setProperty('--mouse-x', '50%')
                  e.currentTarget.style.setProperty('--mouse-y', '50%')
                }}
                className="group relative flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 spotlight cursor-default overflow-hidden"
                onMouseMove={(e) => {
                  updateSpotlight(e.currentTarget, e.clientX, e.clientY)
                }}
              >
                {/* Progress indicator line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gradient-start to-gradient-end"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0 }}
                />
                
                <motion.div 
                  className="shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-mid"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Target className="h-4 w-4 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed">{ambition}</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10
                  }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 self-center"
                >
                  <ChevronRight className="h-5 w-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Motivational message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: profile.ambitions.length * 0.1 + 0.2 }}
          className="mt-8 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-sm text-muted-foreground">
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Rocket className="h-4 w-4 text-primary" />
            </motion.span>
            Always aiming higher
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
