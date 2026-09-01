import type { Dictionary } from './en';

export const es: Dictionary = {
  lang: 'es',
  meta: {
    title: 'Andrés Lista — Desarrollador Web Full-Stack',
    description:
      'Andrés Lista es desarrollador web full-stack. Construye dashboards, herramientas internas y automatización con React, Node.js y AWS.',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
    resume: 'Currículum',
  },
  hero: {
    kicker: 'Desarrollador Web Full-Stack',
    name: 'Andrés Lista',
    tagline:
      'Construyo productos web rápidos y confiables: desde interfaces en React hasta los sistemas en Node.js y bases de datos SQL/NoSQL detrás de ellas.',
    location: 'Winter Garden, FL',
    ctaPrimary: 'Ponte en contacto',
    ctaSecondary: 'Ver experiencia',
  },
  about: {
    kicker: 'Sobre mí',
    title: 'Un poco sobre mi trabajo',
    paragraphs: [
      'Soy desarrollador full-stack enfocado en convertir procesos lentos, manuales y propensos a errores en sistemas rápidos y confiables. En los últimos años he construido dashboards, herramientas internas y automatización para negocios de bienes raíces, inversiones y salud.',
      'Trabajo cómodamente en todo el stack: React, TypeScript y Tailwind CSS en el frontend; Node.js, bases de datos SQL y NoSQL, y AWS en el backend, siempre priorizando código fácil de leer, probar y mantener.',
    ],
  },
  experience: {
    kicker: 'Experiencia',
    title: 'Dónde he trabajado',
    items: [
      {
        company: 'TDBIM Solutions LLC',
        mode: 'Remoto',
        location: 'Winter Garden, FL',
        role: 'Desarrollador Web Full-Stack',
        period: 'Enero 2024 – Presente',
        bullets: [
          'Desarrollé soluciones de software con React, Zustand, Tailwind CSS, MongoDB, MySQL y AWS para gestionar gastos de negocios inmobiliarios.',
          'Implementé un proceso de auditoría mensual con SQL para señalar inversiones de alto riesgo o gastos potencialmente fraudulentos.',
          'Lideré una hoja de ruta de funcionalidades para optimizar procesos, reducir la entrada manual de datos y aumentar la granularidad de los datos para un análisis más rápido.',
          'Creé un dashboard para monitorear el tiempo de proyectos en vivo, permitiendo a los stakeholders ver el avance en tiempo real y reasignar presupuesto de forma proactiva.',
          'Implementé un proceso de validación automatizado, logrando una reducción del 90% en el esfuerzo de pruebas manuales.',
        ],
      },
      {
        company: 'Lessa Investments LLC',
        mode: 'Híbrido',
        location: 'Orlando, FL',
        role: 'Desarrollador Web Full-Stack',
        period: 'Febrero 2022 – Diciembre 2023',
        bullets: [
          'Diseñé y desarrollé un dashboard personalizado (React, Recharts, TanStack Table, shadcn/ui, MySQL, AWS) para monitorear en tiempo real proyectos, presupuestos, plazos, gastos y facturas de los stakeholders.',
          'Realicé modelado financiero detallado (flujos de caja, valuaciones y factores de riesgo) que respaldó decisiones de inversión y contribuyó a un aumento del 32% en el retorno de los proyectos.',
          'Creé un sistema de reportes automatizado para mantener la transparencia y la confianza de los stakeholders.',
          'Implementé Document Intelligence Studio (Azure) para automatizar la entrada de datos de facturas y recibos, reduciendo el tiempo de procesamiento y los errores en un 99%.',
          'Desarrollé una API en Node.js escalable, reduciendo el tiempo de desarrollo en un 26%.',
          'Realicé pruebas unitarias y de integración que mejoraron la estabilidad del sistema en un 24% y redujeron los errores en un 20%.',
          'Aporté retroalimentación y revisiones de código que ayudaron a mejorar las herramientas internas del equipo.',
        ],
      },
      {
        company: 'Patients 4 You LLC',
        mode: 'Remoto',
        location: 'Phoenix, AZ',
        role: 'Desarrollo Web',
        period: 'Febrero 2018 – Noviembre 2019',
        bullets: [
          'Diseñé, desarrollé y mantuve un dashboard para generar reportes diarios, mensuales y anuales a partir de la API de CallRail, alcanzando 100% de precisión en los datos y eliminando el 90% de los reportes manuales.',
          'Identifiqué fallas en las llamadas de clientes que, al resolverse, generaron un aumento del 25% en clientes potenciales y una mejor calidad de servicio.',
          'Mejoré la confianza de los stakeholders y optimicé el proceso de registro para emergencias dentales.',
          'Incrementé en un 16% la programación de citas de emergencia mediante mejoras de proceso.',
          'Creé visualizaciones de análisis personalizadas con Recharts y Tableau.',
        ],
      },
    ],
  },
  projects: {
    kicker: 'Proyectos y Colaboraciones',
    title: 'Cosas que he construido y ayudado a construir',
    items: [
      {
        name: 'CEYBA',
        org: 'CEYBA LLC — SEO en Puerto Rico',
        location: 'Puerto Rico',
        description: 'Cofundador y desarrollador de soluciones de inteligencia de negocios para Puerto Rico.',
      },
      {
        name: 'VisualSAT',
        org: 'VisualSAT Perú S.A.C.',
        location: 'Lima, Perú',
        description:
          'Colaboré con product managers y diseñadores para mejorar la UX/UI, enfocándome en el tiempo de carga de página y la legibilidad del código mediante revisiones de código detalladas.',
      },
    ],
  },
  skills: {
    kicker: 'Habilidades',
    title: 'Herramientas con las que trabajo',
    groups: [
      {
        label: 'Lenguajes y Frameworks',
        items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Node.js', 'React', 'Next.js'],
      },
      {
        label: 'Bases de Datos y Web',
        items: ['MySQL', 'MongoDB', 'DynamoDB', 'PostgreSQL', 'Astro', 'HTML', 'CSS', 'Tailwind CSS'],
      },
      {
        label: 'Herramientas y Servicios',
        items: ['Git', 'Docker', 'AWS', 'Servicios RESTful', 'CI/CD', 'SDLC'],
      },
    ],
  },
  contact: {
    kicker: 'Contacto',
    title: 'Trabajemos juntos',
    description: '¿Tienes una oportunidad o un proyecto en mente? Me encantaría saber más.',
    emailLabel: 'Correo',
    locationLabel: 'Ubicación',
    linkedinLabel: 'LinkedIn',
    ctaEmail: 'Escríbeme',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Construido con Astro y Tailwind CSS.',
    backToTop: 'Volver arriba',
  },
  themeToggle: {
    light: 'Cambiar a tema claro',
    dark: 'Cambiar a tema oscuro',
  },
};
