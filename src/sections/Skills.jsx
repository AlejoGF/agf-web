import { useTranslation } from '../hooks/useTranslation.js'
import { skillGroups } from '../data/skills.js'
import { techLogos } from '../data/techLogos.js'
import TechLogo from '../components/TechLogo.jsx'
import './Skills.css'

function SkillChip({ item, language }) {
  const logo = item.logo ? techLogos[item.logo] : null
  const name = item.name ?? logo?.name ?? item.label[language]
  const className = `skills__chip${item.highlight ? ' skills__chip--highlight' : ''}`

  // Logotipos que ya son la palabra (ej. Odoo): solo el logo, con su nombre accesible
  if (logo?.wide && !item.name) {
    return (
      <li className={className} style={{ '--brand': logo.color, '--brand-dark': logo.colorDark }}>
        <TechLogo id={item.logo} size={36} />
      </li>
    )
  }

  return (
    <li className={className} style={logo ? { '--brand': logo.color, '--brand-dark': logo.colorDark } : undefined}>
      {logo && <TechLogo id={item.logo} size={16} decorative />}
      {name}
    </li>
  )
}

export default function Skills() {
  const { t, language } = useTranslation()

  return (
    <section id="skills" className="skills">
      <h2 className="section-title reveal">{t('sections.skills')}</h2>

      <div className="skills__groups">
        {skillGroups.map((group) => (
          <div key={group.id} className="skills__group reveal">
            <h3 className="skills__group-title">{group.title[language]}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <SkillChip key={item.name ?? item.logo ?? item.label.en} item={item} language={language} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
