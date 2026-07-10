export const profile = {
  name: "Yurii Linetskyi",
  title: "Frontend-focused Full-stack Developer",
  tagline:
    "I build scalable SaaS, mobile, and AI-powered products with React, Next.js, TypeScript, and reliable backend integrations.",
  email: "linetsky.yura@gmail.com",
  phone: "+47 968 08 211",
  location: "Stange, Norway",

  about: {
    intro:
      "Frontend-focused full-stack developer based in Stange, Norway, with nearly three years of commercial experience building SaaS products, internal tools, and production-ready applications.",
    description:
      "My core stack includes React, Next.js, TypeScript, JavaScript, React Native, and Expo. I also work with Node.js, PostgreSQL, Prisma, Supabase, Neon, REST APIs, authentication systems, Stripe, and AI integrations.",
    background:
      "I take ownership of features from requirements and architecture through implementation, testing, production debugging, and ongoing support. I focus on maintainable code, accessible interfaces, performance, and reliable user experiences.",
  },

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
      title: "Attention to detail",
      description:
        "Careful about UI polish, spacing, consistency, and edge cases",
    },
    {
      title: "Performance mindset",
      description:
        "I actively optimize load time, rendering, and overall responsiveness",
    },
    {
      title: "Ownership",
      description:
        "I like to take responsibility for features end-to-end and ship stable results",
    },
    {
      title: "Adaptability",
      description: "Quick to learn new tools and methods to improve efficiency",
    },
    {
      title: "Communication",
      description:
        "Clear, structured communication around tasks and technical decisions",
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
      type: "Project-based · Remote",
      period: "Aug 2023 - Present",
      highlights: [
        "Build and maintain commercial SaaS products across frontend and backend workflows.",
        "Create dashboards, reusable UI components, complex forms, and role-based user flows.",
        "Integrate REST APIs and work with data models, authentication, Stripe workflows, and AI-powered features.",
        "Investigate production issues and improve application performance, reliability, and maintainability.",
        "Take ownership of features from requirements and implementation through testing and ongoing support.",
      ],
    },
  ],

  education: [
    {
      school: "Uman Lyceum No. 1",
      degree: "Complete secondary education",
      period: "2012-2023",
    },
    {
      school: "Hamar katedralskole",
      degree: "Information Technology",
      period: "2025-2029",
    },
  ],

  languages: [
    { name: "Ukrainian", level: "Native" },
    { name: "English", level: "Intermediate" },
    { name: "Norwegian", level: "Intermediate" },
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
      "Frontend-focused full-stack developer based in Norway, building SaaS, mobile, and AI-powered products with React, Next.js, TypeScript, React Native, Node.js, and PostgreSQL.",
    ogImage: "/og.png",
  },
} as const;

export type Profile = typeof profile;
