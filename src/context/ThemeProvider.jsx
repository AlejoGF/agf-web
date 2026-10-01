import { useEffect, useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
import { ThemeContext } from './ThemeContext.js'

// Misma clave que public/theme-init.js
const STORAGE_KEY = 'agf-theme'

function readSavedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Sin localStorage (modo privado, bloqueado): el tema funciona igual, solo no se recuerda.
  }
}

// theme-init.js ya aplicó data-theme en <html> antes de cargar React.
function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Si el usuario nunca eligió un tema, seguir los cambios del sistema operativo.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      if (!readSavedTheme()) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        saveTheme(next)

        const applyTheme = () => {
          document.documentElement.dataset.theme = next
          flushSync(() => setTheme(next))
        }

        // Fundido suave entre temas con la View Transitions API. Se mantiene aunque el usuario
        // prefiera reducir movimiento, porque es solo opacidad (sin desplazamientos).
        // Sin soporte del navegador, el cambio es directo.
        if (!document.startViewTransition) {
          applyTheme()
          return
        }
        document.startViewTransition(applyTheme)
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
