# AGENTS.md

## Identity
- **Project:** `raulfdez.dev` — Static portfolio single-page (Astro SSG)
- **Owner:** Raúl Fernández Tirado | **URL:** <https://raulfdez.dev>
- **Repo:** <https://github.com/raulfdeztdo/raulfdez.dev>
- **License:** CC BY-NC 4.0 | **Template:** midudev/porfolio.dev

## Stack
| Layer | Tech | Version |
|-------|------|---------|
| Framework | Astro | 4.4.5 |
| Language | TypeScript | 5.3.3 |
| CSS | Tailwind CSS | 3.4.1 (darkMode: `class`) |
| Font | Onest Variable (@fontsource) | 5.0.2 |
| Package manager | pnpm | — |
| Runtime | Node.js 18 | — |
| Deploy | Netlify (Git CI) | — |

## Commands
```bash
pnpm dev      # Dev server :4321
pnpm build    # astro check → astro build (SIEMPRE tras cambios)
pnpm preview  # Preview dist/
```

## MCP — Obligatorio
**Context7** debe usarse para TODA consulta de documentación (Astro, Tailwind, TypeScript, etc.). Para cualquier API, patrón o feature que no esté ya en el código del proyecto, consulta primero Context7. El MCP está configurado en `opencode.jsonc`.

## Estructura
```
src/
├── pages/            → index.astro (ES, /), en/index.astro (EN, /en/)
├── components/       → .astro (16 + 17 iconos SVG en icons/)
├── layouts/          → Layout.astro (root HTML + global CSS)
├── i18n/             → ui.ts (strings ES↔EN), utils.ts (helpers)
public/               → .webp (companies/, projects/, me.webp, raulfdez.webp)
astro.config.mjs      → i18n routing, site URL, integrations
tailwind.config.mjs   → darkMode 'class'
tsconfig.json         → strict, @/* → src/*
netlify.toml          → Node 18, SPA redirect /* → /
```

**Path alias:** `@/` = `src/` (ej: `import Layout from "@/layouts/Layout.astro"`)

## Componentes

| Componente | Cliente JS |
|-----------|------------|
| **Layout** — `<head>`, fuente, radial gradient bg, ViewTransitions, global CSS | No |
| **Header** — Nav fixed (4 links), blur/shadow scroll, active tracking | IntersectionObserver |
| **Hero** — Foto, badge "Available", greeting, descripción, social pills | No |
| **Experience** — Timeline (5 items, `EXPERIENCE` array estático) | No |
| **ExperienceItem** — Fecha, título, logo, company, descripción | No |
| **Projects** — Grid 5 cards con tags, imágenes, links (`PROJECTS` array + `TAGS` dict) | No |
| **AboutMe** — 3 párrafos bio + foto rotada | No |
| **Footer** — Copyright + links | No |
| **Badge** — Pill animada con borde gradiente cónico | No |
| **SocialPill** — Botón social/contacto (hover: inversión color) | No |
| **LinkButton** — Botón redondeado para links externos | No |
| **SectionContainer** — `<section>` wrapper (max-width, scroll-margin, data-section) | No |
| **TitleSection** — h2 con icono (slot) | No |
| **ThemeToggle** — Dark/Light/System (localStorage + matchMedia) | is:inline |
| **LanguageSelector** — Dropdown ES/EN (click-outside) | astro:page-load |
| **Iconos (17)** — SVG inline, reciben `class` via Astro.props | No |

## i18n

Sistema custom sin librería externa:
- `src/i18n/ui.ts` → `{ es: {...}, en: {...} }` (~50 keys/language). Valores pueden contener HTML.
- `src/i18n/utils.ts` → `getLangFromUrl(url)`, `useTranslations(lang)` → `t(key)`, `translatePath(lang, path)`

**Añadir texto nuevo:**
1. Añadir key a **AMBOS** `es` y `en` en `ui.ts` (formato: `domain.element`)
2. Usar en componente: `t('key')` (normal) o `set:html={t('key')}` (si contiene HTML)

**Routing:** `/` → ES (default, sin prefijo), `/en/` → EN

## Estilo — Reglas
- **Solo Tailwind** (class attributes). Nada de CSS externo.
- `<style>` scoped solo para `@keyframes`. `<style is:global>` solo en Layout (fuentes, scroll, color-scheme).
- **Dark mode:** `dark:` prefix (ej: `dark:bg-gray-950 dark:text-white`)
- **Acento:** yellow (`text-yellow-500` light, `dark:text-yellow-200` dark)
- **Responsive:** mobile-first (`sm:`, `md:`, `lg:`)
- **Imágenes:** solo `.webp` en `public/`

## Commits — Conventional Commits
```
<tipo>(<scope>): <descripción en español>
```
Tipos: `feat | fix | docs | refactor | ci | chore | style | test | perf`

## Datos del contenido

| Qué | Dónde |
|-----|-------|
| **Traducciones** | `src/i18n/ui.ts` (objetos `es` y `en`) |
| **Proyectos** | `src/components/Projects.astro` → array `PROJECTS` + dict `TAGS` |
| **Experiencia** | `src/components/Experience.astro` → array `EXPERIENCE` |
| **Navegación** | `src/components/Header.astro` → array `navItems` |
| **Social/contacto** | `src/components/Hero.astro` |
| **Footer** | `src/components/Footer.astro` |
| **Imágenes** | `public/` (solo `.webp`) |

## Tareas comunes

### Añadir sección
1. `src/components/NuevaSeccion.astro` + icono en `icons/`
2. Keys en `ui.ts` (es + en)
3. Importar en `index.astro` (ES) y `en/index.astro` (EN)
4. Añadir a `navItems` en Header (si procede)
5. `pnpm build`

### Añadir proyecto
1. Imagen `.webp` → `public/projects/`
2. Keys `projects.nombre.title` y `.description` en `ui.ts` (es+en)
3. Entrada en `PROJECTS` array (Projects.astro)
4. Tags en `TAGS` si son nuevos (crear icono si hace falta)
5. `pnpm build`

### Añadir experiencia
1. Logo `.webp` → `public/companies/`
2. Keys `experience.empresa.*` en `ui.ts` (es+en)
3. Entrada en `EXPERIENCE` array (Experience.astro)
4. `pnpm build`

### Añadir tag tecnológico
1. Icono SVG en `src/components/icons/Nombre.astro`
2. Importar en Projects.astro
3. Entrada en dict `TAGS` con name, class (Tailwind), icon

## JS cliente — Islands
1. **ThemeToggle** — `<script is:inline>`, persistencia localStorage, re-init en `astro:after-swap`
2. **Header** — IntersectionObserver (active link), cleanup en `visibilitychange`
3. **LanguageSelector** — Toggle menú, click-outside, cleanup en unmount

## Build & Deploy
- `pnpm build` → `astro check` + `astro build` → `dist/` (estático)
- Netlify: push a `main` → build automático con Node 18
- Catch-all `/*` → `/index.html` (status 200, SPA fallback para View Transitions)
