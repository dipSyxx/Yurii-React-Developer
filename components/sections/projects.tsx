'use client'

import { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects, allTags, type Project } from '@/src/content/projects'
import { ProjectCard } from '@/components/project-card'
import { ProjectModal } from '@/components/project-modal'
import { SectionWrapper } from '@/components/section-wrapper'
import { cn } from '@/lib/utils'

export function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-100px' })

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects
    return projects.filter((project) => project.tags.includes(selectedTag))
  }, [selectedTag])

  return (
    <SectionWrapper
      id="projects"
      className="bg-muted/30"
      title="Projects"
      subtitle="A selection of projects I've worked on, from design systems to full-stack applications."
    >
      {/* Filter tags */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setSelectedTag(null)}
          className={cn(
            'px-3 py-1.5 text-sm rounded-full transition-colors',
            !selectedTag
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          )}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={cn(
              'px-3 py-1.5 text-sm rounded-full transition-colors',
              selectedTag === tag
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            <ProjectCard
              project={project}
              onViewDetails={setSelectedProject}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center text-muted-foreground py-12"
        >
          No projects found with that tag.
        </motion.p>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  )
}
