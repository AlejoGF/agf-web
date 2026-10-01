import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation.js'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main id="main" tabIndex={-1}>
      <h1>{t('notFound.title')}</h1>
      <Link to="/">{t('notFound.back')}</Link>
    </main>
  )
}
