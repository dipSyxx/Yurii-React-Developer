'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileText, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedOrb } from '@/components/animated-orb'
import { WordReveal } from '@/components/text-reveal'
import { profile } from '@/src/content/profile'
import { useRef } from 'react'
import { MagneticButton } from '@/components/magnetic-button' // Import MagneticButton

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-start/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-end/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-gradient-mid/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-foreground"
                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                </motion.span>
                Available for opportunities
              </motion.span>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
                <span className="text-balance block">Hi, I'm </span>
                <span className="gradient-text text-balance block">
                  <WordReveal delay={0.8}>{profile.name}</WordReveal>
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-3 font-light"
            >
              {profile.title}
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 text-pretty leading-relaxed"
            >
              {profile.tagline}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <MagneticButton strength={0.3}>
                <Button asChild size="lg" className="group text-base px-6 py-6 rounded-xl">
                  <a href="#contact">
                    Get in touch
                    <motion.span
                      className="ml-2"
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </motion.span>
                  </a>
                </Button>
              </MagneticButton>
              
              <MagneticButton strength={0.3}>
                <Button variant="outline" size="lg" asChild className="text-base px-6 py-6 rounded-xl group bg-transparent">
                  <a href={profile.links.cv} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View CV
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-10 justify-center lg:justify-start"
            >
              {[
                { href: profile.links.github, icon: Github, label: 'GitHub' },
                { href: profile.links.linkedin, icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <MagneticButton key={label} strength={0.25}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-200 group block"
                    aria-label={label}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                </MagneticButton>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative h-80 lg:h-[500px]"
          >
            <AnimatedOrb />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
