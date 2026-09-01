export const en = {
  lang: 'en',
  meta: {
    title: 'Andrés Lista — Full-Stack Web Developer',
    description:
      'Andrés Lista is a full-stack web developer building dashboards, internal tools, and automation with React, Node.js, and AWS.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    resume: 'Résumé',
  },
  hero: {
    kicker: 'Full-Stack Web Developer',
    name: 'Andrés Lista',
    tagline:
      'I build fast, reliable web products — from React interfaces to the Node.js and SQL/NoSQL systems behind them.',
    location: 'Winter Garden, FL',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'View experience',
  },
  about: {
    kicker: 'About',
    title: 'A bit about my work',
    paragraphs: [
      'I’m a full-stack developer focused on turning slow, manual, error-prone processes into fast and reliable systems. Over the past several years I’ve built dashboards, internal tools, and automation for real estate, investment, and healthcare businesses.',
      'I work comfortably across the stack — React, TypeScript, and Tailwind CSS on the front end; Node.js, SQL and NoSQL databases, and AWS on the back end — and I care about code that’s easy to read, test, and hand off.',
    ],
  },
  experience: {
    kicker: 'Experience',
    title: 'Where I’ve worked',
    items: [
      {
        company: 'TDBIM Solutions LLC',
        mode: 'Remote',
        location: 'Winter Garden, FL',
        role: 'Full-Stack Web Developer',
        period: 'January 2024 – Present',
        bullets: [
          'Engineered software solutions using React, Zustand, Tailwind CSS, MongoDB, MySQL, and AWS to manage real estate business expenses.',
          'Implemented a monthly audit process using SQL to flag high-risk project investments and potentially fraudulent spending.',
          'Led a feature roadmap to streamline processes, reduce manual input, and increase data granularity for faster analysis.',
          'Built a dashboard to track live project time so stakeholders could see progress in real time and proactively reallocate budget.',
          'Implemented an automated validation process, cutting manual testing effort by 90%.',
        ],
      },
      {
        company: 'Lessa Investments LLC',
        mode: 'Hybrid',
        location: 'Orlando, FL',
        role: 'Full-Stack Web Developer',
        period: 'February 2022 – December 2023',
        bullets: [
          'Designed and built a custom dashboard (React, Recharts, TanStack Table, shadcn/ui, MySQL, AWS) to monitor stakeholder projects, budgets, timelines, expenses, and invoices in real time.',
          'Ran detailed financial modeling — cash flows, valuations, and risk factors — that informed investment decisions and contributed to a 32% increase in project returns.',
          'Built an automated reporting pipeline to maintain transparency and trust with stakeholders.',
          'Integrated Azure Document Intelligence Studio to automate invoice and receipt data entry, cutting processing time and errors by 99%.',
          'Engineered a scalable Node.js API, reducing development time by 26%.',
          'Wrote unit and integration tests that improved system stability by 24% and cut bugs by 20%.',
          'Gave feedback and code reviews that helped improve the team’s internal tools.',
        ],
      },
      {
        company: 'Patients 4 You LLC',
        mode: 'Remote',
        location: 'Phoenix, AZ',
        role: 'Web Development',
        period: 'February 2018 – November 2019',
        bullets: [
          'Designed, built, and maintained a dashboard generating daily, monthly, and yearly reports from the CallRail API, reaching 100% data accuracy and eliminating 90% of manual reporting.',
          'Surfaced flaws in customer calls that, once addressed, led to a 25% increase in potential customers and better service quality.',
          'Improved stakeholder confidence and streamlined the registration process for dental emergencies.',
          'Grew customer emergency scheduling by 16% through process improvements.',
          'Built custom analytics visualizations with Recharts and Tableau.',
        ],
      },
    ],
  },
  projects: {
    kicker: 'Projects & Collaborations',
    title: 'Things I’ve built and helped build',
    items: [
      {
        name: 'CEYBA',
        org: 'CEYBA LLC — SEO in Puerto Rico',
        location: 'Puerto Rico',
        description: 'Co-founder & developer of business intelligence solutions for Puerto Rico.',
      },
      {
        name: 'VisualSAT',
        org: 'VisualSAT Perú S.A.C.',
        location: 'Lima, Perú',
        description:
          'Collaborated with product managers and designers to improve UX/UI, focusing on page load time and code readability through thorough code reviews.',
      },
    ],
  },
  skills: {
    kicker: 'Skills',
    title: 'Tools I work with',
    groups: [
      {
        label: 'Languages & Frameworks',
        items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Node.js', 'React', 'Next.js'],
      },
      {
        label: 'Databases & Web',
        items: ['MySQL', 'MongoDB', 'DynamoDB', 'PostgreSQL', 'Astro', 'HTML', 'CSS', 'Tailwind CSS'],
      },
      {
        label: 'Tools & Services',
        items: ['Git', 'Docker', 'AWS', 'RESTful services', 'CI/CD', 'SDLC'],
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Let’s work together',
    description: 'Have an opportunity or a project in mind? I’d love to hear about it.',
    emailLabel: 'Email',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    ctaEmail: 'Say hello',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Astro & Tailwind CSS.',
    backToTop: 'Back to top',
  },
  themeToggle: {
    light: 'Switch to light theme',
    dark: 'Switch to dark theme',
  },
} as const;

export type Dictionary = typeof en;
