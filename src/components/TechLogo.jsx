import { techLogos } from '../data/techLogos.js'
import BrandIcon from './BrandIcon.jsx'

// Logo de una tecnología (ver src/data/techLogos.js). Toma el color del texto (currentColor).
// decorative: true cuando el nombre ya está escrito al lado (evita que se lea dos veces).
export default function TechLogo({ id, size = 24, decorative = false }) {
  const logo = techLogos[id]
  if (!logo) return null

  return (
    <BrandIcon
      path={logo.path}
      name={logo.name}
      size={size}
      viewBox={logo.viewBox}
      fillRule={logo.fillRule}
      decorative={decorative}
    />
  )
}
