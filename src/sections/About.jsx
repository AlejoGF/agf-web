import { useTranslation } from '../hooks/useTranslation.js'

export default function About() {
  const { t } = useTranslation()
  return <section id="about">{t('sections.about')}</section>
}
