'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { InteractiveSurface } from '@/components/interactive-surface'
import { ProjectSymbol } from '@/components/project-symbol'
import { isProjectFrameVisible, transitionToProject } from '@/lib/project-transition'
import { featuredProjects } from '@/src/content/projects'

export function ProjectReel() {
  const router = useRouter()
  const reelRef = useRef<HTMLDivElement>(null)
  const [canMoveBack, setCanMoveBack] = useState(false)
  const [canMoveForward, setCanMoveForward] = useState(true)

  const updateControls = useCallback(() => {
    const reel = reelRef.current
    if (!reel) return

    setCanMoveBack(reel.scrollLeft > 8)
    setCanMoveForward(reel.scrollLeft + reel.clientWidth < reel.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const reel = reelRef.current
    if (!reel) return

    updateControls()
    const observer = new ResizeObserver(updateControls)
    observer.observe(reel)
    reel.addEventListener('scroll', updateControls, { passive: true })

    return () => {
      observer.disconnect()
      reel.removeEventListener('scroll', updateControls)
    }
  }, [updateControls])

  const move = (direction: -1 | 1) => {
    const reel = reelRef.current
    if (!reel) return

    const card = reel.querySelector<HTMLElement>('.ref-project-card')
    const gap = Number.parseFloat(window.getComputedStyle(reel).columnGap || '0')
    const distance = card ? card.offsetWidth + gap : reel.clientWidth * 0.86
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    reel.scrollBy({
      left: distance * direction,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  const openProject = (event: { preventDefault: () => void }, projectId: string) => {
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (document.documentElement.hasAttribute('data-project-transition')) {
      event.preventDefault()
      return
    }

    const frame = reelRef.current?.querySelector<HTMLElement>(`[data-project-frame="${CSS.escape(projectId)}"]`)
    const image = frame?.querySelector('img')
    if (!frame || !image?.complete || !image.naturalWidth || !isProjectFrameVisible(frame)) return

    event.preventDefault()
    transitionToProject(frame, projectId, () => router.push(`/projects/${projectId}`))
  }

  return (
    <div className="ref-project-reel" data-reveal="viewport" data-scroll-drawing="work">
      <div className="ref-reel-toolbar">
        <p><span>INDEX/</span> 01—06</p>
        <div>
          <button type="button" onClick={() => move(-1)} disabled={!canMoveBack} aria-label="Previous project">
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} disabled={!canMoveForward} aria-label="Next project">
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div ref={reelRef} className="ref-project-track" aria-label="Selected project cases">
        {featuredProjects.map((project, index) => (
          <InteractiveSurface as="article" className="ref-project-card" key={project.id} maxShift={12} maxTilt={1.2}>
            <Link
              className="ref-project-link"
              href={`/projects/${project.id}`}
              aria-label={`View project: ${project.title}`}
              onNavigate={(event) => openProject(event, project.id)}
            >
              <div className="ref-project-frame">
                <div className="ref-project-windowbar" aria-hidden="true">
                  <span><i /><i /><i /></span>
                  <b>{String(index + 1).padStart(2, '0')}/{String(featuredProjects.length).padStart(2, '0')}</b>
                </div>
                <InteractiveSurface className="ref-project-image" maxShift={12} maxTilt={0}>
                  {project.image ? (
                    <div className="ref-project-preview" data-project-frame={project.id}>
                      <Image
                        src={project.image}
                        alt={`${project.title} product interface`}
                        fill
                        sizes="(max-width: 767px) 84vw, (max-width: 1199px) 46vw, 31vw"
                      />
                    </div>
                  ) : null}
                  <span aria-hidden="true"><ProjectSymbol projectId={project.id} size={24} /></span>
                  <span className="ref-project-focus" aria-hidden="true" />
                  <i className="ref-project-scan" aria-hidden="true" />
                </InteractiveSurface>
              </div>
              <div className="ref-project-copy">
                <p>{project.type} · {project.status}{project.links.demoUnavailable ? ' · Demo unavailable' : ''}</p>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
                <ul aria-label={`${project.title} technologies`}>
                  {project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <span className="ref-project-cta">
                View project <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </Link>
            {project.links.demo || project.links.repo ? (
              <div className="ref-project-actions">
                {project.links.demo ? (
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    {project.links.demoLabel ?? 'Demo'} <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ) : null}
                {project.links.repo ? (
                  <a href={project.links.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
                    <Github size={14} aria-hidden="true" />{project.links.demoUnavailable ? 'Source' : null}
                  </a>
                ) : null}
              </div>
            ) : null}
          </InteractiveSurface>
        ))}
      </div>

      <p className="ref-reel-hint" aria-hidden="true"><ArrowRight size={14} /> Use arrows or swipe</p>
    </div>
  )
}
