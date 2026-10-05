import adhocLogo from '../assets/logos/companies/adhoc-icon.webp'
import airComputersLogo from '../assets/logos/companies/air-computers.svg'
import brunettiLogo from '../assets/logos/companies/brunetti-icon.webp'

// Experiencia laboral, de la más reciente a la más antigua.
// Fechas en formato 'AAAA-MM' (se formatean según el idioma). `logo` se muestra sobre un cuadrado blanco.
// `tech` va ordenado por importancia (de izquierda a derecha).
export const experience = [
  {
    id: 'adhoc',
    company: 'Adhoc',
    logo: adhocLogo,
    role: 'Product Expert & Web Developer — Odoo Website & eCommerce',
    start: '2024-06',
    end: '2026-10',
    highlights: {
      es: [
        'Lideré end-to-end los proyectos web de más de 50 clientes de retail, mayoristas y B2B (OneClick, Kion, Axel SA, entre otros): discovery, scoping, diseño UX/UI, desarrollo frontend (HTML, CSS, JavaScript, QWeb), configuración de eCommerce, go-live y soporte, acompañando a cada cliente en sus prioridades de negocio.',
        'Lideré el área técnico-funcional de Website & eCommerce: más de 70 casos resueltos de producto, personalizaciones, pasarelas de pago (Payway, Mercado Pago), envíos (Andreani, Envia.com), stock y catálogo.',
        'Diseñé la metodología de implementación web de la empresa (discovery, entregables estándar, estimaciones y quickstarts de scoping) y la certificación interna de Website & eCommerce para el equipo y los clientes.',
        'Lideré el rebranding del sitio corporativo de Adhoc y sus versiones para España, Chile y Uruguay, con formularios de lead generation integrados al CRM.',
        'Propuse una librería de snippets reutilizables, empaquetados como módulos de Odoo, y colaboré en la construcción de agentes y skills de IA para crear bloques web personalizados y agilizar proyectos de diseño web, reduciendo horas por proyecto y dando más autonomía al cliente.',
      ],
      en: [
        'Led end-to-end web projects for more than 50 retail, wholesale and B2B clients (OneClick, Kion, Axel SA, among others): discovery, scoping, UX/UI design, frontend development (HTML, CSS, JavaScript, QWeb), eCommerce setup, go-live and support, working closely with each client on their business priorities.',
        'Led the technical-functional area of Website & eCommerce: more than 70 cases solved across product, customizations, payment gateways (Payway, Mercado Pago), shipping (Andreani, Envia.com), stock and catalog.',
        "Designed the company's web implementation methodology (discovery, standard deliverables, estimates and scoping quickstarts) and the internal Website & eCommerce certification for the team and clients.",
        "Led the rebranding of Adhoc's corporate website and its versions for Spain, Chile and Uruguay, with lead generation forms integrated into the CRM.",
        'Proposed a library of reusable snippets packaged as Odoo modules, and helped build AI agents and skills to create custom web blocks and speed up web design projects, reducing hours per project and giving clients more autonomy.',
      ],
    },
    tech: ['odoo', 'figma', 'javascript', 'html5', 'css3', 'sass'],
  },
  {
    id: 'air-computers',
    company: 'Air Computers',
    logo: airComputersLogo,
    role: 'UX Developer',
    start: '2024-01',
    end: '2024-06',
    highlights: {
      es: ['Diseñé y desarrollé interfaces responsive a partir de prototipos en Figma, con HTML5, CSS3, JavaScript y React.'],
      en: ['Designed and built responsive interfaces from Figma prototypes, using HTML5, CSS3, JavaScript and React.'],
    },
    tech: ['figma', 'react', 'javascript', 'html5', 'css3'],
  },
  {
    id: 'brunetti',
    company: 'Brunetti Hermanos',
    logo: brunettiLogo,
    role: 'UX/UI Designer & UX Developer',
    start: '2019-04',
    end: '2023-12',
    highlights: {
      es: [
        'Lideré el diseño UX/UI end-to-end de los sitios de catálogo y eCommerce para Argentina y España, en desktop y mobile, sobre WordPress y Magento.',
        'Conduje investigación de usuarios, rediseñé la arquitectura de información y creé wireframes y prototipos en Figma validados con stakeholders.',
        'Diseñé piezas digitales e impresas y gestioné el catálogo web de productos.',
      ],
      en: [
        'Led end-to-end UX/UI design of the catalog and eCommerce websites for Argentina and Spain, on desktop and mobile, built on WordPress and Magento.',
        'Conducted user research, redesigned the information architecture and created wireframes and prototypes in Figma, validated with stakeholders.',
        'Designed digital and print materials and managed the online product catalog.',
      ],
    },
    tech: ['figma', 'magento', 'wordpress', 'photoshop', 'illustrator'],
  },
]
