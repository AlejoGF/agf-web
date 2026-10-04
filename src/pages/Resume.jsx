import { Link } from 'react-router-dom'
import { Download, Printer } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import { resume, resumeContact } from '../data/resume.js'
import { cvFiles } from '../data/contact.js'
import './Resume.css'

const external = { target: '_blank', rel: 'noopener noreferrer' }

// CV en formato hoja A4, en el idioma activo del sitio. Se imprime limpio (sin la barra de botones).
export default function Resume() {
  const { t, language } = useTranslation()
  const content = resume[language] ?? resume.es

  return (
    <div className="resume-page">
      <title>{`${t('resume.pageTitle')} · ${resumeContact.name}`}</title>

      <nav className="resume-toolbar" aria-label={t('resume.toolbarLabel')}>
        <div className="resume-toolbar__actions">
          <button type="button" className="resume-toolbar__link" onClick={() => window.print()}>
            <Printer size={16} aria-hidden="true" />
            {t('resume.print')}
          </button>
          <a href={cvFiles[language]} download className="resume-toolbar__link">
            <Download size={16} aria-hidden="true" />
            {t('resume.download')}
          </a>
        </div>
      </nav>

      <main id="main" tabIndex={-1} className="resume-sheet">
        <header className="resume-header">
          <div>
            <h1 className="resume-name">{resumeContact.name}</h1>
            <p className="resume-role">{content.role}</p>
          </div>
          <address className="resume-contact">
            <span>{resumeContact.location}</span>
            <a href={`mailto:${resumeContact.email}`}>{resumeContact.email}</a>
            <Link to="/">{resumeContact.website}</Link>
          </address>
        </header>

        <p className="resume-summary">{content.summary}</p>

        <section className="resume-section">
          <h2 className="resume-heading">{content.headings.experience}</h2>
          {content.experience.map((job) => (
            <article key={job.company} className="resume-job">
              <div className="resume-row">
                <h3 className="resume-company">{job.company}</h3>
                <span className="resume-period">{job.period}</span>
              </div>
              {job.description && <p className="resume-muted">{job.description}</p>}

              {job.roles.map((role) => (
                <div key={role.title} className="resume-role-block">
                  <div className="resume-row">
                    <h4 className="resume-position">{role.title}</h4>
                    {role.period && <span className="resume-period">{role.period}</span>}
                  </div>
                  <ul className="resume-bullets">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="resume-heading">{content.headings.skills}</h2>
          <dl className="resume-skills">
            {content.skills.map((skill) => (
              <div key={skill.label} className="resume-skill">
                <dt>{skill.label}</dt>
                <dd>{skill.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-section">
          <h2 className="resume-heading">{content.headings.education}</h2>
          <p>
            <strong>{content.education.degree}</strong>{' '}
            <span className="resume-period">{content.education.period}</span>
          </p>
          <p className="resume-muted">{content.education.school}</p>
          <p className="resume-courses">
            <strong>{content.education.coursesLabel}</strong>{' '}
            <span className="resume-muted">{content.education.courses}</span>
          </p>
        </section>

        <section className="resume-section">
          <h2 className="resume-heading">{content.headings.languages}</h2>
          <p>{content.languages}</p>
        </section>

        <footer className="resume-footer">
          {resumeContact.links.map((link) => (
            <a key={link.url} href={link.url} {...external}>
              {link.label}
              <span className="visually-hidden"> ({t('common.newTab')})</span>
            </a>
          ))}
        </footer>
      </main>
    </div>
  )
}
