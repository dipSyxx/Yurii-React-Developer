'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, CloudCog, Code2, Database, ServerCog, Wrench, type LucideIcon } from 'lucide-react'
import { InteractiveSurface } from '@/components/interactive-surface'
import { stackGroups, type TechnologyName } from '@/src/content/stack'

const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: ServerCog,
  data: Database,
  state: Wrench,
  delivery: CloudCog,
}

const simpleIcon = (slug: string) => `https://cdn.simpleicons.org/${slug}?viewbox=auto`

const technologyIcons: Record<TechnologyName, string> = {
  React: simpleIcon('react'),
  'Next.js': simpleIcon('nextdotjs'),
  TypeScript: simpleIcon('typescript'),
  JavaScript: simpleIcon('javascript'),
  HTML5: simpleIcon('html5'),
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/css3/css3-original.svg',
  Sass: simpleIcon('sass'),
  'Tailwind CSS': simpleIcon('tailwindcss'),
  'shadcn/ui': simpleIcon('shadcnui'),
  'AG Grid': 'https://raw.githubusercontent.com/ag-grid/ag-grid/latest/documentation/ag-grid-docs/public/community/events/organiser-logos/aggrid-logo.svg',
  Mantine: simpleIcon('mantine'),
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/reactnative/reactnative-original.svg',
  Expo: simpleIcon('expo'),
  'Framer Motion': simpleIcon('framer'),
  Leaflet: simpleIcon('leaflet'),
  'Node.js': simpleIcon('nodedotjs'),
  Express: simpleIcon('express'),
  'REST APIs': simpleIcon('openapiinitiative'),
  NextAuth: 'https://authjs.dev/favicon-32x32.png',
  'OAuth / OIDC': simpleIcon('openid'),
  'JWT / sessions': simpleIcon('jsonwebtokens'),
  Stripe: simpleIcon('stripe'),
  'AI integrations': 'https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/agents_sdk/deployment_manager/frontend/src/openai-logomark.svg',
  'AI SDK': 'https://ai-sdk.dev/favicon.ico',
  OpenAI: 'https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/agents_sdk/deployment_manager/frontend/src/openai-logomark.svg',
  PostgreSQL: simpleIcon('postgresql'),
  Prisma: simpleIcon('prisma'),
  Supabase: simpleIcon('supabase'),
  Neon: simpleIcon('neon'),
  Firebase: simpleIcon('firebase'),
  'TanStack Query': simpleIcon('reactquery'),
  SWR: simpleIcon('swr'),
  IndexedDB: simpleIcon('mdnwebdocs'),
  Dexie: 'https://raw.githubusercontent.com/dexie/Dexie.js/master/samples/dexie-cloud-todo-app/public/dexie-icon-64x64.png',
  Vercel: simpleIcon('vercel'),
  GitHub: simpleIcon('github'),
  Git: simpleIcon('git'),
  pnpm: simpleIcon('pnpm'),
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vscode/vscode-original.svg',
  Postman: simpleIcon('postman'),
  Zustand: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/zustand/zustand-original.svg',
  Redux: simpleIcon('redux'),
  'React Hook Form': simpleIcon('reacthookform'),
  Zod: simpleIcon('zod'),
  Figma: simpleIcon('figma'),
  Bubble: 'https://meta-q.cdn.bubble.io/f1756386552835x162920220128838430/Logo%20%281%29.svg',
}

function technologyInitials(technology: string) {
  return technology
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function StackExplorer() {
  const [activeId, setActiveId] = useState<(typeof stackGroups)[number]['id']>(stackGroups[0].id)
  const reduceMotion = useReducedMotion()
  const activeGroup = stackGroups.find((group) => group.id === activeId) ?? stackGroups[0]
  const technologyCount = stackGroups.reduce((total, group) => total + group.technologies.length, 0)

  return (
    <div className="ref-stack-browser" data-reveal="viewport">
      <div className="ref-window-bar" aria-hidden="true">
        <span className="ref-window-dots"><i /><i /><i /></span>
        <span>TECHNOLOGIES/</span>
        <span>{String(activeGroup.technologies.length).padStart(2, '0')} SHOWN / {technologyCount} TOTAL</span>
      </div>

      <div className="ref-stack-layout">
        <div className="ref-stack-nav" role="group" aria-label="Technology categories">
          {stackGroups.map((group, index) => {
            const Icon = groupIcons[group.id] ?? Code2
            const isActive = group.id === activeGroup.id

            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={isActive}
                className={isActive ? 'is-active' : undefined}
                onClick={() => setActiveId(group.id)}
              >
                <span><i>{String(index + 1).padStart(2, '0')}</i><Icon size={17} aria-hidden="true" />{group.label}</span>
                <span className="ref-stack-nav-meta">
                  <b>{String(group.technologies.length).padStart(2, '0')}</b>
                  <ChevronRight size={16} aria-hidden="true" />
                </span>
              </button>
            )
          })}
        </div>

        <div className="ref-stack-stage" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="ref-stack-panel"
              key={activeGroup.id}
              initial={reduceMotion ? false : { opacity: 0, y: 14, clipPath: 'inset(0 0 16% 0)' }}
              animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ref-stack-heading">
                <header>
                  <p>{'// STACK / '}{activeGroup.id.toUpperCase()}</p>
                  <h3>{activeGroup.label}</h3>
                  <p>{activeGroup.description}</p>
                </header>
                <div className="ref-stack-readout" aria-hidden="true">
                  <span>ACTIVE SET</span>
                  <strong>{String(activeGroup.technologies.length).padStart(2, '0')}</strong>
                  <i><span /></i>
                  <small>CV + PRODUCT WORK</small>
                </div>
              </div>
              <ul>
                {activeGroup.technologies.map((technology, index) => (
                  <motion.li
                    className="ref-tech-motion"
                    key={technology}
                    initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.025, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <InteractiveSurface className="ref-tech-card" maxShift={10} maxTilt={0}>
                      <span className="ref-tech-index">{activeGroup.id.slice(0, 1).toUpperCase()}—{String(index + 1).padStart(2, '0')}</span>
                      <span className="ref-tech-icon" aria-hidden="true">
                        <span>{technologyInitials(technology)}</span>
                        {/* Brand SVGs are already optimized; keeping them direct preserves their original colors. */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={technologyIcons[technology]}
                          alt=""
                          width="32"
                          height="32"
                          loading="lazy"
                          decoding="async"
                          onError={(event) => {
                            event.currentTarget.hidden = true
                          }}
                        />
                      </span>
                      <span className="ref-tech-name">
                        <strong>{technology}</strong>
                        <small>STACK ENTRY</small>
                      </span>
                      <ArrowUpRight className="ref-tech-arrow" size={15} aria-hidden="true" />
                      <i className="ref-tech-scan" aria-hidden="true" />
                    </InteractiveSurface>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
