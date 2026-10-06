import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'

// La home carga primero; el resto de las páginas se descarga solo cuando se visita
const Resume = lazy(() => import('./pages/Resume.jsx'))
const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  // La página del CV es un documento aparte: sin header ni footer del sitio
  const isResume = useLocation().pathname === '/cv'

  return (
    <>
      <ScrollManager />
      {!isResume && <Header />}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Resume />} />
          <Route path="/proyectos/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isResume && <Footer />}
    </>
  )
}
