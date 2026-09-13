'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

export function PortfolioExperience({
  children,
  showRail = true,
}: {
  children: ReactNode
  showRail?: boolean
}) {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.2,
  })
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (value) => 1 - Math.pow(1 - value, 4),
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -96 },
    })

    let frame = 0
    const animate = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.02 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((target): target is HTMLElement => Boolean(target))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0, 0.1, 0.35] },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div className="page-progress" style={{ scaleX: progress }} aria-hidden="true" />
      {showRail ? <nav className="section-rail" aria-label="Page sections">
        <span className="section-rail-track" aria-hidden="true">
          <motion.span style={{ scaleY: progress }} />
        </span>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? 'is-active' : undefined}
            aria-current={activeSection === section.id ? 'location' : undefined}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{section.label}</strong>
          </a>
        ))}
      </nav> : null}
      {children}
    </>
  )
}
