import hseSmall from '../assets/projects/hse-800.webp'
import hseLarge from '../assets/projects/hse-1600.webp'
import adhocSmall from '../assets/projects/adhoc-800.webp'
import adhocLarge from '../assets/projects/adhoc-1600.webp'
import cxSmall from '../assets/projects/cx-800.webp'
import cxLarge from '../assets/projects/cx-1600.webp'
import brunettiSmall from '../assets/projects/brunetti-800.webp'
import brunettiLarge from '../assets/projects/brunetti-1600.webp'
import exentriSmall from '../assets/projects/exentri-800.webp'
import exentriLarge from '../assets/projects/exentri-1600.webp'

// Proyectos de la home: cada uno lleva a su caso de estudio en Behance.
// `colors` es el color de la marca de cada proyecto (texto sobre fondo con contraste de 8:1 o más).
// Cuando un proyecto tenga su caso dentro del sitio, sumarle `slug` y ProjectPage lo muestra en /proyectos/:slug.
export const projects = [
  {
    id: 'hse',
    name: 'HSE Ingeniería',
    concept: true,
    kind: { es: 'Sitio web', en: 'Website' },
    summary: {
      es: 'Laboratorio y consultora ambiental de Capitán Bermúdez, Santa Fe.',
      en: 'Environmental laboratory and consultancy in Capitán Bermúdez, Santa Fe.',
    },
    url: 'https://www.behance.net/gallery/257427297/HSE-Ingenieria-Case-Study',
    image: { small: hseSmall, large: hseLarge },
    alt: {
      es: 'Pantallas del sitio de HSE Ingeniería en escritorio y en celular',
      en: 'HSE Ingeniería website screens on desktop and mobile',
    },
    colors: { bg: '#06302b', fg: '#ffffff' },
  },
  {
    id: 'adhoc',
    name: 'Adhoc',
    kind: { es: 'Design system y sitio web', en: 'Design system and website' },
    summary: {
      es: 'Rebranding del sitio corporativo multipaís.',
      en: 'Rebranding of a multi-country corporate website.',
    },
    url: 'https://www.behance.net/gallery/257427091/Adhoc-Website-Design-System',
    image: { small: adhocSmall, large: adhocLarge },
    alt: {
      es: 'Pantallas del sitio de Adhoc en escritorio y en celular',
      en: 'Adhoc website screens on desktop and mobile',
    },
    colors: { bg: '#b9b0ef', fg: '#16161d' },
  },
  {
    id: 'cx',
    name: 'CX',
    kind: { es: 'Rediseño de tienda online', en: 'Online store redesign' },
    summary: {
      es: 'Notebooks, monitores y periféricos, con compra directa en el sitio.',
      en: 'Laptops, monitors and peripherals, with direct checkout on the site.',
    },
    url: 'https://www.behance.net/gallery/256842323/CX-Computacion-Rediseno-de-eCommerce',
    image: { small: cxSmall, large: cxLarge },
    alt: {
      es: 'Pantallas de la tienda de CX: inicio y página de producto',
      en: 'CX store screens: home page and product page',
    },
    colors: { bg: '#1b1b1f', fg: '#ffffff' },
  },
  {
    id: 'brunetti',
    name: 'Brunetti Hermanos',
    kind: { es: 'Sitio web y catálogo', en: 'Website and catalog' },
    summary: {
      es: 'Equipamiento gastronómico e industria alimenticia.',
      en: 'Equipment for food service and the food industry.',
    },
    url: 'https://www.behance.net/gallery/193165703/Brunetti-Hermanos-UXUI-Case-Study',
    image: { small: brunettiSmall, large: brunettiLarge },
    alt: {
      es: 'Inicio del sitio de Brunetti Hermanos con las categorías del catálogo',
      en: 'Brunetti Hermanos home page with the catalog categories',
    },
    colors: { bg: '#0f4c81', fg: '#ffffff' },
  },
  {
    id: 'exentri',
    name: 'Exentri Wallets',
    kind: { es: 'Tienda online responsive', en: 'Responsive online store' },
    summary: {
      es: 'Billeteras de cuero premium con protección RFID.',
      en: 'Premium leather wallets with RFID protection.',
    },
    url: 'https://www.behance.net/gallery/187282207/Exentri-Wallets-UXUI-Case-Study',
    image: { small: exentriSmall, large: exentriLarge },
    alt: {
      es: 'La tienda de Exentri Wallets en un celular, sobre una foto de producto',
      en: 'The Exentri Wallets store on a phone, over a product photo',
    },
    colors: { bg: '#3a2418', fg: '#ffffff' },
  },
]
