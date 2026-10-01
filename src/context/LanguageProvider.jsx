import { useCallback, useEffect, useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
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

    // Mismo fundido que el cambio de tema, para que el cambio de textos
    // (y del ancho del header) no sea brusco. Sin soporte, el cambio es directo.
    const apply = () => flushSync(() => setLanguageState(next))
    if (document.startViewTransition) document.startViewTransition(apply)
    else apply()

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
