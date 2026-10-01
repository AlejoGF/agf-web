import { useTranslation } from '../hooks/useTranslation.js'
import { LANGUAGES } from '../i18n/index.js'
import './LanguageToggle.css'

// Muestra el idioma actual; al tocarlo pasa al siguiente.
export default function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation()
  const next = LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length]

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={() => setLanguage(next)}
      aria-label={t('language.switch')}
      title={t('language.switch')}
    >
      {language.toUpperCase()}
    </button>
  )
}
