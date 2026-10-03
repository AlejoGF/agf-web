import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, FileText } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation.js'
import { contact, getMailtoUrl, getWhatsappUrl } from '../data/contact.js'
import { socialLinks } from '../data/socialLinks.js'
import BrandIcon from '../components/BrandIcon.jsx'
import './Contact.css'

const external = { target: '_blank', rel: 'noopener noreferrer' }

// Copia el mail al portapapeles y avisa "¡Copiado!" (también a lectores de pantalla)
function CopyEmailButton() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
    } catch {
      // Sin permiso para el portapapeles: el mail sigue visible para copiarlo a mano
    }
  }

  return (
    <button type="button" className="contact__copy" onClick={copy}>
      <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copy')}</span>
    </button>
  )
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="contact">
      <h2 className="section-title reveal">{t('sections.contact')}</h2>

      <div className="contact__card reveal">
        <div className="contact__body">
          <h3 className="contact__title">{t('contact.title')}</h3>

          <div className="contact__email">
            <a href={getMailtoUrl(t('contact.emailSubject'))}>{contact.email}</a>
            <CopyEmailButton />
          </div>

          <ul className="contact__links">
            <li>
              <a href={getWhatsappUrl(t('contact.whatsappMessage'))} {...external} className="contact__link">
                <BrandIcon path={contact.whatsapp.path} name="WhatsApp" size={14} decorative />
                WhatsApp
              </a>
            </li>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} {...external} className="contact__link">
                  <BrandIcon path={link.path} name={link.name} size={14} decorative />
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/cv" {...external} className="contact__link">
                <FileText size={14} aria-hidden="true" />
                {t('contact.cv')}
                <span className="visually-hidden"> ({t('common.newTab')})</span>
              </a>
            </li>
            <li className="contact__top-item">
              <Link to="/" className="contact__link contact__top">
                <ArrowUp className="contact__top-arrow" size={14} aria-hidden="true" />
                {t('contact.backToTop')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
