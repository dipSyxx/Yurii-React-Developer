export interface StackGroup {
  id: string
  label: string
  description: string
  technologies: readonly string[]
}

export const stackGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Interfaces, component systems, and responsive product experiences.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Sass',
      'Tailwind CSS',
      'shadcn/ui',
      'AG Grid',
      'Mantine',
      'React Native',
      'Expo',
      'Framer Motion',
      'Leaflet',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & auth',
    description: 'Application services, authentication, integrations, and reliable API boundaries.',
    technologies: ['Node.js', 'Express', 'REST APIs', 'NextAuth', 'OAuth / OIDC', 'JWT / sessions', 'Stripe', 'AI integrations', 'AI SDK', 'OpenAI'],
  },
  {
    id: 'data',
    label: 'Data & persistence',
    description: 'Relational models, local persistence, and product data that remain understandable as systems grow.',
    technologies: ['PostgreSQL', 'Prisma', 'Supabase', 'Neon', 'Firebase', 'IndexedDB', 'Dexie'],
  },
  {
    id: 'state',
    label: 'State & forms',
    description: 'Predictable client and server state, validation, and form workflows with clear failure states.',
    technologies: ['TanStack Query', 'SWR', 'Redux', 'Zustand', 'React Hook Form', 'Zod'],
  },
  {
    id: 'delivery',
    label: 'Delivery & tools',
    description: 'The practical delivery, debugging, collaboration, and design layer around production work.',
    technologies: ['Vercel', 'GitHub', 'Git', 'pnpm', 'VS Code', 'Postman', 'Figma', 'Bubble'],
  },
] as const satisfies readonly StackGroup[]

export type TechnologyName = (typeof stackGroups)[number]['technologies'][number]
