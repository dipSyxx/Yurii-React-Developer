'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  className?: string
  children: React.ReactNode
  title?: string
  subtitle?: string
}

export function SectionWrapper({
  id,
  className,
  children,
  title,
  subtitle,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isTitleInView = useInView(titleRef, { once: true, margin: '-50px' })

  return (
    <section
      id={id}
      ref={ref}
      className={cn('py-20 sm:py-28 relative overflow-hidden', className)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div ref={titleRef} className="mb-14 text-center relative">
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
                  {title}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-full"
                    initial={{ width: 0 }}
                    animate={isTitleInView ? { width: '100%' } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                  />
                </h2>
              </motion.div>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mt-4"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
