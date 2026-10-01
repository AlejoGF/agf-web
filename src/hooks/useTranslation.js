import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.js'

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useTranslation debe usarse dentro de <LanguageProvider>')
  return context
}
