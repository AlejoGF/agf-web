import { useTranslation } from '../hooks/useTranslation.js'

export default function Skills() {
  const { t } = useTranslation()
  return <section id="skills">{t('sections.skills')}</section>
}
