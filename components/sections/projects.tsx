import { ProjectReel } from '@/components/project-reel'
import { SectionWrapper } from '@/components/section-wrapper'

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="work"
      index="02"
      label="Projects"
      title="Selected work"
      subtitle="Case studies on product decisions, implementation, and results."
      className="ref-projects-section"
    >
      <ProjectReel />
    </SectionWrapper>
  )
}
