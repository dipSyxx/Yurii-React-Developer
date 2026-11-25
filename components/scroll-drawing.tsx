'use client'

import { useEffect, useRef } from 'react'

type Point = { x: number; y: number }
type Waypoint = Point & { scroll: number }
type Stop = { element: HTMLElement; point: Point; rail: number }

const clamp = (value: number) => Math.min(1, Math.max(0, value))
const waypoint = (x: number, y: number, scroll = y): Waypoint => ({ x, y, scroll })

function measureDrawing(elements: HTMLElement[], width: number, scrollY: number) {
  const wide = width >= 1024
  const bounds = elements.map((element) => element.getBoundingClientRect())
  const gap = wide ? 26 : 8
  const leftRail = Math.max(7, Math.min(...bounds.map(({ left }) => left)) - gap)
  const rightRail = Math.min(width - 7, Math.max(...bounds.map(({ right }) => right)) + gap)

  const stops = elements.map((element, index): Stop => {
    const { left, right, top, bottom } = bounds[index]
    const leftSide = wide && [1, 3, 5].includes(index)
    const y = index === 0 ? bottom - 12 : index === elements.length - 1 ? bottom : top + 18
    return {
      element,
      point: { x: leftSide ? left : right, y: y + scrollY },
      rail: leftSide ? leftRail : rightRail,
    }
  })

  const points: Waypoint[] = []
  stops.forEach(({ element, point, rail }, index) => {
    const previous = stops[index - 1]
    const section = element.closest('section')

    if (previous && previous.rail !== rail && section) {
      // Cross between the gutters in the section's padding, above its heading.
      const top = section.getBoundingClientRect().top + scrollY
      const padding = Number.parseFloat(getComputedStyle(section).paddingTop)
      const crossingY = top + padding * 0.47
      const start = top + padding * 0.13
      const end = top + padding * 0.82
      const span = end - start
      const bevel = 14
      const direction = Math.sign(rail - previous.rail)
      points.push(
        waypoint(previous.rail, crossingY - bevel, start),
        waypoint(previous.rail + direction * bevel, crossingY, start + span * 0.18),
        waypoint(rail - direction * bevel, crossingY, start + span * 0.82),
        waypoint(rail, crossingY + bevel, end),
      )
    }

    if (index > 0) points.push(waypoint(rail, point.y - 14))
    points.push(waypoint(point.x, point.y))
    if (index < stops.length - 1) points.push(waypoint(rail, point.y + 14))
  })

  const contact = elements.at(-1)?.closest('section')
  const contactY = contact ? contact.getBoundingClientRect().top + scrollY : Infinity
  return { points, stops, contactY }
}

function drawTrail(context: CanvasRenderingContext2D, visited: Point[], scrollY: number) {
  const tip = visited[visited.length - 1]
  const layers = 10
  const fullLength = 120

  context.lineCap = 'round'
  context.lineJoin = 'round'
  context.globalAlpha = 0.14

  // Overlapping strokes make the trail grow brighter and wider toward the tip.
  for (let layer = 0; layer < layers; layer++) {
    let remaining = fullLength * (1 - layer / layers)
    context.beginPath()
    context.moveTo(tip.x, tip.y - scrollY)

    for (let index = visited.length - 1; index > 0 && remaining > 0; index--) {
      const from = visited[index]
      const to = visited[index - 1]
      const distance = Math.hypot(to.x - from.x, to.y - from.y)
      if (distance === 0) continue
      const progress = clamp(remaining / distance)
      context.lineTo(from.x + (to.x - from.x) * progress, from.y + (to.y - from.y) * progress - scrollY)
      remaining -= distance
    }

    context.lineWidth = 1.5 + layer * 0.16
    context.stroke()
  }

  context.lineCap = 'butt'
  context.lineJoin = 'miter'
}

