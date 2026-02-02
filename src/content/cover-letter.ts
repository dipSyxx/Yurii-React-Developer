export const coverLetter = {
  en: {
    salutation: "Dear Hiring Manager,",
    paragraphs: [
      "My name is Yurii Linetskyi, and I am a React Front-End Developer currently living in Norway. I would like to express my interest in opportunities where I can contribute to building modern, user-friendly web applications with React and Next.js.",
      "I have 2+ years of commercial experience and have been continuously improving my skills through self-education and real project work. In my daily work I focus on creating interactive interfaces, ensuring cross-browser compatibility, and delivering responsive design that works smoothly across devices.",
      "At UDEX (remote, full-time), I build reusable components, integrate APIs, and work with state management (Redux/Zustand) to keep applications fast and reliable. I also actively optimize performance by improving rendering, implementing lazy loading, and applying other techniques that reduce load time and improve Lighthouse results.",
      "My main goal as a frontend developer is to create intuitive interfaces, scalable components, and high-performance experiences, while collaborating effectively with backend systems and teams. I am motivated by learning, clean engineering practices, and delivering quality that users feel.",
      "I would be glad to discuss how my experience and mindset could fit your team. Thank you for your time and consideration.",
    ],
    closing: "Best regards,",
    name: "Yurii Linetskyi",
    contactLine: "Stange, Norway • linetsky.yura@gmail.com • +47 968 08 211",
  },

  no: {
    salutation: "Kjære ansettelsesansvarlig,",
    paragraphs: [
      "Jeg heter Yurii Linetskyi og er React Front-End utvikler bosatt i Norge. Jeg ønsker å uttrykke min interesse for muligheter der jeg kan bidra til å bygge moderne og brukervennlige webapplikasjoner med React og Next.js.",
      "Jeg har over 2 års kommersiell erfaring og utvikler meg kontinuerlig gjennom selvstudie og arbeid i reelle prosjekter. I hverdagen fokuserer jeg på å lage interaktive grensesnitt, sikre nettleserkompatibilitet og levere responsivt design som fungerer godt på ulike enheter.",
      "Hos UDEX (remote, fulltid) bygger jeg gjenbrukbare komponenter, integrerer API-er og jobber med state management (Redux/Zustand) for å gjøre applikasjoner raske og stabile. Jeg optimaliserer også ytelse gjennom forbedring av rendering, lazy loading og andre tiltak som reduserer lastetid og forbedrer Lighthouse-resultater.",
      "Mitt hovedmål som frontend-utvikler er å lage intuitive grensesnitt, skalerbare komponenter og høy ytelse, samtidig som jeg samarbeider godt med backend-systemer og team. Jeg er motivert av læring, ryddige utviklingsprinsipper og å levere kvalitet som brukerne merker.",
      "Jeg tar gjerne en prat om hvordan min erfaring og arbeidsmåte kan passe inn hos dere. Takk for at dere vurderer min søknad.",
    ],
    closing: "Med vennlig hilsen,",
    name: "Yurii Linetskyi",
    contactLine: "Stange, Norge • linetsky.yura@gmail.com • +47 968 08 211",
  },
} as const

export type Language = keyof typeof coverLetter
