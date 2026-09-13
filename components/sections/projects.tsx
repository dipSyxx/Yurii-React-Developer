import { ProjectReel } from '@/components/project-reel'
import { SectionWrapper } from '@/components/section-wrapper'

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="work"
      index="02"
      label="Selected projects"
      title="Six products. One continuous reel."
      subtitle="Real product work across mobile, operations, public services, learning, health, and commerce. Every project opens into a complete case study."
      className="ref-projects-section"
    >
      <ProjectReel />
    </SectionWrapper>
  )
}
