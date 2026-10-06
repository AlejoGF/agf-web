import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FileText, Menu, X } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import LanguageToggle from './LanguageToggle.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import './Header.css'

const NAV_ITEMS = ['about', 'experience', 'education', 'skills', 'projects', 'contact']
const DESKTOP_QUERY = '(min-width: 1024px)'

export default function Header() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const activeSection = useActiveSection(NAV_ITEMS, pathname === '/')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  // Fondo y sombra en el header cuando la página ya no está arriba de todo
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Menú mobile abierto: bloquear el scroll de fondo, Esc para cerrar,
  // mantener el foco dentro del header y cerrar si la pantalla pasa a desktop.
  useEffect(() => {
    if (!isMenuOpen) return

    const header = headerRef.current
    const getFocusable = () =>
      [...header.querySelectorAll('a[href], button:not([disabled])')].filter((el) => el.offsetParent !== null)

    document.body.classList.add('menu-open')
    header.querySelector('.mobile-menu a')?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = getFocusable()
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const desktop = window.matchMedia(DESKTOP_QUERY)
    const handleDesktop = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    desktop.addEventListener('change', handleDesktop)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', handleKeyDown)
      desktop.removeEventListener('change', handleDesktop)
    }
  }, [isMenuOpen])

  const renderLinks = (className) =>
    NAV_ITEMS.map((id) => (
      <li key={id}>
        <Link
          to={`/#${id}`}
          className={className}
          aria-current={activeSection === id ? 'true' : undefined}
          onClick={closeMenu}
        >
          {t(`sections.${id}`)}
        </Link>
      </li>
    ))

  const headerClass = `site-header${isScrolled || isMenuOpen ? ' site-header--raised' : ''}`

  return (
    <header ref={headerRef} className={headerClass}>
      <a href="#main" className="skip-link">
        {t('nav.skipToContent')}
      </a>

      {/* Barra flotante tipo cápsula */}
      <div className="site-header__bar">
        <Link to="/" className="site-header__logo" aria-label={t('nav.home')} onClick={closeMenu}>
          AGF<span className="site-header__dot">.</span>
        </Link>

        <span className="site-header__divider" aria-hidden="true" />

        <nav className="site-header__nav" aria-label={t('nav.label')}>
          <ul className="site-header__list">{renderLinks('site-header__link')}</ul>
        </nav>

        <span className="site-header__divider" aria-hidden="true" />

        <div className="site-header__actions">
          <LanguageToggle />
          <ThemeToggle />
          {/* El CV se abre en otra pestaña */}
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__cv-button"
            aria-label={`${t('nav.viewCv')} (${t('common.newTab')})`}
            title={t('nav.viewCv')}
          >
            <FileText size={18} aria-hidden="true" />
            <span className="site-header__cv-label">{t('nav.cv')}</span>
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="site-header__icon-button site-header__menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label={t('nav.label')} hidden={!isMenuOpen}>
        <ul className="mobile-menu__list">{renderLinks('mobile-menu__link')}</ul>
        <a href="/cv" target="_blank" rel="noopener noreferrer" className="mobile-menu__cv" onClick={closeMenu}>
          <FileText size={18} aria-hidden="true" />
          {t('nav.viewCv')}
          <span className="visually-hidden"> ({t('common.newTab')})</span>
        </a>
      </nav>
      <div className="mobile-menu__backdrop" hidden={!isMenuOpen} onClick={closeMenu} />
    </header>
  )
}
