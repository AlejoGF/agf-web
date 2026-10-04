import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Resume from './pages/Resume.jsx'

export default function App() {
  // La página del CV es un documento aparte: sin header ni footer del sitio
  const isResume = useLocation().pathname === '/cv'

  return (
    <>
      <ScrollManager />
      {!isResume && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Resume />} />
        <Route path="/proyectos/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isResume && <Footer />}
    </>
  )
}
