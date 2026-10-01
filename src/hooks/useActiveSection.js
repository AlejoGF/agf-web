import { useEffect, useState } from 'react'

// Devuelve el id de la sección que está en el centro de la pantalla.
export function useActiveSection(ids, enabled = true) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (!enabled) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // Solo cuenta la franja central de la pantalla
      { rootMargin: '-45% 0px -50% 0px' },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [ids, enabled])

  return enabled ? activeId : null
}
