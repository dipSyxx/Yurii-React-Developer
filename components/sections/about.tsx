import { AboutWorkspace } from '@/components/about-workspace'
import { SectionWrapper } from '@/components/section-wrapper'

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      index="01"
      label="About"
      title="How I work"
      subtitle="My background, engineering approach, and interests outside work."
    >
      <AboutWorkspace />
    </SectionWrapper>
  )
}
