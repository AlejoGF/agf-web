import { useTranslation } from '../hooks/useTranslation.js'

export default function Projects() {
  const { t } = useTranslation()
  return <section id="projects">{t('sections.projects')}</section>
}
