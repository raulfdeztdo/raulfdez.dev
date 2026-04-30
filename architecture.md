# Architecture

## Resumen
SPA estática bilingual (ES/EN) con Astro SSG + Tailwind + i18n custom. Desplegada en Netlify.

**Build time:** Astro lee `src/pages/*.astro` → renderiza componentes → i18n resuelve idioma según URL → `astro check` (type-check) → `astro build` → `dist/` (HTML/CSS/JS estático).

**Runtime:** `dist/index.html` sirve como SPA. Netlify redirect `/*` → `/index.html`. ViewTransitions API maneja navegación cliente entre `/` y `/en/`. Tres islas JS: ThemeToggle, Header observer, LanguageSelector.

## Routing
| URL | Archivo | Lang |
|-----|---------|------|
| `/` | `src/pages/index.astro` | ES (default, sin prefijo) |
| `/en/` | `src/pages/en/index.astro` | EN |
| `/components` | `src/pages/components.astro` | Catálogo diseño |
| `/*` | — | Redirect → `/index.html` (Netlify SPA) |

## Árbol de dependencias
```
Layout.astro
├── @fontsource-variable/onest, ViewTransitions
├── Header.astro
│   ├── LanguageSelector.astro
│   └── ThemeToggle.astro → Sun, Moon, System icons
├── <slot> (contenido de página)
│   └── [Page].astro
│       ├── SectionContainer.astro → TitleSection.astro (icono + título)
│       ├── Hero.astro → Badge + SocialPill (×3) + iconos (Mail, LinkedIn, GitHub)
│       ├── Experience.astro → ExperienceItem (×5)
│       ├── Projects.astro → Image(astro:assets) + LinkButton + tags + iconos tech
│       └── AboutMe.astro → Image(astro:assets)
└── Footer.astro
```

## i18n
**2 capas:**
- **Datos:** `src/i18n/ui.ts` → `{ es: {...}, en: {...} } as const`
- **Lógica:** `src/i18n/utils.ts` → `getLangFromUrl()`, `useTranslations()`, `translatePath()`

**Flujo:** `Astro.url` → `getLangFromUrl()` → `lang` → `useTranslations(lang)` → `t('key')`

**HTML en traducciones:** valores con `<b>`, `<a>`, `<em>`, `<br>` se renderizan con `set:html={t('key')}`. Estilos via selectores Tailwind: `[&>strong]:text-yellow-500`.

## Sistema de temas
- `localStorage.theme` → `"light" | "dark" | "system"` (default: system)
- `matchMedia("(prefers-color-scheme: dark)")` para detección OS
- `document.documentElement.classList.toggle("dark")` → Tailwind `dark:` aplica
- Re-init en `astro:after-swap`
- Estados: light ↔ system ↔ dark

## CSS — 3 capas
1. **Global** (`Layout.astro` `<style is:global>`): fuente, scroll-behavior, color-scheme, animaciones scroll-driven (#header-nav blur)
2. **Component-scoped** (`<style>` en .astro): `@keyframes` (blur, nav-shadown, scale-up-center, badge spin)
3. **Tailwind utilities** (`class`): todo el estilo visual, responsive (`sm|md|lg`), dark mode (`dark:`), arbitrary values (`bg-[radial-gradient(...)]`), arbitrary selectors (`[&>strong]:`)

## Assets estáticos
- `public/companies/` — Logos empleadores (5 × .webp)
- `public/projects/` — Screenshots proyectos (6 × .webp)
- `public/me.webp` — Foto perfil (Hero)
- `public/raulfdez.webp` — Foto secundaria (About)
- `public/favicon.{ico,svg}` — Favicons

## Islas JS
| Componente | Directiva | Eventos clave |
|-----------|-----------|--------------|
| ThemeToggle | `is:inline` | `click` (toggle menú), `astro:after-swap` (re-init) |
| Header | `astro:page-load` | IntersectionObserver, `visibilitychange` (cleanup) |
| LanguageSelector | `astro:page-load` | `click` (toggle/open), click-outside |

## Decisiones de diseño
- **i18n custom** (sin librería): suficiente para 2 idiomas, ~50 keys
- **Datos estáticos en componentes**: `EXPERIENCE` y `PROJECTS` son arrays hardcodeados
- **Sin tests**: calidad vía TypeScript (`astro check`)
- **Sin tracking/analytics**
- **@fontsource** en vez de Google Fonts CDN (privacidad + rendimiento)
