import { useTranslation } from '../hooks/useTranslation.js'

export default function Education() {
  const { t } = useTranslation()
  return <section id="education">{t('sections.education')}</section>
}
