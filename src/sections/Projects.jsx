import { Hammer } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import { socialLinks } from '../data/socialLinks.js'
import BrandIcon from '../components/BrandIcon.jsx'
import './Projects.css'

// Mientras se preparan los casos de estudio (etapa 2), la sección lleva a los proyectos en Behance
const behance = socialLinks.find((link) => link.id === 'behance')

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="projects">
      <h2 className="section-title reveal">{t('sections.projects')}</h2>

      <div className="projects__card reveal">
        <div className="projects__text">
          <p className="projects__badge">
            <Hammer size={14} aria-hidden="true" />
            {t('projects.badge')}
          </p>
          <h3 className="projects__title">{t('projects.title')}</h3>
          <p className="projects__description">{t('projects.text')}</p>
        </div>

        <a href={behance.url} target="_blank" rel="noopener noreferrer" className="projects__cta">
          <BrandIcon path={behance.path} name={behance.name} size={18} decorative />
          {t('projects.cta')}
          <span className="visually-hidden"> ({t('common.newTab')})</span>
        </a>
      </div>
    </section>
  )
}
