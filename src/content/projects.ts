export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  type: string;
  role: string;
  status: "Pilot · In development" | "Completed";
  featured: boolean;
  tags: string[];
  image?: string;
  links: {
    repo?: string;
    demo?: string;
  };
  highlights: string[];
  caseStudy?: {
    problem: string;
    role: string;
    challenges: string[];
    decisions: string[];
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: "kantinapp",
    title: "KantinApp",
    tagline: "Multi-school canteen platform for students and administrators",
    description:
      "KantinApp is an independent, full-stack multi-school canteen product with a mobile application for students, a web administration platform, and a public website. Students can view weekly menus, check allergens, save favourite dishes, vote, indicate demand, receive push notifications, and submit feedback. Canteen teams can manage daily workflows and analytics to improve planning and reduce food waste. The product is in active development and currently running as a pilot at Hamar katedralskole.",
    type: "Mobile app · Administration platform",
    role: "Founder & Full-stack Developer",
    status: "Pilot · In development",
    featured: true,
    tags: [
      "React Native",
      "Expo",
      "Next.js 15",
      "TypeScript",
      "TanStack Query",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Tailwind CSS",
      "Vercel",
    ],
    image: "/projects/kantinapp.webp",
    links: {
      demo: "https://kantinapp.app/",
    },
    highlights: [
      "Published as a native mobile application for both iOS and Android.",
      "Pilot at Hamar katedralskole with active product development.",
      "Expo and React Native mobile app with offline-ready menu and dish data.",
      "Next.js administration platform with role-based access, analytics, and multi-school support.",
      "PostgreSQL and Prisma data model for schools, menus, dishes, votes, favourites, demand, tips, and notifications.",
    ],
    caseStudy: {
      problem:
        "Students need a simple way to understand the weekly menu and signal demand, while canteen teams need operational tools that turn those signals into better planning.",
      role:
        "As founder and full-stack developer, I own product architecture and delivery across the student mobile application, web administration platform, and the data and API layers connecting both surfaces.",
      challenges: [
        "Keep menu and dish information useful when the mobile connection is unreliable.",
        "Support role-based workflows and data separation across multiple schools.",
        "Connect votes, favourites, demand, feedback, and notifications to practical canteen planning.",
      ],
      decisions: [
        "Use React Native and Expo for the student application and Next.js for the administration platform.",
        "Model schools, menus, dishes, votes, demand, and notifications relationally with Prisma and PostgreSQL.",
        "Treat offline-ready menu and dish data as part of the core mobile experience.",
      ],
      result:
        "The native iOS and Android application and multi-school administration platform are running as a pilot at Hamar katedralskole while the product remains in active development.",
    },
  },
  {
    id: "circular-economy-hamar",
    title: "Sirkulær Norge",
    tagline: "Circular economy platform for Hamar (Norway)",
    description:
      "Sirkulær Norge is a Next.js platform that helps residents make sustainable choices with a directory of local businesses and services, a map, decision wizard, calculators, quizzes, and an admin panel for moderation.",
    type: "Public platform · Administration",
    role: "Full-stack Developer",
    status: "Completed",
    featured: true,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Leaflet",
      "Framer Motion",
    ],
    image: "/projects/sircular.webp",
    links: {
      repo: "https://github.com/dipSyxx/circular-economy-hamar",
      demo: "https://circular-economy-hamar.vercel.app/",
    },
    highlights: [
      "Directory of local businesses and services with search, filters, favorites, and detailed profiles",
      "Interactive map with routing, geolocation, and opening-hours status",
      "Decision wizard + repair calculator with impact/CO2e metrics",
      "Admin panel for moderation and CRUD across resources",
    ],
    caseStudy: {
      problem:
        "Local repair, reuse, and recycling options can be difficult to discover or compare, which makes the sustainable choice harder than it needs to be.",
      role:
        "I designed and built the full-stack product surface, including discovery tools, interactive guidance, mapping, and the moderation workflow.",
      challenges: [
        "Present local businesses and services through search, filters, profiles, and map-based discovery.",
        "Turn broad sustainability guidance into useful decisions through calculators, quizzes, and a guided wizard.",
        "Give administrators a manageable way to moderate and maintain the underlying resources.",
      ],
      decisions: [
        "Combine directory and Leaflet map views so users can choose the discovery mode that fits their task.",
        "Use focused decision tools instead of relying on a single long informational page.",
        "Keep public discovery and administrative maintenance in one typed Next.js and Prisma application.",
      ],
      result:
        "The completed platform brings local businesses and services, guidance tools, impact information, and content administration into one coherent circular-economy product.",
    },
  },
  {
    id: "pillmind-medication-platform",
    title: "PillMind",
    tagline: "Medication management workspace + marketing site",
    description:
      "A full-stack platform that pairs an authenticated patient workspace with analytics and branded marketing pages, built on Next.js 15 App Router for a mobile-first experience.",
    type: "SaaS workspace · Marketing site",
    role: "Full-stack Developer",
    status: "Completed",
    featured: true,
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
    image: "/projects/pillmind.webp",
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
    caseStudy: {
      problem:
        "Medication schedules, dose history, and remaining supply are difficult to understand when they live in separate reminders and notes.",
      role:
        "I built the mobile-first product across the authenticated patient workspace, medication workflows, analytics, account management, and public brand surface.",
      challenges: [
        "Keep schedules, dose logging, snooze actions, and adherence information coherent across timezones.",
        "Turn medication history into useful analytics without making the daily workflow feel clinical or heavy.",
        "Connect authentication, account management, inventory, and the public marketing experience as one product.",
      ],
      decisions: [
        "Use the Next.js App Router for one typed application spanning the public site and authenticated workspace.",
        "Centralize timezone-aware medication utilities so schedules and analytics share the same rules.",
        "Design the core experience around immediate daily actions, with deeper adherence and inventory detail available when needed.",
      ],
      result:
        "The completed platform combines schedules, dose logging, snooze flows, adherence analytics, inventory insight, account management, and a consistent public brand experience.",
    },
  },
  {
    id: "hamartech-web",
    title: "HamarTech",
    tagline: "Festival management platform for HamarTech",
    description:
      "A full-featured festival hub for event discovery, ticket reservations, QR code check-ins, and admin operations for a week-long tech and creativity festival.",
    type: "Event platform · Operations",
    role: "Full-stack Developer",
    status: "Completed",
    featured: true,
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
    image: "/projects/hamartech.webp",
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
    caseStudy: {
      problem:
        "A multi-day festival needs one clear experience for finding events and reserving tickets, plus dependable tools for check-in and administration.",
      role:
        "I built the public program, reservation journey, QR-based attendance flow, and the operational tools used to manage the festival data.",
      challenges: [
        "Make a full week of events easy to browse by day and track.",
        "Carry a reservation from public discovery through confirmation and QR check-in.",
        "Support both fast scanning at the venue and detailed administration behind the scenes.",
      ],
      decisions: [
        "Organize the public program around day and track filters with dedicated event detail pages.",
        "Generate QR codes and email confirmations as part of the reservation workflow.",
        "Separate streamlined approver tools from the broader administration dashboard.",
      ],
      result:
        "The platform covers the visitor journey from program discovery to entry and gives the event team tools for validation, users, venues, reservations, and audit history.",
    },
  },
  {
    id: "oda-remake",
    title: "odaRemake",
    tagline: "Grocery delivery experience remake",
    description:
      "A learning-focused full-stack remake of Oda's grocery experience with a Next.js 16 App Router frontend and a Prisma-backed API for catalog, carts, orders, and users.",
    type: "Commerce study",
    role: "Full-stack Developer",
    status: "Completed",
    featured: true,
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
    image: "/projects/oda.webp",
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
    caseStudy: {
      problem:
        "A grocery storefront is a useful systems challenge: discovery, cart state, checkout, and account data all need to feel like one uninterrupted flow.",
      role:
        "I built this learning-focused full-stack remake across the storefront, catalogue interactions, cart and checkout journey, API, and relational data model.",
      challenges: [
        "Keep category browsing, filters, pagination, and inline cart actions fast and predictable.",
        "Carry cart state through checkout and success without duplicating business logic across screens.",
        "Model products, categories, carts, orders, and users behind a coherent application API.",
      ],
      decisions: [
        "Use reusable cart actions as the shared boundary between catalogue, cart, and checkout interfaces.",
        "Build the application with Next.js App Router and a Prisma-backed REST API.",
        "Treat the project as a product-systems study rather than a visual landing-page copy.",
      ],
      result:
        "The result is a working full-stack commerce study covering catalogue discovery, cart operations, checkout, order completion, users, and the supporting API.",
    },
  },
  {
    id: "norsk-coach-ai",
    title: "NorskCoach",
    tagline: "AI Norwegian tutor with chat, vocabulary SRS, and quiz analytics",
    description:
      "A full-stack Norwegian learning app that combines guided AI chat, automatic correction, vocabulary extraction, spaced-repetition review, and quiz-based learning analytics for measurable progress.",
    type: "AI learning product",
    role: "Full-stack Developer",
    status: "Completed",
    featured: true,
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "AI SDK",
      "OpenAI",
      "SWR",
      "shadcn/ui",
    ],
    image: "/projects/norskcoach.webp",
    links: {
      repo: "https://github.com/dipSyxx/norsk-coach-ai",
      demo: "https://norsk-coach-ai.vercel.app/",
    },
    highlights: [
      "Personalized chat tutor with configurable level, learning goal, coach style, and explanation language",
      "Automatic vocabulary and grammar extraction from conversations with deduplication and taxonomy",
      "Dedicated Ordquiz flow with SRS scheduling, per-answer review updates, and requeue logic for weak words",
      "Learning analytics dashboard with streaks, completion rate, known/unknown ratio, and retention-oriented metrics",
    ],
    caseStudy: {
      problem:
        "Conversation practice is most useful when corrections, new vocabulary, and review are connected instead of disappearing when a chat ends.",
      role:
        "I built the authenticated learning product across the AI conversation flow, vocabulary pipeline, review system, analytics, and supporting data model.",
      challenges: [
        "Adapt conversation and explanations to different proficiency levels and learning goals.",
        "Extract useful vocabulary and grammar without creating duplicate or unstructured learning material.",
        "Turn conversation history into repeatable review and measurable progress.",
      ],
      decisions: [
        "Make tutor level, goal, coaching style, and explanation language configurable.",
        "Classify and deduplicate vocabulary and grammar extracted from conversations.",
        "Use spaced-repetition scheduling and per-answer updates to drive the review queue.",
      ],
      result:
        "The application connects guided AI conversation, corrections, vocabulary capture, spaced review, quizzes, and learning analytics in one workflow.",
    },
  },
];

const featuredProjectIds = [
  "kantinapp",
  "hamartech-web",
  "circular-economy-hamar",
  "norsk-coach-ai",
  "pillmind-medication-platform",
  "oda-remake",
] as const;

export const featuredProjects = featuredProjectIds.flatMap((id) => {
  const project = projects.find(
    (candidate) => candidate.id === id && candidate.featured && candidate.caseStudy,
  );
  return project ? [project] : [];
});

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();
