export const coverLetter = {
  en: {
    salutation: "Dear Hiring Manager,",
    paragraphs: [
      "My name is Yurii Linetskyi, and I am a frontend developer based in Norway with 2+ years of commercial experience building modern web applications with React and Next.js.",
      "I focus on creating user-friendly interfaces that are responsive, accessible, and reliable. In my daily work, I prioritize clean architecture, reusable components, and maintainable code.",
      "My core stack includes React, Next.js, TypeScript, Tailwind CSS, Redux/Zustand, and REST API integration. I work closely with backend systems and continuously optimize performance, loading speed, and overall user experience.",
      "I am looking to join a product-focused team where I can contribute to high-quality application development and keep growing as an engineer. I would be glad to discuss how my experience can support your product goals.",
    ],
    closing: "Best regards,",
    name: "Yurii Linetskyi",
    contactLine:
      "Stange/Hamar, Norway • linetsky.yura@gmail.com • +47 968 08 211 • https://github.com/dipSyxx • https://www.linkedin.com/in/yurii-linetskyi-10b857254/",
  },

  no: {
    salutation: "Kjære ansettelsesansvarlig,",
    paragraphs: [
      "Jeg heter Yurii Linetskyi og er frontend-utvikler bosatt i Norge, med over 2 års kommersiell erfaring i å bygge moderne webapplikasjoner med React og Next.js.",
      "Jeg fokuserer på å lage brukervennlige grensesnitt som er responsive, tilgjengelige og stabile. I det daglige arbeidet prioriterer jeg ren arkitektur, gjenbrukbare komponenter og vedlikeholdbar kode.",
      "Min kjerne-stack inkluderer React, Next.js, TypeScript, Tailwind CSS, Redux/Zustand og integrasjon av REST API-er. Jeg samarbeider godt med backend-systemer og jobber kontinuerlig med ytelse, lastetid og total brukeropplevelse.",
      "Jeg ønsker å bli en del av et produktfokusert team der jeg kan bidra til applikasjoner av høy kvalitet og fortsette å utvikle meg som utvikler. Jeg tar gjerne en prat om hvordan min erfaring kan støtte deres produktmål.",
    ],
    closing: "Med vennlig hilsen,",
    name: "Yurii Linetskyi",
    contactLine:
      "Stange/Hamar, Norge • linetsky.yura@gmail.com • +47 968 08 211 • https://github.com/dipSyxx • https://www.linkedin.com/in/yurii-linetskyi-10b857254/",
  },
} as const;

export type Language = keyof typeof coverLetter;
