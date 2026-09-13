import type { Metadata } from 'next'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpen,
  CircleAlert,
  CircleCheckBig,
  Cpu,
  Github,
  GitPullRequest,
  UserRound,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { PortfolioExperience } from '@/components/portfolio-experience'
import { ProjectArtifact } from '@/components/project-artifact'
import { ProjectSymbol } from '@/components/project-symbol'
import { featuredProjects, getProject } from '@/src/content/projects'
import { profile } from '@/src/content/profile'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

const caseSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'role', label: 'Role' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'result', label: 'Result' },
]

export const dynamicParams = false

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project?.featured || !project.caseStudy) return {}

  const canonicalPath = `/projects/${project.id}`

  return {
    title: `${project.title} case study | ${profile.name}`,
    description: project.tagline,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'article',
      title: `${project.title} case study | ${profile.name}`,
      description: project.tagline,
      url: canonicalPath,
      images: [{ url: project.image ?? profile.seo.ogImage, alt: `${project.title} product interface` }],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project?.featured || !project.caseStudy) notFound()

  const projectIndex = featuredProjects.findIndex((item) => item.id === project.id)
  const projectNumber = String(projectIndex + 1).padStart(2, '0')
  const totalNumber = String(featuredProjects.length).padStart(2, '0')
  const nextProject = featuredProjects[(projectIndex + 1) % featuredProjects.length]
  const caseStudy = project.caseStudy

  return (
    <>
      <Navigation />
      <PortfolioExperience showRail={false}>
        <main id="main-content" className="case-study-main">
          <div className="site-shell">
            <Link className="case-study-back" href="/#work">
              <ArrowLeft size={14} aria-hidden="true" /> Selected work
            </Link>

            <header className="case-study-hero" data-reveal>
              <div className="case-study-hero-copy">
                <div className="case-study-label">
                  <span className="project-symbol" aria-hidden="true"><ProjectSymbol projectId={project.id} size={20} /></span>
                  <p className="mono-label">CASE STUDY / {projectNumber}—{totalNumber}</p>
                </div>
                <h1>{project.title}</h1>
                <p className="case-study-summary">{project.tagline}.</p>
              </div>

              <dl className="case-study-meta">
                <div><dt>Role</dt><dd>{project.role}</dd></div>
                <div><dt>Product</dt><dd>{project.type}</dd></div>
                <div><dt>Core stack</dt><dd>{project.tags.slice(0, 4).join(' · ')}</dd></div>
                <div><dt>Status</dt><dd className="project-status"><i aria-hidden="true" /> Delivered</dd></div>
              </dl>
            </header>

            <figure className="case-study-figure" data-reveal>
              <ProjectArtifact project={project} figure={projectNumber} priority />
            </figure>

            <nav className="case-toc" aria-label="Case study contents">
              {caseSections.map((section, index) => (
                <a key={section.id} href={`#case-${section.id}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>{section.label}
                </a>
              ))}
            </nav>

            <div className="case-study-content">
              <CaseStudyBlock id="overview" index="01" title="Overview" icon={BookOpen}>
                <p>{project.description}</p>
              </CaseStudyBlock>

              <CaseStudyBlock id="problem" index="02" title="Problem" icon={CircleAlert}>
                <p>{caseStudy.problem}</p>
              </CaseStudyBlock>

              <CaseStudyBlock id="role" index="03" title="My role" icon={UserRound}>
                <p>{caseStudy.role}</p>
              </CaseStudyBlock>

              <CaseStudyBlock id="challenges" index="04" title="Product challenges" icon={Blocks}>
                <ul>{caseStudy.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
              </CaseStudyBlock>

              <CaseStudyBlock id="decisions" index="05" title="Decisions" icon={GitPullRequest}>
                <ul>{caseStudy.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul>
              </CaseStudyBlock>

              <CaseStudyBlock id="architecture" index="06" title="Architecture" icon={Cpu}>
                <ul className="case-stack-list">
                  {project.tags.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </CaseStudyBlock>

              <CaseStudyBlock id="result" index="07" title="Result" icon={CircleCheckBig}>
                <p>{caseStudy.result}</p>
                <div className="case-study-actions">
                  {project.links.demo ? (
                    <a className="primary-action" href={project.links.demo} target="_blank" rel="noreferrer">
                      View live product <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.links.repo ? (
                    <a className="plain-control" href={project.links.repo} target="_blank" rel="noreferrer">
                      <Github size={15} aria-hidden="true" /> View source <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </CaseStudyBlock>
            </div>

            <div className="case-study-next" data-reveal>
              <p className="mono-label">NEXT CASE / {String(((projectIndex + 1) % featuredProjects.length) + 1).padStart(2, '0')}</p>
              <Link href={`/projects/${nextProject.id}`}>
                <span>{nextProject.title}</span> <ArrowRight size={34} aria-hidden="true" />
              </Link>
            </div>

            <footer className="site-footer">
              <p>© {new Date().getFullYear()} {profile.name}</p>
              <p>{profile.location}</p>
              <Link href="/#contact">Contact <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </footer>
          </div>
        </main>
      </PortfolioExperience>
    </>
  )
}

function CaseStudyBlock({
  id,
  index,
  title,
  icon: Icon,
  children,
}: {
  id: string
  index: string
  title: string
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <section id={`case-${id}`} className="case-study-block" aria-labelledby={`case-section-${id}`} data-reveal>
      <p className="mono-label">{index}</p>
      <h2 id={`case-section-${id}`}><Icon size={20} aria-hidden="true" /> {title}</h2>
      <div className="case-study-block-copy">{children}</div>
    </section>
  )
}
