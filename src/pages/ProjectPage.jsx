import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { useTranslation } from '../hooks/useTranslation.js'
import NotFound from './NotFound.jsx'

export default function ProjectPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <NotFound />

  return (
    <main>
      <h1>{project.slug}</h1>
      <Link to="/#projects">{t('project.back')}</Link>
    </main>
  )
}
