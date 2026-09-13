'use client'

import { createElement, type CSSProperties, type HTMLAttributes, type PointerEvent, type ReactNode } from 'react'

const POINTER_EXIT_RESET_DELAY_MS = 300
const scheduledPointerResets = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>()

function cancelScheduledReset(surface: HTMLElement) {
  const timer = scheduledPointerResets.get(surface)
  if (timer === undefined) return
  clearTimeout(timer)
  scheduledPointerResets.delete(surface)
}

type SurfaceElement = 'article' | 'div' | 'li'

interface InteractiveSurfaceProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  as?: SurfaceElement
  children: ReactNode
  maxShift?: number
  maxTilt?: number
}

type InteractiveStyle = CSSProperties & {
  '--pointer-x'?: string
  '--pointer-y'?: string
  '--pointer-shift-x'?: string
  '--pointer-shift-y'?: string
  '--pointer-rotate-x'?: string
  '--pointer-rotate-y'?: string
}

export function InteractiveSurface({
  as = 'div',
  children,
  maxShift = 8,
  maxTilt = 1.5,
  style,
  ...props
}: InteractiveSurfaceProps) {
  const updatePointer = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return

    const surface = event.currentTarget
    cancelScheduledReset(surface)
    const bounds = surface.getBoundingClientRect()
    const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width))
    const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height))

    surface.style.setProperty('--pointer-x', `${x * 100}%`)
    surface.style.setProperty('--pointer-y', `${y * 100}%`)
    surface.style.setProperty('--pointer-shift-x', `${(x - 0.5) * maxShift}px`)
    surface.style.setProperty('--pointer-shift-y', `${(y - 0.5) * maxShift}px`)
    surface.style.setProperty('--pointer-rotate-x', `${(0.5 - y) * maxTilt}deg`)
    surface.style.setProperty('--pointer-rotate-y', `${(x - 0.5) * maxTilt}deg`)
    surface.dataset.pointerActive = 'true'
  }

  const resetPointer = (event: PointerEvent<HTMLElement>) => {
    const surface = event.currentTarget
    delete surface.dataset.pointerActive

    cancelScheduledReset(surface)
    const timer = setTimeout(() => {
      surface.style.setProperty('--pointer-x', '50%')
      surface.style.setProperty('--pointer-y', '50%')
      surface.style.setProperty('--pointer-shift-x', '0px')
      surface.style.setProperty('--pointer-shift-y', '0px')
      surface.style.setProperty('--pointer-rotate-x', '0deg')
      surface.style.setProperty('--pointer-rotate-y', '0deg')
      scheduledPointerResets.delete(surface)
    }, POINTER_EXIT_RESET_DELAY_MS)
    scheduledPointerResets.set(surface, timer)
  }

  const interactiveStyle: InteractiveStyle = {
    '--pointer-x': '50%',
    '--pointer-y': '50%',
    '--pointer-shift-x': '0px',
    '--pointer-shift-y': '0px',
    '--pointer-rotate-x': '0deg',
    '--pointer-rotate-y': '0deg',
    ...style,
  }

  return createElement(
    as,
    {
      ...props,
      style: interactiveStyle,
      onPointerMove: updatePointer,
      onPointerLeave: resetPointer,
    },
    children,
  )
}
