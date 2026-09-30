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
- **CV descargable** en PDF (ES y EN) desde `public/cv/`.
- **Contacto solo con links** (`mailto:` y WhatsApp `wa.me`). No agregar formularios.

## Arquitectura

- `src/main.jsx` monta `<BrowserRouter>` → `App.jsx` define las rutas:
  - `/` → `pages/Home.jsx`, que compone las secciones de `src/sections/` en orden: Hero, About, Experience, Education, Skills, Projects, Contact (cada una es un `<section id="...">` para navegación por anclas).
  - `/proyectos/:slug` → `pages/ProjectPage.jsx`, busca el proyecto por `slug` en `src/data/projects.js`; si no existe renderiza `NotFound`.
  - `*` → `pages/NotFound.jsx`.
- `src/data/projects.js` es la única fuente de datos de proyectos (la sección Projects y la página de caso de estudio leen de ahí).
- `src/context/` (idioma, tema), `src/hooks/` y `src/components/` (piezas reutilizables) están preparados pero aún vacíos.

## Diseño

- Usar la skill **ui-ux-pro-max** para decisiones de diseño, pero implementar siempre en React + CSS plano (ignorar las partes de Tailwind/shadcn de las skills en `.claude/skills/`).
- **Design tokens:** todos los colores, tipografías, espaciados, radios, sombras y duraciones son variables CSS en `:root` dentro de `src/styles/tokens.css`. Nunca hardcodear esos valores en los `.css` de componentes. `src/styles/global.css` queda para reset y estilos base.
- **Color principal:** `#6c63ff`.
- **Modo oscuro:** `[data-theme="dark"]` en `<html>` redefine las mismas variables; los componentes no necesitan saber qué tema está activo.
- **Mobile first**; verificar en 375, 768, 1024 y 1440 px.

### Tema sin parpadeo (pendiente: implementarlo junto con el ThemeContext)

`public/theme-init.js` es un script externo (no módulo, sin `defer`) cargado en el `<head>` de `index.html` con `<script src="/theme-init.js"></script>`. Lee la preferencia guardada en `localStorage` o, si no hay, `prefers-color-scheme`, y aplica `data-theme` en `<html>` antes de que cargue React. El ThemeContext parte de ese valor y usa la misma clave de `localStorage`. Al ser un archivo propio del sitio, cumple `script-src 'self'` sin hashes.

## Idiomas

- Todo texto visible sale de `src/i18n/es.json` / `en.json` (nunca strings sueltos en JSX). Español por defecto, toggle ES/EN, sin librerías de i18n.
- Los proyectos en `src/data/projects.js` tienen sus textos en ambos idiomas.

## Accesibilidad

- HTML semántico, **un solo `<h1>` por página**, `alt` en todas las imágenes.
- Foco visible, navegación completa por teclado, contraste mínimo 4.5:1.
- Respetar `prefers-reduced-motion`.
- Íconos solo con Lucide React; nunca emojis en la UI.

## Seguridad y deploy

- `vercel.json` (Vercel) y `public/_headers` (Cloudflare Pages) definen **los mismos** headers de seguridad; si se cambia uno, cambiar el otro. `vercel.json` además hace el rewrite SPA a `index.html` (Cloudflare Pages lo hace solo si no hay `404.html`).
- CSP: `script-src 'self'` estricto (sin scripts inline); `style-src 'self' 'unsafe-inline'` para permitir `style={{...}}` con valores dinámicos; el resto `'self'` (imágenes también `data:`). Por lo tanto, fuentes, imágenes e íconos se sirven desde el propio sitio (nada de Google Fonts ni CDNs).
- `style={{...}}` solo para valores dinámicos (p. ej. una variable CSS calculada); los estilos fijos van en `.css`.
- Links externos siempre con `target="_blank" rel="noopener noreferrer"`.
- Nunca `dangerouslySetInnerHTML` ni `eval`.
- Verificar con `npm run build` que `dist/index.html` no tenga scripts inline.

## Git: commits y push

El usuario hace **todos** los commits y push manualmente; nunca ejecutar `git commit` ni `git push`. Al completar una unidad de trabajo con sentido propio, avisar con un bloque **📌 Momento de commit** que incluya:

1. Por qué es momento de commitear.
2. Tiempo realista que le llevaría a una persona ese trabajo, y si conviene dividirlo en varios commits espaciados en tiempo real para un historial natural (sin falsear fechas).
3. Paso a paso con los comandos exactos (`git status`, `git add <archivos>`, `git commit`, `git push`) y qué verificar en cada uno.
4. Mensaje de commit recomendado: Conventional Commits **simple**, en inglés, corto y claro (`feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`). Sin scopes (`feat(router):`) ni mensajes largos o excesivamente técnicos: el historial debe verse profesional pero acorde a un perfil junior. Ej.: `feat: add security headers for deploy`.
5. Cómo verificar que el push llegó bien a GitHub.
