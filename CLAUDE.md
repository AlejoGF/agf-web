# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Portfolio personal 100% estático (sin backend, sin formularios). Responder al usuario en español rioplatense.

**Antes de cambios grandes, proponer un plan y esperar el OK del usuario.**

## Comandos

```bash
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción a dist/
npm run preview  # sirve dist/ localmente
npm run lint     # oxlint (config en .oxlintrc.json)
```

No hay tests configurados.

## Restricciones del proyecto

- **Stack fijo:** React 19 + Vite, JavaScript (sin TypeScript), React Router DOM, Lucide React.
- **No instalar dependencias nuevas sin consultar al usuario** (librerías de i18n, UI, animación, etc.).
- **CSS plano, un archivo `.css` por componente**, importado desde el propio componente. Nada de Tailwind, shadcn ni librerías de UI.
- **CV** en la página `/cv` y descargable en PDF (ES y EN) desde `public/cv/`. Si cambia el CV, actualizar el PDF y `src/data/resume.js`.
- **Contacto solo con links** (`mailto:` y WhatsApp `wa.me`). No agregar formularios.

## Arquitectura

- `src/main.jsx` importa los estilos globales (`fonts.css` → `tokens.css` → `global.css`) y monta `ThemeProvider` → `LanguageProvider` → `<BrowserRouter>` → `App.jsx`, que define las rutas:
  - `/` → `pages/Home.jsx`, que compone las secciones de `src/sections/` en orden: Hero, About, Experience, Education, Skills, Contact (cada una es un `<section id="...">` para navegación por anclas). Projects vuelve en la etapa 2 (hoy `projects` está vacío y fuera del nav).
  - `/cv` → `pages/Resume.jsx`: el CV como hoja A4 en el idioma activo (texto en `src/data/resume.js`, igual al de los PDF de `public/cv/`), con botones Imprimir y Descargar PDF. Se renderiza sin Header ni Footer y siempre en claro (tokens `--resume-*`); al imprimir entra en una sola hoja.
  - `/proyectos/:slug` → `pages/ProjectPage.jsx`, busca el proyecto por `slug` en `src/data/projects.js`; si no existe renderiza `NotFound`.
  - `*` → `pages/NotFound.jsx`.
- **Datos en `src/data/`:** el contenido de cada sección vive en su archivo (`experience.js`, `education.js`, `skills.js`, `contact.js`, `projects.js`) y el componente solo lo recorre. Los textos traducibles van en los `.json` (o con `{ es, en }` en el dato); `contact.js` tiene el mail, WhatsApp, los links `getMailtoUrl` / `getWhatsappUrl` y los PDF del CV (`cvFiles`, que usa la página `/cv`). Los botones de CV del Header, Hero y Contact llevan a `/cv`.
- `App.jsx` envuelve las páginas con `Header` y `Footer`; `#root` es una columna flex y `main` ocupa el espacio libre, así el footer queda abajo en páginas cortas (la 404 entra sin scroll).
- **Contextos (tema e idioma):** cada uno se divide en `context/XContext.js` (solo `createContext`), `context/XProvider.jsx` (el componente con el estado) y `hooks/useX.js` (el hook que lo consume). La división es para que oxlint (`react/only-export-components`) no marque archivos que exportan componentes y no-componentes juntos. Los componentes usan siempre el hook (`useTheme`, `useTranslation`), nunca el contexto directo.
- `App.jsx` renderiza `ScrollManager` (scroll a `/#seccion` y al cambiar de página: animado propio con easing, o fundido con View Transitions si hay `prefers-reduced-motion`) y `Header` (cápsula flotante centrada: logo, links a secciones con la activa resaltada vía `useActiveSection`, `LanguageToggle`, `ThemeToggle`, botón de CV en prueba; en < 1024px los links pasan a un menú desplegable).
- Cada página tiene un único `<main id="main" tabIndex={-1}>`, destino del link "Saltar al contenido".

## Diseño

