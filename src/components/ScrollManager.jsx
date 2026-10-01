import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

let cancelCurrentScroll = null

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

function jumpTo(top) {
  window.scrollTo({ top, behavior: 'instant' })
}

// Scroll animado propio: más lento y suave que el "smooth" del navegador.
// Se corta si el usuario scrollea o toca la pantalla.
function animateScrollTo(top) {
  cancelCurrentScroll?.()

  const start = window.scrollY
  const distance = top - start
  if (Math.abs(distance) < 2) return

  const duration = Math.min(1000, 450 + Math.abs(distance) * 0.25)
  const startTime = performance.now()
  let frame

  const stop = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
    cancelCurrentScroll = null
  }

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1)
    jumpTo(start + distance * easeInOutCubic(progress))
    if (progress < 1) frame = requestAnimationFrame(step)
    else stop()
  }

  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })
  cancelCurrentScroll = stop
  frame = requestAnimationFrame(step)
}

// Con "reducir movimiento": sin desplazamiento, un fundido como el del cambio de tema.
function fadeTo(top) {
  if (!document.startViewTransition) {
    jumpTo(top)
    return
  }
  document.startViewTransition(() => jumpTo(top))
}

function getTargetTop(hash) {
  if (!hash) return 0
  const target = document.getElementById(decodeURIComponent(hash.slice(1)))
  if (!target) return null
  // Respeta el scroll-margin-top de la sección (deja lugar para el header fijo)
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
  return target.getBoundingClientRect().top + window.scrollY - margin
}

// React Router no hace scroll solo: esto lleva a la sección del hash (/#projects)
// o arriba de todo al cambiar de página.
export default function ScrollManager() {
  const { pathname, hash, key, state } = useLocation()
  const previousPathname = useRef(null)

  useEffect(() => {
    const isFirstLoad = previousPathname.current === null
    const isSamePage = previousPathname.current === pathname
    previousPathname.current = pathname

    const top = getTargetTop(hash)
    if (top === null) return

    // Después de ir a la sección, la URL queda limpia (sin #seccion), porque al
    // seguir scrolleando dejaría de coincidir con lo que se ve. Se conserva el
    // history.state para que React Router siga funcionando con atrás/adelante.
    if (hash) {
      window.history.replaceState(window.history.state, '', pathname + window.location.search)
    }

    // Al entrar al sitio o cambiar de página: ir directo, sin animación
    if (!isSamePage) {
      if (!isFirstLoad || hash) jumpTo(top)
      return
    }

    // Un link puede pedir scroll animado siempre con state={{ smoothScroll: true }}
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion && !state?.smoothScroll) fadeTo(top)
    else animateScrollTo(top)
  }, [pathname, hash, key, state])

  return null
}
