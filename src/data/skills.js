// Skills agrupadas, cada grupo ordenado por importancia (de izquierda a derecha).
// Cada ítem es un logo de src/data/techLogos.js ({ logo }) o un texto en ambos idiomas ({ label }).
// `name` reemplaza el nombre del logo (ej. Claude Code usa el logo de Claude).
// `highlight` marca las skills destacadas.
export const skillGroups = [
  {
    id: 'design',
    title: { es: 'Diseño UX/UI', en: 'UX/UI Design' },
    items: [
      { logo: 'figma', highlight: true },
      { logo: 'xd' },
      { logo: 'photoshop' },
      { logo: 'illustrator' },
      { label: { es: 'Investigación de usuarios', en: 'User research' } },
      { label: { es: 'Arquitectura de información', en: 'Information architecture' } },
      { label: { es: 'Wireframes y prototipos', en: 'Wireframes & prototypes' } },
      { label: { es: 'Design systems', en: 'Design systems' } },
    ],
  },
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      { logo: 'react', highlight: true },
      { logo: 'javascript' },
      { logo: 'html5' },
      { logo: 'css3' },
      { logo: 'sass' },
      { logo: 'bootstrap' },
      { label: { es: 'QWeb', en: 'QWeb' } },
      { label: { es: 'Diseño responsive', en: 'Responsive design' } },
    ],
  },
  {
    id: 'ecommerce',
    title: { es: 'eCommerce y CMS', en: 'eCommerce & CMS' },
    items: [
      { logo: 'odoo', highlight: true },
      { logo: 'magento' },
      { logo: 'wordpress' },
      { logo: 'webflow' },
      { label: { es: 'Integraciones de pago y envío', en: 'Payment & shipping integrations' } },
    ],
  },
  {
    id: 'ai',
    title: { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
    items: [
      { logo: 'claude', name: 'Claude Code', highlight: true },
      { logo: 'claude', name: 'Claude' },
      { logo: 'claude', name: 'Claude Design' },
      { label: { es: 'ChatGPT', en: 'ChatGPT' } },
      { label: { es: 'Tuqui IA (Odoo + IA)', en: 'Tuqui IA (Odoo + AI)' } },
      { label: { es: 'Agentes y skills de IA', en: 'AI agents & skills' } },
    ],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tools' },
    items: [{ logo: 'git' }, { logo: 'github' }, { logo: 'vscode' }, { logo: 'vite' }],
  },
  {
    id: 'product',
    title: { es: 'Producto y clientes', en: 'Product & clients' },
    items: [
      { label: { es: 'Discovery y scoping', en: 'Discovery & scoping' } },
      { label: { es: 'Estimaciones', en: 'Estimates' } },
      { label: { es: 'Gestión de stakeholders', en: 'Stakeholder management' } },
      { label: { es: 'Capacitación y documentación', en: 'Training & documentation' } },
    ],
  },
]
