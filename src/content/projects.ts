export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  image?: string
  links: {
    repo?: string
    demo?: string
  }
  highlights: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "design-system",
    title: "Component Library",
    tagline: "A comprehensive design system for modern web apps",
    description: "Built a scalable design system with 50+ components, complete documentation, and Figma integration. Used by multiple teams across the organization.",
    tags: ["React", "TypeScript", "Storybook", "Design System"],
    links: {
      repo: "https://github.com/yourusername/design-system",
      demo: "https://design-system.example.com",
    },
    highlights: [
      "50+ accessible components following WAI-ARIA guidelines",
      "Comprehensive documentation with interactive examples",
      "Dark/light theme support with CSS custom properties",
      "99% test coverage with unit and visual regression tests",
    ],
    featured: true,
  },
  {
    id: "motion-toolkit",
    title: "Motion Toolkit",
    tagline: "Animation primitives for React applications",
    description: "A collection of animation utilities and components that make it easy to add fluid, physics-based animations to any React project.",
    tags: ["React", "Framer Motion", "TypeScript", "Animation"],
    links: {
      repo: "https://github.com/yourusername/motion-toolkit",
      demo: "https://motion-toolkit.example.com",
    },
    highlights: [
      "Spring-based animations with configurable physics",
      "Gesture handling for drag, hover, and tap interactions",
      "Layout animations that handle DOM changes gracefully",
      "Reduced motion support for accessibility",
    ],
    featured: true,
  },
  {
    id: "dashboard-app",
    title: "Analytics Dashboard",
    tagline: "Real-time data visualization platform",
    description: "A comprehensive analytics dashboard with real-time updates, customizable widgets, and collaborative features for data-driven teams.",
    tags: ["Next.js", "PostgreSQL", "WebSocket", "Charts"],
    links: {
      demo: "https://dashboard.example.com",
    },
    highlights: [
      "Real-time data updates using WebSocket connections",
      "Drag-and-drop widget customization",
      "Export reports to PDF and Excel formats",
      "Role-based access control for team collaboration",
    ],
    featured: true,
  },
  {
    id: "cli-tool",
    title: "Dev CLI",
    tagline: "Command-line tool for project scaffolding",
    description: "A CLI tool that streamlines project setup with customizable templates, dependency management, and CI/CD configuration.",
    tags: ["Node.js", "CLI", "TypeScript", "DevTools"],
    links: {
      repo: "https://github.com/yourusername/dev-cli",
    },
    highlights: [
      "Interactive prompts for project configuration",
      "Template system with community contributions",
      "Automatic dependency updates and security audits",
      "Integration with popular CI/CD platforms",
    ],
  },
  {
    id: "mobile-app",
    title: "Fitness Tracker",
    tagline: "Cross-platform mobile app for health tracking",
    description: "A mobile application for tracking workouts, nutrition, and health metrics with social features and personalized recommendations.",
    tags: ["React Native", "Firebase", "Health API", "Mobile"],
    links: {
      demo: "https://apps.apple.com/example",
    },
    highlights: [
      "Integration with Apple Health and Google Fit",
      "AI-powered workout recommendations",
      "Social features for community challenges",
      "Offline-first architecture with sync capabilities",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Modern shopping experience with headless CMS",
    description: "A performant e-commerce platform built with headless architecture, featuring instant search, personalized recommendations, and seamless checkout.",
    tags: ["Next.js", "Shopify", "Algolia", "E-Commerce"],
    links: {
      demo: "https://shop.example.com",
    },
    highlights: [
      "Sub-second page loads with static generation",
      "Instant search with typo tolerance and faceted filtering",
      "Personalized product recommendations using ML",
      "Optimized checkout flow with 15% conversion improvement",
    ],
  },
]

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort()
