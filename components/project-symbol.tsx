import type { LucideProps } from 'lucide-react'
import {
  CalendarRange,
  Languages,
  Pill,
  Recycle,
  ShoppingBasket,
  Smartphone,
} from 'lucide-react'

const projectIcons = {
  kantinapp: Smartphone,
  'hamartech-web': CalendarRange,
  'circular-economy-hamar': Recycle,
  'norsk-coach-ai': Languages,
  'pillmind-medication-platform': Pill,
  'oda-remake': ShoppingBasket,
} as const

export function ProjectSymbol({ projectId, ...props }: LucideProps & { projectId: string }) {
  const Icon = projectIcons[projectId as keyof typeof projectIcons] ?? Smartphone
  return <Icon {...props} />
}
