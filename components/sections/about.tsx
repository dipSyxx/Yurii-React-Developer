import { AboutWorkspace } from '@/components/about-workspace'
import { SectionWrapper } from '@/components/section-wrapper'

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      index="01"
      label="About"
      title="A working file, not a biography."
      subtitle="A concise view of how I work, what I take ownership of, and what keeps my perspective wider than the current task."
    >
      <AboutWorkspace />
    </SectionWrapper>
  )
}
