import { useTranslation } from '../hooks/useTranslation.js'

export default function Experience() {
  const { t } = useTranslation()
  return <section id="experience">{t('sections.experience')}</section>
}
