import { useTranslation } from '../hooks/useTranslation.js'
import { LANGUAGES, LANGUAGE_NAMES } from '../i18n/index.js'
import './LanguageToggle.css'

export default function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation()

  return (
    <div className="language-toggle" role="group" aria-label={t('language.label')}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          className="language-toggle__option"
          lang={code}
          aria-label={LANGUAGE_NAMES[code]}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
