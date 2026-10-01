import { useEffect, useState } from 'react'

// Devuelve el id de la sección en la que está el usuario: la última cuyo inicio
// ya pasó el 40% de la pantalla. Arriba de todo (en el Hero) devuelve null y al
// llegar al final de la página devuelve la última sección.
export function useActiveSection(ids, enabled = true) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (!enabled) return

    let frame = null

    const update = () => {
      frame = null
      const line = window.innerHeight * 0.4
      let current = null

      ids.forEach((id) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= line) current = id
      })

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom && window.scrollY > 0) current = ids[ids.length - 1]

      setActiveId(current)
    }

    // Como mucho un cálculo por cuadro de animación
    const handleScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [ids, enabled])

  return enabled ? activeId : null
}
