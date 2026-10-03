import { Coffee, Heart } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import './Footer.css'

// Se calcula una vez al cargar el sitio
const YEAR = new Date().getFullYear()

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {YEAR} Alejo Gonzalez Fittipaldi</p>
        {/* Los íconos se acompañan con texto oculto para lectores de pantalla */}
        <p className="site-footer__made">
          {t('footer.madeWith')}
          <Heart className="site-footer__heart" size={16} aria-hidden="true" />
          <span className="visually-hidden">{t('footer.love')}</span>
          {t('footer.and')}
          <Coffee className="site-footer__coffee" size={16} aria-hidden="true" />
          <span className="visually-hidden">{t('footer.coffee')}</span>
        </p>
      </div>
    </footer>
  )
}
