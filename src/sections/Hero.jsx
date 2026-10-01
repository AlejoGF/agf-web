import { useTranslation } from '../hooks/useTranslation.js'

export default function Hero() {
  const { t } = useTranslation()
  return <section id="hero">{t('sections.hero')}</section>
}
