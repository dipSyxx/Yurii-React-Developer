'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, BookOpen, Check, Github } from 'lucide-react'
import { ProjectArtifact } from '@/components/project-artifact'
import { ProjectSymbol } from '@/components/project-symbol'
import type { Project } from '@/src/content/projects'

interface ProjectCardProps {
  project: Project
  index: number
  total: number
}

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const artifactY = useTransform(scrollYProgress, [0, 1], [42, -42])
  const artifactScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.985, 1, 0.985])
  const projectNumber = String(index + 1).padStart(2, '0')
  const totalNumber = String(total).padStart(2, '0')
  const keyStack = project.tags.slice(0, 5).join(' · ')

  return (
    <motion.article
      ref={cardRef}
      id={`project-${project.id}`}
      className={`featured-project ${index % 2 === 1 ? 'featured-project-reverse' : ''}`}
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="project-ghost-number" aria-hidden="true">{projectNumber}</span>

      <div className="project-copy">
        <div className="project-heading-row">
          <span className="project-symbol" aria-hidden="true">
            <ProjectSymbol projectId={project.id} size={20} />
          </span>
          <p className="project-number">{projectNumber} / {totalNumber}</p>
        </div>

        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
          <p className="project-tagline">{project.tagline}.</p>
        </div>

        <dl className="project-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Core stack</dt>
            <dd>{keyStack}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd className="project-status" data-status={project.status === 'Completed' ? 'completed' : 'active'}>
              <i aria-hidden="true" /> {project.status}
            </dd>
          </div>
        </dl>

        <ul className="project-proof" aria-label={`${project.title} selected capabilities`}>
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight}><Check size={14} aria-hidden="true" /> {highlight}</li>
          ))}
        </ul>

        <div className="project-actions">
          <Link className="text-action" href={`/projects/${project.id}`}>
            <BookOpen size={15} aria-hidden="true" /> Case study <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          {project.links.demo ? (
            <a className="text-action secondary" href={project.links.demo} target="_blank" rel="noreferrer">
              Live <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
          {project.links.repo ? (
            <a className="project-code-link" href={project.links.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
              <Github size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>

      <motion.div
        className="project-artifact-motion"
        style={reduceMotion ? undefined : { y: artifactY, scale: artifactScale }}
      >
        <Link
          href={`/projects/${project.id}`}
          className="project-artifact-link"
          aria-label={`Read the ${project.title} case study`}
        >
          <ProjectArtifact project={project} figure={projectNumber} priority={index === 0} />
          <span className="artifact-open-label" aria-hidden="true">
            Open case <ArrowUpRight size={15} />
          </span>
        </Link>
      </motion.div>
    </motion.article>
  )
}
