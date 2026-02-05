export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image?: string;
  links: {
    repo?: string;
    demo?: string;
  };
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "circular-economy-hamar",
    title: "SirkulærHamar",
    tagline: "Circular economy platform for Hamar (Norway)",
    description:
      "A Next.js platform that helps residents make sustainable choices with a local actors directory, map, decision wizard, calculators, quizzes, and an admin panel for moderation.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Postgres",
      "Leaflet",
      "Framer Motion",
    ],
    image: "/projects/sircular.png",
    links: {
      repo: "https://github.com/dipSyxx/circular-economy-hamar",
      demo: "https://circular-economy-hamar.vercel.app/",
    },
    highlights: [
      "Actors directory with search, filters, favorites, and detailed profiles",
      "Interactive map with routing, geolocation, and opening-hours status",
      "Decision wizard + repair calculator with impact/CO2e metrics",
      "Admin panel for moderation and CRUD across resources",
    ],
  },
  {
    id: "pillmind-medication-platform",
    title: "PillMind Medication Platform",
    tagline: "Medication management workspace + marketing site",
    description:
      "A full-stack platform that pairs an authenticated patient workspace with analytics and branded marketing pages, built on Next.js 15 App Router for a mobile-first experience.",
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zustand",
    ],
    image: "/projects/pillmind.png",
    links: {
      repo: "https://github.com/dipSyxx/PillMind",
      demo: "https://v0-pill-mind-landing-page.vercel.app/",
    },
    highlights: [
      "Patient workspace for schedules, dose logging, snooze flows, and adherence metrics",
      "Analytics and inventory insights with timezone-aware medication utilities",
      "Account management hub with NextAuth (credentials, Google, GitHub)",
      "Marketing site + brandbook for consistent product storytelling",
    ],
  },
  {
    id: "hamartech-web",
    title: "HamarTech Web Application",
    tagline: "Festival management platform for HamarTech",
    description:
      "A full-featured festival hub for event discovery, ticket reservations, QR code check-ins, and admin operations for a week-long tech and creativity festival.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Framer Motion",
    ],
    image: "/projects/hamartech.png",
    links: {
      repo: "https://github.com/dipSyxx/hamartech-web",
      demo: "https://hamartech-web.vercel.app/",
    },
    highlights: [
      "Public program browser with track/day filters and event detail pages",
      "Ticket reservations with QR code generation and email confirmations",
      "Approver tools for QR scanning, manual validation, and check-in history",
      "Admin dashboard for users, events, venues, reservations, and audit logs",
    ],
  },
  {
    id: "oda-remake",
    title: "odaRemake",
    tagline: "Grocery delivery experience remake",
    description:
      "A learning-focused full-stack remake of Oda's grocery experience with a Next.js 16 App Router frontend and a Prisma-backed API for catalog, carts, orders, and users.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zustand",
    ],
    image: "/projects/oda.png",
    links: {
      repo: "https://github.com/dipSyxx/odaRemake",
      demo: "https://oda-remake.vercel.app/",
    },
    highlights: [
      "Animated landing sections with shared Framer Motion presets",
      "Category browsing with filters, pagination, and inline add-to-cart",
      "Cart → checkout → success flow powered by reusable cart actions",
      "REST API for products, categories, carts, orders, and users",
    ],
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