- Usar la skill **ui-ux-pro-max** para decisiones de diseño, pero implementar siempre en React + CSS plano (ignorar sus partes de Tailwind/shadcn). Las skills de diseño se instalan a nivel de usuario y no se incluyen en el repo.
- **Estilo:** minimalista moderno. Sombras suaves pero visibles (`--shadow-sm/md/lg`), pocos bordes, esquinas redondeadas, animaciones cortas y sutiles.
- **Design tokens:** todos los colores, tipografías, espaciados, radios, sombras y duraciones son variables CSS en `:root` dentro de `src/styles/tokens.css`. Nunca hardcodear esos valores en los `.css` de componentes. `src/styles/global.css` queda para reset y estilos base (incluye `:focus-visible`, `prefers-reduced-motion` y la clase `.visually-hidden`).
- **Color:** un solo violeta, `#5a52e0` (`--color-primary`), en los dos temas, siempre con texto blanco encima. Sobre el fondo oscuro da 3.4:1: sirve para fondos, bordes, íconos y texto grande, pero **el texto chico en violeta usa `--color-primary-text`** (violeta en claro, casi blanco en oscuro). `#6c63ff` (`--color-brand`) es solo decorativo (logo, favicon) y el anillo de foco en oscuro. Verificar el contraste de cualquier color nuevo en ambos temas.
- **Tipografía:** Space Grotesk (títulos, `--font-heading`) y DM Sans (texto, `--font-body`), de Google Fonts pero servidas desde `public/fonts/` (`src/styles/fonts.css`); subset latino, fuentes variables.
- **Logo:** texto "AGF" en la fuente de títulos seguido de un "." en `--color-primary`.
- **Modo oscuro:** `[data-theme="dark"]` en `<html>` redefine las mismas variables; los componentes no necesitan saber qué tema está activo.
- **Mobile first**; verificar en 375, 768, 1024 y 1440 px.
- **Aparición al scrollear:** agregar la clase `reveal` (definida en `global.css`) a tarjetas y bloques de contenido para que entren subiendo y agrandándose con el scroll (CSS scroll-driven animations, sin JS). No usarla en el Hero. Con `prefers-reduced-motion` se desactiva.
- **Imágenes:** ilustraciones vectoriales (SVG) que representen al usuario, no fotos de stock. **Logos de tecnologías:** se guardan como datos en `src/data/techLogos.js` (path SVG de Simple Icons, CC0, + color de marca) y se dibujan con `<TechLogo id="react" />`, que usa `currentColor`. Las redes sociales están en `src/data/socialLinks.js` (LinkedIn es un dibujo propio porque no está en Simple Icons) y ambos usan `<BrandIcon />`. Para sumar uno, copiar el `path` del SVG de simpleicons.org. La CSP bloquea badges externos como shields.io, y Lucide no incluye logos de marcas. **Color de los logos:** en modo claro van con su color de marca (sin cambio en hover); en modo oscuro van en gris y toman el color de marca en hover. Se pasa con las variables `--brand` / `--brand-dark` (`colorDark` en los datos, para marcas negras como GitHub).

### Tema sin parpadeo

`public/theme-init.js` es un script externo (no módulo, sin `defer`) cargado en el `<head>` de `index.html`. Lee la preferencia guardada en `localStorage` (clave `agf-theme`) o, si no hay, `prefers-color-scheme`, y aplica `data-theme` en `<html>` antes de que cargue React. `ThemeProvider` parte de ese valor, guarda la elección con la misma clave y, si el usuario nunca eligió, sigue los cambios del sistema. Al ser un archivo propio del sitio, cumple `script-src 'self'` sin hashes.

## Idiomas

- Todo texto visible (y los `aria-label`) sale de `src/i18n/es.json` / `en.json`, nunca strings sueltos en JSX. Español por defecto, toggle ES/EN, sin librerías de i18n.
- En componentes: `const { t, language, setLanguage } = useTranslation()` y `t('seccion.clave')`. Toda clave nueva va en **los dos** `.json` con la misma estructura; si falta en inglés se muestra la versión en español y en desarrollo aparece un `console.warn`.
- `src/i18n/index.js` exporta los diccionarios, `DEFAULT_LANGUAGE` y `LANGUAGES`. `LanguageProvider` guarda la elección en `localStorage` (clave `agf-lang`) y actualiza `<html lang>`.
- Los proyectos en `src/data/projects.js` tienen sus textos en ambos idiomas.

## Accesibilidad

- HTML semántico, **un solo `<h1>` por página**, `alt` en todas las imágenes.
- Foco visible, navegación completa por teclado, contraste mínimo 4.5:1.
- Respetar `prefers-reduced-motion`: `global.css` apaga las animaciones (rebotes, pulsos, fondo animado) pero mantiene las transiciones cortas de estado (hover, subrayado, colores). Excepción: el fundido al cambiar de tema o de idioma (View Transitions, `--duration-theme`) se mantiene porque es solo opacidad; con reducción de movimiento, la navegación por anclas también usa ese fundido en vez de desplazarse.
- Íconos solo con Lucide React; nunca emojis en la UI.

## Seguridad y deploy

- `vercel.json` (Vercel) y `public/_headers` (Cloudflare Pages) definen **los mismos** headers de seguridad; si se cambia uno, cambiar el otro. `vercel.json` además hace el rewrite SPA a `index.html` (Cloudflare Pages lo hace solo si no hay `404.html`).
- CSP: `script-src 'self'` estricto (sin scripts inline), más `static.cloudflareinsights.com` (y `cloudflareinsights.com` en `connect-src`) para Cloudflare Web Analytics, que no usa cookies; `style-src 'self' 'unsafe-inline'` para permitir `style={{...}}` con valores dinámicos; el resto `'self'` (imágenes también `data:`). Por lo tanto, fuentes, imágenes e íconos se sirven desde el propio sitio (nada de Google Fonts ni CDNs).
- `style={{...}}` solo para valores dinámicos (p. ej. una variable CSS calculada); los estilos fijos van en `.css`.
- Links externos siempre con `target="_blank" rel="noopener noreferrer"`.
- Nunca `dangerouslySetInnerHTML` ni `eval`.
- Verificar con `npm run build` que `dist/index.html` no tenga scripts inline.

## Git

Los commits y el push los hace el usuario manualmente: no ejecutar `git commit` ni `git push`. Mensajes en Conventional Commits simple, en inglés (`feat: add header navigation`).
