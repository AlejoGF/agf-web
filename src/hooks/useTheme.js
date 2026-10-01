import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.js'

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme debe usarse dentro de <ThemeProvider>')
  return context
}
