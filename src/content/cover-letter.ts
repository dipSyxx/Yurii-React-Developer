export const coverLetter = {
  en: {
    salutation: "Dear Hiring Manager,",
    paragraphs: [
      "My name is Yurii Linetskyi, and I am a frontend-focused full-stack developer based in Stange, Norway, with nearly three years of commercial experience building SaaS products, internal tools, mobile apps, and production-ready applications.",
      "My core stack includes React, Next.js, TypeScript, JavaScript, React Native, and Expo. I also work with Node.js, PostgreSQL, Prisma, Supabase, Neon, REST APIs, authentication systems, Stripe workflows, and AI-powered features.",
      "In my ongoing project-based remote role with UDEX, I build and maintain commercial SaaS products across frontend and backend workflows. I create dashboards, reusable UI components, complex forms, role-based user flows, and investigate production issues to improve performance, reliability, and maintainability.",
      "My selected projects show the same range in practice: mobile applications, web administration panels, authenticated dashboards, analytics, notifications, and data models built for real product workflows.",
      "I am looking to contribute to a product-focused team where I can take ownership of features from requirements and architecture through implementation, testing, production debugging, and ongoing support. I would be glad to discuss how my experience can support your product goals.",
    ],
    closing: "Best regards,",
    name: "Yurii Linetskyi",
    contactLine:
      "Stange, Norway • linetsky.yura@gmail.com • +47 968 08 211 • https://github.com/dipSyxx",
  },

  no: {
    salutation: "Kjære ansettelsesansvarlig,",
    paragraphs: [
      "Jeg heter Yurii Linetskyi og er en frontend-fokusert fullstack-utvikler bosatt i Stange, Norge, med nesten tre års kommersiell erfaring med å bygge SaaS-produkter, interne verktøy, mobilapper og produksjonsklare applikasjoner.",
      "Min kjerne-stack inkluderer React, Next.js, TypeScript, JavaScript, React Native og Expo. Jeg jobber også med Node.js, PostgreSQL, Prisma, Supabase, Neon, REST API-er, autentiseringssystemer, Stripe-flyter og AI-drevne funksjoner.",
      "I min pågående prosjektbaserte fjernrolle hos UDEX bygger og vedlikeholder jeg kommersielle SaaS-produkter på tvers av frontend- og backend-arbeidsflyter. Jeg lager dashboards, gjenbrukbare UI-komponenter, komplekse skjemaer, rollebaserte brukerflyter og undersøker produksjonsfeil for å forbedre ytelse, stabilitet og vedlikeholdbarhet.",
      "Mine utvalgte prosjekter viser den samme bredden i praksis: mobilapplikasjoner, webbaserte administrasjonspaneler, autentiserte dashboards, analyse, varsler og datamodeller bygget for reelle produktflyter.",
      "Jeg ønsker å bidra i et produktfokusert team der jeg kan ta eierskap til funksjoner fra krav og arkitektur til implementering, testing, produksjonsdebugging og videre support. Jeg tar gjerne en prat om hvordan min erfaring kan støtte deres produktmål.",
    ],
    closing: "Med vennlig hilsen,",
    name: "Yurii Linetskyi",
    contactLine:
      "Stange, Norge • linetsky.yura@gmail.com • +47 968 08 211 • https://github.com/dipSyxx",
  },
} as const;

export type Language = keyof typeof coverLetter;
