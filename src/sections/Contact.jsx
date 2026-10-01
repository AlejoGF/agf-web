import { useTranslation } from '../hooks/useTranslation.js'

export default function Contact() {
  const { t } = useTranslation()
  return <section id="contact">{t('sections.contact')}</section>
}
