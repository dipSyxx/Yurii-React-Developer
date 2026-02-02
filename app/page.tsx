'use client'

import { useState } from 'react'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { Navigation } from '@/components/navigation'
import { CommandPalette } from '@/components/command-palette'
import { CursorFollower } from '@/components/cursor-follower'
import { FloatingElements } from '@/components/floating-elements'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { AmbitionsSection } from '@/components/sections/ambitions'
import { SkillsSection } from '@/components/sections/skills'
import { InterestsSection } from '@/components/sections/interests'
import { StrengthsSection } from '@/components/sections/strengths'
import { KnowledgeSection } from '@/components/sections/knowledge'
import { ExperienceSection } from '@/components/sections/experience'
import { EducationSection } from '@/components/sections/education'
import { LanguagesSection } from '@/components/sections/languages'
import { ContactSection } from '@/components/sections/contact'

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  return (
    <SmoothScrollProvider>
      <CursorFollower />
      <FloatingElements />
      <Navigation onCommandPaletteOpen={() => setCommandPaletteOpen(true)} />
      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AmbitionsSection />
        <SkillsSection />
        <InterestsSection />
        <StrengthsSection />
        <KnowledgeSection />
        <ExperienceSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
      </main>
    </SmoothScrollProvider>
  )
}
