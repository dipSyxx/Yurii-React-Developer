export const profile = {
  name: "Yurii Linetskyi",
  title: "Frontend-focused Full-stack Developer",
  siteUrl: "https://yurii-react-developer.vercel.app",
  tagline:
    "Frontend-focused full-stack developer with 3 years of commercial experience delivering SaaS products and data-heavy workflows.",
  email: "linetsky.yura@gmail.com",
  phone: "+47 968 08 211",
  location: "Stange, Norway",

  about: {
    intro:
      "I am a frontend-focused full-stack developer based in Stange, Norway, with 3 years of commercial experience delivering SaaS products and data-heavy workflows.",
    description:
      "My work spans React and Next.js interfaces, mobile applications, backend APIs, PostgreSQL, authentication, Stripe, AI integrations, and high-volume workflows processing up to 300k records.",
    background:
      "I take ownership from requirements and design through implementation, testing, delivery, and ongoing support. I focus on maintainable solutions, responsive data-heavy interfaces, and performance improvements that reduce latency and system load.",
  },

  outsideIde: [
    "Training",
    "Travelling",
    "Learning",
    "Exploring cities and cultures",
  ],

  ambitions: [
    "Create user-friendly, intuitive interfaces with React and Next.js",
    "Build scalable, reusable components and frontend architectures",
    "Improve performance and loading speed for real-world web apps",
    "Integrate front-end solutions effectively with APIs and backend systems",
    "Grow in a friendly, high-skill team and become a top-level frontend engineer",
  ],

  skills: {
    frontend: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS / Sass",
      "Tailwind CSS",
      "shadcn/ui",
      "AG Grid",
      "Mantine",
    ],
    stateData: [
      "Redux",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "REST APIs",
    ],
    backend: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Neon",
      "Firebase",
      "IndexedDB",
      "Dexie",
    ],
    auth: [
      "NextAuth",
      "OAuth 2.0 / OIDC",
      "JWT / Session Cookies",
      "Email Verification / Password Reset",
      "Protected Routes / Middleware Guards",
    ],
    tools: [
      "Git",
      "GitHub",
      "pnpm",
      "VS Code",
      "Vercel",
      "Postman",
      "Figma",
      "Stripe",
      "AI integrations",
      "Bubble",
    ],
    design: [
      "Responsive UI",
      "Cross-browser compatibility",
      "Performance optimization",
    ],
  },

  interests: [
    {
      title: "UI engineering",
      description:
        "Building clean, reusable components and consistent interfaces",
    },
    {
      title: "Performance",
      description:
        "Optimizing rendering, caching, lazy loading, and Lighthouse metrics",
    },
    {
      title: "Modern frontend stack",
      description: "Exploring new frameworks, patterns, and best practices",
    },
    {
      title: "State management",
      description:
        "Designing predictable data flow with Redux/Zustand and server state",
    },
    {
      title: "API integrations",
      description:
        "Reliable data fetching, error handling, and UX around async flows",
    },
  ],

  strengths: [
    {
      title: "Product ownership",
      description:
        "Own features end to end from requirements and design through implementation, testing, and delivery",
    },
    {
      title: "Performance engineering",
      description:
        "Diagnose bottlenecks across UI, data flow, and backend to improve scale, latency, and reliability",
    },
    {
      title: "Reliable delivery",
      description:
        "Turn evolving business requirements into maintainable, production-ready solutions",
    },
  ],

  learnedKnowledge: [
    {
      area: "Frontend development",
      topics: [
        "Reusable components",
        "Responsive design",
        "Cross-browser compatibility",
        "Accessibility basics",
      ],
    },
    {
      area: "State & data flow",
      topics: [
        "Redux / Zustand patterns",
        "Async flows and UI states",
        "API integration and reliability",
      ],
    },
    {
      area: "Performance optimization",
      topics: [
        "Lazy loading and code splitting",
        "Rendering optimization",
        "Caching and data fetching strategies",
        "Lighthouse improvements",
      ],
    },
    {
      area: "Backend collaboration",
      topics: [
        "Working with REST APIs",
        "Understanding data models",
        "Prisma basics",
        "PostgreSQL basics",
      ],
    },
  ],

  experience: [
    {
      company: "UDEX",
      website: "https://udex.app/",
      role: "Frontend-focused Full-stack Developer",
      logo: "/udex/udex.jpg",
      type: "Remote · Project-based",
      period: "Aug 2023 - Jul 2026",
      highlights: [
        "Re-architected a bulk data workflow handling 150k–300k records by moving intermediate staging and transformation to IndexedDB and Dexie, reducing server and database load and processing latency.",
        "Optimized high-volume AG Grid interfaces with row virtualization, batched operations, and client-side persistence to keep bulk editing and validation responsive.",
        "Delivered production frontend and full-stack features using React, Next.js, and TypeScript.",
        "Built dashboards, complex forms, role-based API flows, authentication, Stripe, and AI integrations while debugging production issues with a remote team.",
      ],
    },
  ],

  education: [
    {
      school: "Hamar katedralskole",
      degree: "Information Technology · Vocational programme",
      period: "2025 - Present · Expected 2029",
    },
    {
      school: "Uman Lyceum No. 1",
      degree: "Secondary Education",
      period: "2012 - 2023",
    },
  ],

  languages: [
    { name: "Ukrainian", level: "Native" },
    { name: "Norwegian", level: "Intermediate" },
    { name: "English", level: "Intermediate" },
  ],

  links: {
    github: "https://github.com/dipSyxx",
    linkedin: "https://www.linkedin.com/in/yurii-linetskyi-10b857254/",
    telegram: "https://t.me/XdipsyX",
    cv: "/cv/Yurii_Linetskyi_CV_A4.pdf",
  },

  seo: {
    title: "Yurii Linetskyi | Frontend-focused Full-stack Developer",
    description:
      "Frontend-focused full-stack developer in Norway with 3 years of commercial experience in React, Next.js, TypeScript, SaaS products, and data-heavy workflows.",
    ogImage: "/opengraph-image.png",
  },
} as const;

export type Profile = typeof profile;
