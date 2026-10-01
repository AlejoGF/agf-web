import { Routes, Route } from 'react-router-dom'
import LanguageToggle from './components/LanguageToggle.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

export default function App() {
  return (
    <>
      {/* Header provisorio: se reemplaza por el componente Header en el próximo paso */}
      <header className="app-header">
        <LanguageToggle />
        <ThemeToggle />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
