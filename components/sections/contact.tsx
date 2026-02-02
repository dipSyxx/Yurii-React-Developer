'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send, FileText, ArrowUpRight, Copy, Check, Heart } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/magnetic-button'
import Link from 'next/link'

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const links = [
    { label: 'GitHub', href: profile.links.github, icon: Github },
    { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin },
    { label: 'Telegram', href: profile.links.telegram, icon: Send },
  ]

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SectionWrapper
      id="contact"
      className="bg-muted/30"
      title="Get in Touch"
      subtitle="I'm always open to discussing new projects, creative ideas, or opportunities."
    >
      <div ref={ref} className="max-w-2xl mx-auto text-center space-y-10">
        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="space-y-4"
        >
          <MagneticButton strength={0.2} className="inline-block">
            <Button asChild size="lg" className="group text-lg px-8 py-7 rounded-2xl">
              <motion.a 
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="mr-3 h-5 w-5" />
                {profile.email}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.span>
              </motion.a>
            </Button>
          </MagneticButton>
          
          <motion.button
            onClick={copyEmail}
            className="flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                Copied to clipboard!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Click to copy email
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {links.map(({ label, href, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <MagneticButton strength={0.25}>
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
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <MagneticButton strength={0.2}>
            <Button variant="outline" asChild className="rounded-xl bg-transparent">
              <motion.a 
                href={profile.links.cv} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </motion.a>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Button variant="outline" asChild className="rounded-xl bg-transparent">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/application">
                  View Cover Letter
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.span>
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 border-t border-border space-y-4"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Designed and built with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>
            using Next.js, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          
          {/* Animated decorative line */}
          <motion.div
            className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end"
            animate={{
              width: ['5rem', '8rem', '5rem'],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
