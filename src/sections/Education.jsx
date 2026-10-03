import { useTranslation } from '../hooks/useTranslation.js'
import { education } from '../data/education.js'
import './Education.css'

export default function Education() {
  const { t, language } = useTranslation()

  return (
    <section id="education" className="education">
      <h2 className="section-title reveal">{t('sections.education')}</h2>
      <ul className="education__grid">
        {education.map((item) => (
          <li key={item.id} className={`education__card reveal${item.featured ? ' education__card--featured' : ''}`}>
            <div className="education__top">
              <img className="education__logo" src={item.logo} alt="" width="40" height="40" />
              <p className="education__years">{item.years}</p>
            </div>
            <h3 className="education__title">{item.title[language]}</h3>
            <p className="education__institution">{item.institution}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
