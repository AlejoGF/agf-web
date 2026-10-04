import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import './NotFound.css'

// Accesos rápidos a la home y sus secciones
const LINKS = [
  { to: '/', key: 'notFound.home' },
  { to: '/#experience', key: 'sections.experience' },
  { to: '/#skills', key: 'sections.skills' },
  { to: '/#contact', key: 'sections.contact' },
]

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main id="main" tabIndex={-1} className="not-found">
      <p className="not-found__code" aria-hidden="true">
        404
      </p>
      <h1 className="not-found__title">{t('notFound.title')}</h1>
      <p className="not-found__text">{t('notFound.text')}</p>

      <nav className="not-found__links" aria-label={t('notFound.linksLabel')}>
        {LINKS.map((link) => (
          <Link key={link.to} to={link.to} className="not-found__link">
            {t(link.key)}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </main>
  )
}
