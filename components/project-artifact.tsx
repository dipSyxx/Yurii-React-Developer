import Image from 'next/image'
import { LockKeyhole } from 'lucide-react'
import { ProjectSymbol } from '@/components/project-symbol'
import type { Project } from '@/src/content/projects'
import { cn } from '@/lib/utils'

interface ProjectArtifactProps {
  project: Project
  figure: string
  priority?: boolean
  className?: string
}

export function ProjectArtifact({
  project,
  figure,
  priority = false,
  className,
}: ProjectArtifactProps) {
  return (
    <span className={cn('project-artifact', className)}>
      <span className="artifact-bar" aria-hidden="true">
        <span className="artifact-window-dots"><i /><i /><i /></span>
        <span className="artifact-path"><ProjectSymbol projectId={project.id} size={13} /> PROJECT/{project.id}.preview</span>
        <span>viewport / 1440</span>
      </span>
      <span className="artifact-address" aria-hidden="true">
        <span><LockKeyhole size={11} /> product://{project.id}/overview</span>
        <span>01</span>
      </span>
      <span className="artifact-image">
        <Image
          src={project.image ?? '/placeholder.jpg'}
          alt={`${project.title} product interface`}
          fill
          sizes="(max-width: 900px) 100vw, 72vw"
          priority={priority}
        />
      </span>
      <span className="artifact-caption" aria-hidden="true">
        FIG. {figure} — PRODUCT SURFACE
      </span>
    </span>
  )
}
