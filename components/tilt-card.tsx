'use client'

import React from "react"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: ReactNode
  className?: string
  glareEnabled?: boolean
  tiltAmount?: number
}

export function TiltCard({ 
  children, 
  className, 
  glareEnabled = true,
  tiltAmount = 10
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const springConfig = { damping: 20, stiffness: 300 }
  const smoothX = useSpring(x, springConfig)
  const smoothY = useSpring(y, springConfig)
  
  const rotateX = useTransform(smoothY, [0, 1], [tiltAmount, -tiltAmount])
  const rotateY = useTransform(smoothX, [0, 1], [-tiltAmount, tiltAmount])
  const glareX = useTransform(smoothX, [0, 1], ['-100%', '200%'])
  const glareY = useTransform(smoothY, [0, 1], ['-100%', '200%'])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const xVal = (e.clientX - rect.left) / rect.width
    const yVal = (e.clientY - rect.top) / rect.height
    x.set(xVal)
    y.set(yVal)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      className={cn('relative', className)}
    >
      {children}
      {glareEnabled && (
        <motion.div 
          className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden rounded-[inherit]"
          style={{ transform: 'translateZ(1px)' }}
        >
          <motion.div
            className="absolute w-[200%] h-[200%] bg-gradient-radial from-white/20 via-white/5 to-transparent"
            style={{ 
              left: glareX, 
              top: glareY,
              transform: 'translate(-50%, -50%)'
            }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}