function drawLine(context: CanvasRenderingContext2D, points: Waypoint[], scrollY: number, headY: number) {
  const first = points[0]
  if (headY <= first.scroll) return

  context.beginPath()
  context.moveTo(first.x, first.y - scrollY)
  const visited: Point[] = [first]

  for (let index = 1; index < points.length; index++) {
    const from = points[index - 1]
    const to = points[index]
    const progress = clamp((headY - from.scroll) / (to.scroll - from.scroll))
    const head = { x: from.x + (to.x - from.x) * progress, y: from.y + (to.y - from.y) * progress }
    visited.push(head)
    context.lineTo(head.x, head.y - scrollY)
    if (progress < 1) break
  }

  context.globalAlpha = 0.48
  context.lineWidth = 1.25
  context.stroke()

  drawTrail(context, visited, scrollY)

  const head = visited[visited.length - 1]
  context.globalAlpha = 0.95
  context.fillRect(head.x - 3, head.y - scrollY - 3, 6, 6)
  context.globalAlpha = 0.38
  context.lineWidth = 1
  context.strokeRect(head.x - 6, head.y - scrollY - 6, 12, 12)
  context.globalAlpha = 1
}

export function ScrollDrawing() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const main = canvas?.closest('main')
    if (!canvas || !context || !main) return

    const elements = Array.from(main.querySelectorAll<HTMLElement>('[data-scroll-drawing]'))
    if (elements.length === 0) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const progressValues = new Map<HTMLElement, string>()
    let drawing: ReturnType<typeof measureDrawing> | undefined
    let pendingFrame = 0
    let ink = ''
    let contactInk = ''

    const draw = () => {
      pendingFrame = 0
      const width = document.documentElement.clientWidth
      const height = window.innerHeight
      const scrollY = window.scrollY

      if (!drawing) {
        const pixelRatio = Math.min(window.devicePixelRatio, 2)
        canvas.width = Math.round(width * pixelRatio)
        canvas.height = Math.round(height * pixelRatio)
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
        const palette = getComputedStyle(canvas)
        ink = palette.color
        contactInk = palette.getPropertyValue('--on-accent').trim()
        drawing = measureDrawing(elements, width, scrollY)
      }

      const remaining = document.documentElement.scrollHeight - (scrollY + height)
      const headY = scrollY + Math.max(height * 0.7, height - remaining * 0.5)
      context.clearRect(0, 0, width, height)
      context.strokeStyle = ink
      if (drawing.contactY < scrollY + height) {
        const divide = clamp((drawing.contactY - scrollY) / height)
        const stroke = context.createLinearGradient(0, 0, 0, height)
        stroke.addColorStop(0, ink)
        stroke.addColorStop(divide, ink)
        stroke.addColorStop(divide, contactInk)
        stroke.addColorStop(1, contactInk)
        context.strokeStyle = stroke
      }
      context.fillStyle = headY >= drawing.contactY ? contactInk : ink
      drawLine(context, drawing.points, scrollY, headY)

      for (const { element, point } of drawing.stops) {
        const progress = clamp((headY - point.y + 28) / 132).toFixed(3)
        if (progressValues.get(element) === progress) continue
        element.style.setProperty('--drawing-progress', progress)
        progressValues.set(element, progress)
      }
    }

    const schedule = () => {
      if (!pendingFrame && !reducedMotion.matches) pendingFrame = requestAnimationFrame(draw)
    }

    const measure = () => {
      drawing = undefined
      schedule()
    }

    const reset = () => {
      cancelAnimationFrame(pendingFrame)
      pendingFrame = 0
      progressValues.clear()
      elements.forEach((element) => element.style.removeProperty('--drawing-progress'))
    }

    const updatePreference = () => {
      if (reducedMotion.matches) reset()
      else measure()
    }

    const resizeObserver = new ResizeObserver(measure)
    const themeObserver = new MutationObserver(measure)
    resizeObserver.observe(main)
    elements.forEach((element) => resizeObserver.observe(element))
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    reducedMotion.addEventListener('change', updatePreference)
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', schedule, { passive: true })
    main.addEventListener('animationend', measure)
    schedule()

    return () => {
      reset()
      resizeObserver.disconnect()
      themeObserver.disconnect()
      reducedMotion.removeEventListener('change', updatePreference)
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', schedule)
      main.removeEventListener('animationend', measure)
    }
  }, [])

  return <canvas ref={canvasRef} className="ref-scroll-drawing" aria-hidden="true" />
}
