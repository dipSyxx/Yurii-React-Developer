export const profile = {
  name: "Yurii",
  title: "React Front-End Developer",
  tagline:
    "I build modern, user-friendly React/Next.js interfaces with strong performance, clean architecture, and polished micro-interactions.",
  email: "linetsky.yura@gmail.com",
  phone: "+47 968 08 211",
  location: "Stange, Norway",

  about: {
    intro:
      "I'm a young and ambitious React Front-End developer. I was born in Ukraine and currently live in Norway.",
    description:
      "I've been self-educating and working commercially for 2+ years, building interactive web interfaces with React and Next.js. I care about UI quality, browser compatibility, responsiveness, and delivering a smooth user experience.",
    background:
      "I focus on reusable components, reliable state management, API integration, and performance optimization (lazy loading, caching strategies, rendering optimizations) to improve UX and Lighthouse results.",
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
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS / Sass",
      "TailwindCSS",
      "Mantine / shadcn/ui",
      "Redux / Zustand",
    ],
    backend: ["PostgreSQL", "Prisma", "REST APIs"],
    tools: ["Git", "VS Code"],
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
      role: "(Low-Code/Code) Full-stack Developer",
      logo: "/udex/udex.jpg",
      type: "Full-time - Remote",
      period: "Aug 2023 - present",
      highlights: [
        "Build modern, interactive, user-friendly interfaces using HTML, CSS, JavaScript, React, Next.js",
        "Implement responsive design for different devices while keeping high performance and fast loading",
        "Integrate APIs for data acquisition and processing; manage application state for reliability and speed",
        "Create reusable components and maintain/improve existing codebases",
        "Optimize frontend performance: rendering improvements, caching, lazy loading, Lighthouse optimizations",
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
    cv: "cv/cv.pdf",
  },

  seo: {
    title: "Yurii Linetskyi | React Front-End Developer",
    description:
      "React Front-End developer building modern, responsive, high-performance web interfaces with React, Next.js, TypeScript, and strong focus on UX and Lighthouse performance.",
    ogImage: "/og.png",
  },
} as const;

export type Profile = typeof profile;
