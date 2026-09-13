import type { MetadataRoute } from 'next'
import { featuredProjects } from '@/src/content/projects'
import { profile } from '@/src/content/profile'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', ...featuredProjects.map((project) => `/projects/${project.id}`)]

  return routes.map((route) => ({
    url: `${profile.siteUrl}${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8,
  }))
}
