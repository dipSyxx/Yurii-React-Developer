import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { SkillsSection } from '@/components/sections/skills'
import { ExperienceSection } from '@/components/sections/experience'
import { AboutSection } from '@/components/sections/about'
import { ContactSection } from '@/components/sections/contact'
import { PortfolioExperience } from '@/components/portfolio-experience'
import { profile } from '@/src/content/profile'

function serializeJsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: profile.siteUrl,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stange',
      addressCountry: 'NO',
    },
    sameAs: [profile.links.github, profile.links.linkedin],
  }

  return (
    <>
      <Navigation />
      <PortfolioExperience showRail={false}>
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </PortfolioExperience>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personSchema) }}
      />
    </>
  )
}
