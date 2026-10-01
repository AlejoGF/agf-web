import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext.js'
import { DEFAULT_LANGUAGE, dictionaries } from '../i18n/index.js'

const STORAGE_KEY = 'agf-lang'

function readSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved in dictionaries ? saved : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

// Busca una clave con puntos ("theme.toDark") dentro de un diccionario.
function lookup(dictionary, key) {
  return key.split('.').reduce((node, part) => node?.[part], dictionary)
}

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readSavedLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next) => {
    if (!(next in dictionaries)) return
    setLanguageState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Sin localStorage: el cambio funciona igual, solo no se recuerda.
    }
  }, [])

  const t = useCallback(
    (key) => {
      const value = lookup(dictionaries[language], key) ?? lookup(dictionaries[DEFAULT_LANGUAGE], key)
      if (value === undefined) {
        if (import.meta.env.DEV) console.warn(`[i18n] Falta la clave "${key}"`)
        return key
      }
      return value
    },
    [language],
  )

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
