export const coverLetter = {
  en: {
    salutation: "Dear Hiring Manager,",
    paragraphs: [
      "My name is Yurii Linetskyi. I am a frontend developer based in Norway with 2+ years of commercial experience building React and Next.js products with a strong focus on performance, UX, and reliability.",
      "At UDEX (remote, full-time), I build and maintain reusable UI components, integrate APIs, and manage predictable data flows with Redux/Zustand and modern frontend tooling.",
      "I recently optimized data-heavy flows using query tuning and caching strategies, which reduced server load and made bulk editing noticeably faster for end users.",
      "I am looking to contribute to a product team where clean architecture, measurable performance, and high UI quality matter. I am available to discuss how my experience can support your current application goals.",
    ],
    closing: "Best regards,",
    name: "Yurii Linetskyi",
    contactLine:
      "Stange/Hamar, Norway • linetsky.yura@gmail.com • +47 968 08 211 • https://github.com/dipSyxx • https://www.linkedin.com/in/yurii-linetskyi-10b857254/",
  },

  no: {
    salutation: "Kjære ansettelsesansvarlig,",
    paragraphs: [
      "Jeg heter Yurii Linetskyi og er frontend-utvikler bosatt i Norge. Jeg har over 2 års kommersiell erfaring med å bygge React- og Next.js-løsninger med fokus på ytelse, UX og stabilitet.",
      "Hos UDEX (remote, fulltid) bygger og vedlikeholder jeg gjenbrukbare UI-komponenter, integrerer API-er og jobber med forutsigbar state/dataflyt med Redux/Zustand og moderne frontend-verktøy.",
      "Jeg har nylig optimalisert data-tunge flyter gjennom query tuning og caching, noe som reduserte serverbelastning og gjorde bulk-redigering raskere for brukerne.",
      "Jeg ønsker å bidra i et produktteam der ren arkitektur, målbar ytelse og høy UI-kvalitet er viktig. Jeg tar gjerne en prat om hvordan erfaringen min kan støtte deres mål for applikasjonen.",
    ],
    closing: "Med vennlig hilsen,",
    name: "Yurii Linetskyi",
    contactLine:
      "Stange/Hamar, Norge • linetsky.yura@gmail.com • +47 968 08 211 • https://github.com/dipSyxx • https://www.linkedin.com/in/yurii-linetskyi-10b857254/",
  },
} as const;

export type Language = keyof typeof coverLetter;

