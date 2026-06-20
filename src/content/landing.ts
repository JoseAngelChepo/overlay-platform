/**
 * Landing page copy for Overlay.
 * Wire to i18n (`src/messages/*.json`) when you need multiple locales.
 */

export type LandingNavItem = { label: string; href: string }

export type LandingBullet = { title: string; description: string }

export type LandingStep = { step: string; title: string; description: string }

export type LandingFaqItem = { question: string; answer: string }

export const landingContent = {
  brand: {
    name: "Overlay",
  },
  header: {
    nav: [
      { label: "Problema", href: "#problem" },
      { label: "Solución", href: "#solution" },
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ] satisfies LandingNavItem[],
    loginLabel: "Entrar",
    signupLabel: "Empezar",
    dashboardLabel: "Dashboard",
  },
  hero: {
    eyebrow: "Early access abierto",
    title: "El contenido es tuyo. La forma también.",
    lede:
      "Overlay desacopla el contenido de la web de la presentación que el publisher eligió por ti. Define una lente, extrae lo que importa, y consume la información en tus términos.",
    primaryCta: { label: "Empezar gratis", href: "/sign-up" },
    secondaryCta: { label: "Ver cómo funciona", href: "#how-it-works" },
  },
  problem: {
    id: "problem",
    eyebrow: "El problema",
    title: "La web está optimizada para el publisher, no para ti",
    lede:
      "Un mismo sitio se ve igual para todos aunque cada quien lo consuma con un objetivo distinto. El diseño que ves no es tuyo — es de quien publicó la página.",
    items: [
      {
        title: "Contenido enterrado en marketing",
        description:
          "Un VC que entra a la página de una startup tiene que cazar entre copy de marketing para encontrar el problema, la solución y la tracción.",
      },
      {
        title: "Accesibilidad que depende del publisher",
        description:
          "Tipografías diminutas, contrastes pésimos, layouts imposibles. Si el publisher no priorizó tu necesidad, tú cargas con el costo.",
      },
      {
        title: "Reader mode no es suficiente",
        description:
          "Limpiar el ruido visual no reorganiza ni reinterpreta. Overlay decide qué importa primero según quién está leyendo, no solo cómo se ve.",
      },
    ] satisfies LandingBullet[],
  },
  solution: {
    id: "solution",
    eyebrow: "La solución",
    title: "Tu versión de cualquier página, sin tocar el original",
    lede:
      "Overlay recubre el sitio con tu vista personalizada. El contenido original sigue ahí — tú solo decides cómo verlo y qué importa primero.",
    highlights: [
      "Separa forma y estructura en dos ejes independientes",
      "Lentes por persona o intención (VC, accesibilidad, ciudadano, comprador técnico)",
      "Extracción estructurada con Firecrawl — maneja JS y contenido dinámico",
    ],
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "Cómo funciona",
    title: "Define una lente. Overlay hace el resto.",
    steps: [
      {
        step: "01",
        title: "Define tu lente",
        description:
          "Una lente es un schema de qué información extraer y en qué orden presentarla. Puedes tener una para VC, otra para accesibilidad, otra para trámites.",
      },
      {
        step: "02",
        title: "Overlay extrae el contenido",
        description:
          "Firecrawl scrapea el sitio y devuelve JSON estructurado según tu schema — más allá del markdown crudo, manejando JS rendering y contenido dinámico.",
      },
      {
        step: "03",
        title: "Tu vista, al instante",
        description:
          "La capa de transformación genera la vista personalizada según la lente activa, separando estilo de estructura. Un mismo sitio, infinitas lecturas.",
      },
    ] satisfies LandingStep[],
  },
  features: {
    id: "features",
    eyebrow: "Por qué importa",
    title: "Soberanía sobre tu experiencia de información",
    items: [
      {
        title: "Forma y estructura independientes",
        description:
          "Cambia tipografía y color sin tocar la jerarquía, o reordena la información sin tocar el estilo. O ambos a la vez.",
      },
      {
        title: "Lentes por intención",
        description:
          "Cada lente entiende qué importa para ese rol: tracción para un VC, contraste para accesibilidad, el dato clave para un ciudadano.",
      },
      {
        title: "Extracción robusta",
        description:
          "Firecrawl maneja JS rendering, cookie banners, lazy-load y contenido dinámico — sin pelear con selectores frágiles.",
      },
      {
        title: "Demo pre-cacheado",
        description:
          "Contenido extraído listo para transformar al instante. El demo se ve instantáneo y no depende de latencia de scraping.",
      },
    ] satisfies LandingBullet[],
  },
  socialProof: {
    eyebrow: "El unbundling de la web",
    title: "Spotify desempaquetó el álbum. Overlay desempaqueta la página.",
    stats: [
      { value: "2 ejes", label: "Forma y estructura separados" },
      { value: "∞ lentes", label: "Una por persona o intención" },
      { value: "1 sitio", label: "Infinitas lecturas posibles" },
    ],
    quote: {
      text: "CSS Zen Garden demostró que el mismo HTML puede verse de mil formas. Overlay demuestra que puede leerse de mil formas.",
      attribution: "Overlay — El contenido es tuyo",
    },
  },
  faq: {
    id: "faq",
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Overlay reemplaza el sitio original?",
        answer:
          "No. Overlay lo recubre con tu versión. El contenido original sigue intacto — tú solo decides cómo verlo.",
      },
      {
        question: "¿En qué se diferencia de Reader Mode?",
        answer:
          "Reader mode limpia el ruido visual pero no reorganiza ni reinterpreta. Overlay decide qué importa primero según quién está leyendo, no solo quita elementos.",
      },
      {
        question: "¿Qué sitios soporta?",
        answer:
          "Cualquier página pública. Firecrawl maneja JS rendering y contenido dinámico, así que funciona en la mayoría de sitios modernos.",
      },
    ] satisfies LandingFaqItem[],
  },
  finalCta: {
    title: "¿Listo para leer la web en tus términos?",
    lede: "Crea tu cuenta, define tu primera lente, y transforma cualquier página en tu versión.",
    primaryCta: { label: "Crear cuenta gratis", href: "/sign-up" },
    secondaryCta: { label: "Entrar", href: "/sign-in" },
  },
  footer: {
    tagline: "El contenido es tuyo. La forma también.",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Contacto", href: "#" },
    ] satisfies LandingNavItem[],
    copyright: "© {year} Overlay. All rights reserved.",
  },
} as const
