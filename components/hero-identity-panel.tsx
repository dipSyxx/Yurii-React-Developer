'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Github, Linkedin, MapPin } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { profile } from '@/src/content/profile'

const portrait = {
  src: '/myPhoto/myphoto.webp',
  sizes: '(max-width: 768px) 88vw, 34vw',
  fill: true,
}

export function HeroIdentityPanel() {
  const panelRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-18, 18])

  return (
    <figure ref={panelRef} className="ref-identity-panel" data-scroll-drawing="portrait">
      <div className="ref-window-bar" aria-hidden="true">
        <span className="ref-window-dots"><i /><i /><i /></span>
        <span>YURII.PROFILE</span>
        <span>01</span>
      </div>

      <div className="ref-portrait-stage">
        <div className="ref-portrait-aperture">
          <motion.div className="ref-portrait-motion" style={reduceMotion ? undefined : { y: imageY }}>
            <Image
              {...portrait}
              alt="Portrait of Yurii Linetskyi"
              priority
            />
            <div className="ref-portrait-print" aria-hidden="true">
              <div className="ref-portrait-halftone">
                <Image {...portrait} alt="" loading="eager" />
              </div>
            </div>
          </motion.div>
          <span className="ref-portrait-grid" aria-hidden="true" />
        </div>
        <span className="ref-portrait-marks" aria-hidden="true" />
        <p aria-hidden="true">FRONTEND / PRODUCT / SYSTEMS</p>
      </div>

      <figcaption>
        <span><MapPin size={13} aria-hidden="true" /> {profile.location}</span>
        <span>LET&apos;S CONNECT /</span>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={14} aria-hidden="true" /></a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={14} aria-hidden="true" /></a>
      </figcaption>
    </figure>
  )
}
