// Contenido de la página /cv. Es el mismo texto que los PDF de public/cv/:
// si se actualiza el CV, cambiar los dos.
export const resumeContact = {
  name: 'Alejo Gonzalez Fittipaldi',
  location: 'Rosario, Argentina',
  email: 'alejo@alejogf.com',
  website: 'alejogf.com',
  links: [
    { label: 'linkedin.com/in/alejogf', url: 'https://www.linkedin.com/in/alejogf/' },
    { label: 'github.com/AlejoGF', url: 'https://github.com/AlejoGF' },
    { label: 'behance.net/AlejoGF', url: 'https://www.behance.net/AlejoGF' },
  ],
}

export const resume = {
  es: {
    role: 'UX/UI Designer & Frontend Developer · Website & eCommerce',
    summary:
      'UX/UI Designer y Frontend Developer con más de 7 años diseñando y desarrollando productos digitales, especializado en sitios web y eCommerce. Crecí de Diseñador Web a Product Expert y lideré los proyectos web de más de 50 clientes retail, wholesale y B2B. Combino diseño, desarrollo frontend y visión de producto: relevo necesidades de negocio, gestiono expectativas y las traduzco en soluciones escalables.',
    headings: {
      experience: 'Experiencia',
      skills: 'Skills',
      education: 'Educación',
      languages: 'Idiomas',
    },
    experience: [
      {
        company: 'Adhoc',
        description: 'Consultora Odoo',
        period: '2024 – 2026',
        roles: [
          {
            title: 'Product Expert · Odoo Website & eCommerce',
            period: 'abr 2026 – oct 2026',
            bullets: [
              'Lideré el área técnico-funcional de Website & eCommerce y resolví más de 70 casos de producto (customizations, pasarelas de pago Payway y Mercado Pago, envíos con Andreani y Envia.com, stock y catálogo).',
              'Diseñé la metodología de implementación web de la empresa: procedimiento, preguntas de discovery, entregables estándar, estimaciones y quickstarts de scoping.',
              'Propuse una librería de snippets reutilizables empaquetados como módulos de Odoo y colaboré en agentes y skills de IA para crear bloques web personalizados, reduciendo horas por proyecto.',
            ],
          },
          {
            title: 'Web Designer & eCommerce Developer',
            period: 'jun 2024 – oct 2026',
            bullets: [
              'Lideré de punta a punta los proyectos web de más de 50 clientes retail, wholesale y B2B (OneClick, Kion, Axel SA, entre otros).',
              'Gestioné el ciclo completo: discovery, scoping, diseño UX/UI, desarrollo frontend (HTML, CSS, JavaScript, QWeb), configuración de eCommerce, go-live y soporte.',
              'Lideré el rebranding del sitio corporativo de Adhoc y sus versiones para España, Chile y Uruguay, con formularios de lead generation integrados al CRM.',
            ],
          },
        ],
      },
      {
        company: 'Air Computers',
        description: 'Grupo Air',
        period: 'ene 2024 – jun 2024',
        roles: [
          {
            title: 'UX Developer',
            bullets: [
              'Diseñé y desarrollé interfaces responsive a partir de prototipos en Figma, con HTML5, CSS3 y JavaScript.',
            ],
          },
        ],
      },
      {
        company: 'Brunetti Hermanos',
        period: '2019 – 2023',
        roles: [
          {
            title: 'UX/UI Designer & UX Developer',
            period: 'abr 2020 – dic 2023',
            bullets: [
              'Lideré el diseño UX/UI end-to-end de los sitios de catálogo y eCommerce para Argentina y España, en desktop y mobile, sobre WordPress y Magento.',
              'Conduje user research, rediseñé la arquitectura de información y creé wireframes y prototipos en Figma validados con stakeholders.',
            ],
          },
          {
            title: 'Graphic & Web Designer',
            period: 'abr 2019 – mar 2020',
            bullets: ['Diseñé piezas digitales e impresas y gestioné el catálogo web de productos.'],
          },
        ],
      },
    ],
    skills: [
      { label: 'Diseño', items: 'Figma, UX/UI, prototipado, wireframes, arquitectura de información, user research' },
      { label: 'Frontend', items: 'HTML, CSS, SASS, JavaScript, React, Vite, Bootstrap, QWeb' },
      { label: 'Plataformas', items: 'Odoo Website & eCommerce, WordPress, Magento, Webflow' },
      { label: 'Producto', items: 'Discovery, scoping, estimaciones, gestión de clientes, capacitación' },
      { label: 'IA', items: 'Claude Code, agentes y skills de IA aplicados a diseño web' },
    ],
    education: {
      degree: 'Licenciatura en Diseño Gráfico',
      period: '2014 – 2017',
      school: 'UAI · Universidad Abierta Interamericana',
      coursesLabel: 'Cursos:',
      courses: 'Desarrollo Web · Diseño UX/UI · Webflow: componentes, layouts e interacciones',
    },
    languages: 'Español: nativo · Inglés: avanzado',
  },

  en: {
    role: 'UX/UI Designer & Frontend Developer · Website & eCommerce',
    summary:
      'UX/UI Designer and Frontend Developer with 7+ years designing and building digital products, specialized in websites and eCommerce. Grew from Web Designer to Product Expert and led web projects for 50+ retail, wholesale and B2B clients. I combine design, frontend development and product thinking: I gather business needs, manage expectations and turn them into scalable solutions.',
    headings: {
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
    },
    experience: [
      {
        company: 'Adhoc',
        description: 'Odoo consultancy',
        period: '2024 – 2026',
        roles: [
          {
            title: 'Product Expert · Odoo Website & eCommerce',
            period: 'Apr 2026 – Oct 2026',
            bullets: [
              'Led the technical-functional area of Website & eCommerce, solving 70+ product cases (customizations, Payway and Mercado Pago payment gateways, Andreani and Envia.com shipping, stock and catalog).',
              "Designed the company's web implementation methodology: process, discovery questions, standard deliverables, estimates and scoping quickstarts.",
              'Proposed a library of reusable snippets packaged as Odoo modules and collaborated on AI agents and skills that create custom web blocks, cutting hours per project.',
            ],
          },
          {
            title: 'Web Designer & eCommerce Developer',
            period: 'Jun 2024 – Oct 2026',
            bullets: [
              'Led end-to-end web projects for 50+ retail, wholesale and B2B clients (OneClick, Kion, Axel SA, among others).',
              'Managed the full cycle: discovery, scoping, UX/UI design, frontend development (HTML, CSS, JavaScript, QWeb), eCommerce setup, go-live and support.',
              "Led the rebranding of Adhoc's corporate site and its versions for Spain, Chile and Uruguay, with lead-generation forms integrated into the CRM.",
            ],
          },
        ],
      },
      {
        company: 'Air Computers',
        description: 'Grupo Air',
        period: 'Jan 2024 – Jun 2024',
        roles: [
          {
            title: 'UX Developer',
            bullets: ['Designed and built responsive interfaces from Figma prototypes with HTML5, CSS3 and JavaScript.'],
          },
        ],
      },
      {
        company: 'Brunetti Hermanos',
        period: '2019 – 2023',
        roles: [
          {
            title: 'UX/UI Designer & UX Developer',
            period: 'Apr 2020 – Dec 2023',
            bullets: [
              'Led end-to-end UX/UI design of the catalog and eCommerce sites for Argentina and Spain, on desktop and mobile, on WordPress and Magento.',
              'Conducted user research, redesigned the information architecture and created Figma wireframes and prototypes validated with stakeholders.',
            ],
          },
          {
            title: 'Graphic & Web Designer',
            period: 'Apr 2019 – Mar 2020',
            bullets: ['Designed digital and print pieces and managed the online product catalog.'],
          },
        ],
      },
    ],
    skills: [
      { label: 'Design', items: 'Figma, UX/UI, prototyping, wireframes, information architecture, user research' },
      { label: 'Frontend', items: 'HTML, CSS, SASS, JavaScript, React, Vite, Bootstrap, QWeb' },
      { label: 'Platforms', items: 'Odoo Website & eCommerce, WordPress, Magento, Webflow' },
      { label: 'Product', items: 'Discovery, scoping, estimates, client management, training' },
      { label: 'AI', items: 'Claude Code, AI agents and skills applied to web design' },
    ],
    education: {
      degree: "Bachelor's Degree in Graphic Design",
      period: '2014 – 2017',
      school: 'UAI · Universidad Abierta Interamericana',
      coursesLabel: 'Courses:',
      courses: 'Web Development · UX/UI Design · Webflow: components, layouts and interactions',
    },
    languages: 'Spanish: native · English: advanced',
  },
}
