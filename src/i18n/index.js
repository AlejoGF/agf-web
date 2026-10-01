import es from './es.json'
import en from './en.json'

export const DEFAULT_LANGUAGE = 'es'
export const dictionaries = { es, en }
export const LANGUAGES = Object.keys(dictionaries)

// Cada idioma se nombra en su propio idioma (buena práctica de accesibilidad).
export const LANGUAGE_NAMES = { es: 'Español', en: 'English' }
