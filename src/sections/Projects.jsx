import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import { projects } from '../data/projects.js'
import { socialLinks } from '../data/socialLinks.js'
import BrandIcon from '../components/BrandIcon.jsx'
import './Projects.css'

const behance = socialLinks.find((link) => link.id === 'behance')
const total = String(projects.length).padStart(2, '0')

export default function Projects() {
  const { t, language } = useTranslation()

  return (
    <section id="projects" className="projects">
      <h2 className="section-title reveal">{t('sections.projects')}</h2>

      {/* Sin .reveal en las tarjetas: la animación de aparición se pisa con position: sticky */}
      <ol className="projects__stack">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="projects__item"
            style={{ '--index': index, '--card-bg': project.colors.bg, '--card-fg': project.colors.fg }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="projects__card">
              <img
                className="projects__cover"
                src={project.image.large}
                srcSet={`${project.image.small} 800w, ${project.image.large} 1600w`}
                sizes="(min-width: 1024px) 720px, 100vw"
                alt={project.alt[language]}
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
              />
              <div className="projects__body">
                <div>
                  <p className="projects__kind">{project.kind[language]}</p>
                  <h3 className="projects__name" translate="no">
                    {project.name}
                  </h3>
                  <p className="projects__summary">{project.summary[language]}</p>
                </div>
                <div className="projects__footer">
                  <span className="projects__count" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')} / {total}
                  </span>
                  <span className="projects__link">
                    {t('projects.viewCase')}
                    <ArrowUpRight size={18} aria-hidden="true" />
                    <span className="visually-hidden"> ({t('common.newTab')})</span>
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>

      <a href={behance.url} target="_blank" rel="noopener noreferrer" className="projects__more">
        <BrandIcon path={behance.path} name={behance.name} size={18} decorative />
        {t('projects.more')}
        <span className="visually-hidden"> ({t('common.newTab')})</span>
      </a>
    </section>
  )
}
