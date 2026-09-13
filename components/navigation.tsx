'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Braces, Github, Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { profile } from '@/src/content/profile'

const navigationItems = [
  { id: 'top', href: '/#top', label: 'Home' },
  { id: 'about', href: '/#about', label: 'About' },
  { id: 'work', href: '/#work', label: 'Projects' },
  { id: 'experience', href: '/#experience', label: 'Experience' },
  { id: 'skills', href: '/#skills', label: 'Skills' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('top')

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  useEffect(() => {
    const targets = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((target): target is HTMLElement => Boolean(target))

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.15, 0.45] },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="ref-header">
      <div className="site-shell ref-header-inner">
        <Link className="ref-brand" href="/" aria-label={`${profile.name}, home`}>
          <span className="ref-brand-mark" aria-hidden="true"><Braces size={18} /></span>
          <span><strong>YL/DEV</strong><small>PORTFOLIO</small></span>
        </Link>

        <nav className="ref-desktop-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={activeId === item.id ? 'is-active' : undefined}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              <i aria-hidden="true" /> {item.label}
            </Link>
          ))}
        </nav>

        <div className="ref-header-actions">
          <ThemeToggle className="ref-icon-link ref-theme-toggle" />
          <a className="ref-icon-link" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={16} aria-hidden="true" />
          </a>
          <a className="ref-talk-link" href={`mailto:${profile.email}`}>
            Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <button
          className="ref-menu-trigger"
          type="button"
          aria-expanded={isOpen}
          aria-controls="ref-mobile-navigation"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>{isOpen ? 'Close' : 'Menu'}</span>
          {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <nav id="ref-mobile-navigation" className="ref-mobile-nav" aria-label="Mobile navigation">
          <div className="site-shell">
            {navigationItems.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.label}</strong>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            ))}
            <a href={`mailto:${profile.email}`} onClick={closeMenu}>
              <span>06</span><strong>Contact</strong><ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <ThemeToggle className="ref-mobile-theme-toggle" showLabel index="07" onToggle={closeMenu} />
          </div>
        </nav>
      ) : null}
    </header>
  )
}
