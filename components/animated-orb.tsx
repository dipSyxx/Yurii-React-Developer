'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function AnimatedOrb() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)
  
  const rotateX = useTransform(smoothY, [0, 1], [20, -20])
  const rotateY = useTransform(smoothX, [0, 1], [-20, 20])
  const glowX = useTransform(smoothX, [0, 1], ['-20%', '20%'])
  const glowY = useTransform(smoothY, [0, 1], ['-20%', '20%'])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x)
      mouseY.set(y)
    }
    
    const container = containerRef.current
    container?.addEventListener('mousemove', handleMouseMove)
    return () => container?.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center perspective-[1000px]"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-[-30%] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--gradient-start), var(--gradient-end), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Main orb */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
            boxShadow: '0 0 80px 30px oklch(0.6 0.2 280 / 0.25), inset 0 0 80px 15px oklch(0.9 0.1 280 / 0.4)',
          }}
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Inner highlight */}
        <motion.div
          className="absolute inset-6 rounded-full opacity-70"
          style={{
            background: 'radial-gradient(circle at 30% 30%, oklch(0.98 0.02 280 / 0.9), transparent 50%)',
            x: glowX,
            y: glowY,
          }}
        />
        
        {/* Surface texture */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 70%, transparent 30%, oklch(0.2 0.1 280 / 0.3) 100%)',
          }}
        />
        
        {/* Floating particles - inner */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`inner-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`,
              top: `${30 + Math.sin(i * Math.PI / 4) * 20}%`,
              left: `${30 + Math.cos(i * Math.PI / 4) * 20}%`,
              boxShadow: '0 0 10px 2px var(--gradient-start)',
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.25,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Orbiting ring 1 - horizontal */}
        <motion.div
          className="absolute inset-[-25%] rounded-full border-2 border-primary/20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))',
              boxShadow: '0 0 15px 5px var(--gradient-start)',
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Orbiting ring 2 - tilted */}
        <motion.div
          className="absolute inset-[-15%] rounded-full border border-accent/15"
          style={{ transform: 'rotateX(70deg) rotateZ(30deg)' }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--gradient-mid), var(--gradient-end))',
              boxShadow: '0 0 10px 3px var(--gradient-mid)',
            }}
          />
        </motion.div>
        
        {/* Orbiting ring 3 - opposite tilt */}
        <motion.div
          className="absolute inset-[-8%] rounded-full border border-primary/10"
          style={{ transform: 'rotateX(60deg) rotateY(45deg)' }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{
              background: 'var(--gradient-end)',
              boxShadow: '0 0 8px 2px var(--gradient-end)',
            }}
          />
        </motion.div>
        
        {/* Energy pulses */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: 'easeOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
