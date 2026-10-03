import platziLogo from '../assets/logos/education/platzi.jpg'
import radiumRocketLogo from '../assets/logos/education/radium-rocket.jpg'
import coderhouseLogo from '../assets/logos/education/coderhouse.jpg'
import uaiLogo from '../assets/logos/education/uai.jpg'

// Educación, de la más reciente a la más antigua. `logo`: ícono cuadrado con su propio fondo.
export const education = [
  {
    id: 'platzi-webflow',
    title: {
      es: 'Webflow para Sitios No-code: Componentes, Layouts e Interacciones',
      en: 'Webflow for No-code Sites: Components, Layouts and Interactions',
    },
    institution: 'Platzi',
    logo: platziLogo,
    years: '2024',
  },
  {
    id: 'radium-rocket',
    title: { es: 'Become a Software Professional', en: 'Become a Software Professional' },
    institution: 'Radium Rocket',
    logo: radiumRocketLogo,
    years: '2022 — 2023',
  },
  {
    id: 'coderhouse-web',
    title: { es: 'Desarrollo Web', en: 'Web Development' },
    institution: 'Coderhouse',
    logo: coderhouseLogo,
    years: '2022',
  },
  {
    id: 'coderhouse-uxui',
    title: { es: 'Diseño UX/UI', en: 'UX/UI Design' },
    institution: 'Coderhouse',
    logo: coderhouseLogo,
    years: '2021',
  },
  {
    id: 'uai',
    title: { es: 'Licenciatura en Diseño Gráfico', en: "Bachelor's Degree in Graphic Design" },
    institution: 'Universidad Abierta Interamericana',
    logo: uaiLogo,
    years: '2014 — 2019',
    featured: true, // título de grado: ocupa dos columnas
  },
]
