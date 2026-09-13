'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
  index?: string
  onToggle?: () => void
}

export function ThemeToggle({ className, showLabel = false, index, onToggle }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = mounted && resolvedTheme === 'dark'
  const label = mounted ? (isDark ? 'Light mode' : 'Dark mode') : 'Color theme'
  const Icon = mounted ? (isDark ? Sun : Moon) : SunMoon

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
    onToggle?.()
  }

  return (
    <button
      className={className}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={label}
      onClick={toggleTheme}
    >
      {index ? <span className="ref-theme-index" aria-hidden="true">{index}</span> : null}
      {showLabel ? <strong>{label}</strong> : null}
      <Icon size={17} aria-hidden="true" />
    </button>
  )
}
