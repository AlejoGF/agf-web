// Ícono de marca a partir de un path SVG (Simple Icons usa 24x24; Devicon, 128x128). Usa currentColor.
// Si es decorativo (hay texto o aria-label al lado) se oculta a lectores de pantalla.
export default function BrandIcon({ path, name, size = 24, viewBox = '0 0 24 24', fillRule, decorative = false }) {
  const a11y = decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': name }

  return (
    <svg width={size} height={size} viewBox={viewBox} fill="currentColor" {...a11y}>
      {!decorative && <title>{name}</title>}
      <path d={path} fillRule={fillRule} />
    </svg>
  )
}
