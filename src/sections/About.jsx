import { MapPin } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import { socialLinks } from '../data/socialLinks.js'
import BrandIcon from '../components/BrandIcon.jsx'
import './About.css'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="about">
      <div className="about__intro">
        <h2 className="section-title reveal">{t('sections.about')}</h2>
        <div className="about__text reveal">
          {t('about.paragraphs').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="about__cards">
        <dl className="about__stats">
          {t('about.stats').map((stat) => (
            <div key={stat.label} className="about__card about__stat reveal">
              <dt className="about__stat-label">{stat.label}</dt>
              <dd className="about__stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="about__card about__info reveal">
          <div className="about__info-block">
            <h3 className="about__info-label">{t('about.socialTitle')}</h3>
            <ul className="about__social">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__social-link"
                    aria-label={`${link.name} (${t('common.newTab')})`}
                    title={link.name}
                  >
                    <BrandIcon path={link.path} name={link.name} size={20} decorative />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__info-block">
            <h3 className="about__info-label">{t('about.locationLabel')}</h3>
            <p className="about__info-value">
              <MapPin size={18} aria-hidden="true" />
              {t('about.location')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
