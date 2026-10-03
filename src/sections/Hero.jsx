import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, FileText } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero">
      <p className="hero__badge">
        <span className="hero__dot" aria-hidden="true" />
        {t('hero.available')}
      </p>

      <h1 className="hero__name">{t('hero.name')}</h1>
      <p className="hero__role">{t('hero.role')}</p>
      <p className="hero__lead">{t('hero.lead')}</p>

      <div className="hero__actions">
        <Link to="/#contact" className="hero__button hero__button--primary">
          {t('hero.ctaContact')}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <a href="/cv" target="_blank" rel="noopener noreferrer" className="hero__button hero__button--secondary">
          <FileText size={18} aria-hidden="true" />
          {t('nav.viewCv')}
          <span className="visually-hidden"> ({t('common.newTab')})</span>
        </a>
      </div>

      <Link to="/#about" className="hero__scroll" aria-label={t('hero.scrollDown')} title={t('hero.scrollDown')}>
        <ChevronDown size={24} aria-hidden="true" />
      </Link>
    </section>
  )
}
