import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import { experience } from '../data/experience.js'
import { techLogos } from '../data/techLogos.js'
import TechLogo from '../components/TechLogo.jsx'
import './Experience.css'

const LOCALES = { es: 'es-AR', en: 'en-US' }

// '2024-06' → "jun 2024" / "Jun 2024" según el idioma
function formatMonth(value, language) {
  const [year, month] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(LOCALES[language], { month: 'short', year: 'numeric' }).format(
    new Date(year, month - 1),
  )
}

// Iniciales de la empresa para cuando no hay logo: "Air Computers" → "AC"
function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
}

// Nombre legible para tecnologías sin logo cargado: 'magento' → 'Magento'
function getTechName(techId) {
  return techLogos[techId]?.name ?? techId.charAt(0).toUpperCase() + techId.slice(1)
}

function ExperienceItem({ job, language, isOpen, onToggle }) {
  const id = useId()
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`

  return (
    <li className={`experience__item reveal${isOpen ? ' experience__item--open' : ''}`}>
      <h3 className="experience__heading">
        <button
          type="button"
          id={buttonId}
          className="experience__toggle"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={`experience__logo${job.logo ? ' experience__logo--image' : ''}`} aria-hidden="true">
            {job.logo ? <img src={job.logo} alt="" width="48" height="48" /> : getInitials(job.company)}
          </span>
          <span className="experience__summary">
            <span className="experience__role">{job.role}</span>
            <span className="experience__meta">
              <span className="experience__company">{job.company}</span>
              <span aria-hidden="true"> · </span>
              <span className="experience__dates">
                <time dateTime={job.start}>{formatMonth(job.start, language)}</time>
                {' — '}
                <time dateTime={job.end}>{formatMonth(job.end, language)}</time>
              </span>
            </span>
          </span>
          <ChevronDown className="experience__chevron" size={20} aria-hidden="true" />
        </button>
      </h3>

      {/* El panel se anima abriendo su alto; cerrado queda inerte (sin foco ni lector de pantalla) */}
      <div id={panelId} role="region" aria-labelledby={buttonId} className="experience__panel" inert={!isOpen}>
        <div className="experience__panel-inner">
          <ul className="experience__highlights">
            {job.highlights[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="experience__tech">
            {job.tech.map((techId) => {
              const logo = techLogos[techId]
              return (
                <li
                  key={techId}
                  className="experience__tech-item"
                  style={{ '--brand': logo?.color, '--brand-dark': logo?.colorDark }}
                >
                  {/* Los logotipos que ya son la palabra (ej. Odoo) van sin texto al lado */}
                  {logo?.wide ? (
                    <TechLogo id={techId} size={32} />
                  ) : (
                    <>
                      <TechLogo id={techId} size={14} decorative />
                      {getTechName(techId)}
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default function Experience() {
  const { t, language } = useTranslation()
  // Se pueden abrir varias a la vez (para comparar). La más reciente empieza abierta.
  const [openIds, setOpenIds] = useState(() => new Set([experience[0].id]))

  const toggle = (id) =>
    setOpenIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <section id="experience" className="experience">
      <h2 className="section-title reveal">{t('sections.experience')}</h2>
      <ol className="experience__list">
        {experience.map((job) => (
          <ExperienceItem
            key={job.id}
            job={job}
            language={language}
            isOpen={openIds.has(job.id)}
            onToggle={() => toggle(job.id)}
          />
        ))}
      </ol>
    </section>
  )
}
