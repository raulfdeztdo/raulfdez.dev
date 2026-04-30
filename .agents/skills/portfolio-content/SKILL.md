---
name: portfolio-content
description: "Añade/modifica contenido del portfolio raulfdez.dev: proyectos (PROJECTS[], TAGS{}), experiencia laboral (EXPERIENCE[]), tags tecnológicos con iconos SVG y enlaces sociales. Cubre ubicaciones de datos, formato de entradas y colores de tags."
---

Añade/modifica proyectos, experiencia, tags y enlaces del portfolio.

## Ubicaciones de contenido
| Contenido | Archivo | Variable |
|-----------|---------|----------|
| Proyectos | `src/components/Projects.astro` | `PROJECTS[]` |
| Tags tech | `src/components/Projects.astro` | `TAGS{}` |
| Experiencia | `src/components/Experience.astro` | `EXPERIENCE[]` |
| Navegación | `src/components/Header.astro` | `navItems[]` |
| Social links | `src/components/Hero.astro` | JSX directo |
| Footer | `src/components/Footer.astro` | JSX directo |
| Traducciones | `src/i18n/ui.ts` | `ui.es` + `ui.en` |
| Imágenes | `public/companies/` o `public/projects/` | `.webp` |

## Añadir proyecto
1. Imagen `.webp` → `public/projects/`
2. Keys en `ui.ts` (es+en): `projects.nombre.title`, `projects.nombre.description`
3. Entrada en `PROJECTS`:
```ts
{
  title: t("projects.nombre.title"),
  description: t("projects.nombre.description"),
  link: "https://...",
  image: "/projects/nombre.webp",
  tags: [TAGS.PHP, TAGS.SYMFONY],
}
```
4. Si se usan tags nuevos, añadir a `TAGS`
5. `pnpm build`

**Imágenes en proyectos:** Projects.astro renderiza las imágenes con `<Image>` de `astro:assets` (no `<img>`). El componente espera `width`, `height`, `alt`, `loading="lazy"`. No requiere pasarlos manualmente en `PROJECTS[]`, se pasan directamente en el template.

## Añadir experiencia
1. Logo `.webp` → `public/companies/`
2. Keys en `ui.ts` (es+en): `experience.empresa.date`, `.title`, `.company`, `.description`
3. Entrada en `EXPERIENCE`:
```ts
{
  date: t('experience.empresa.date'),
  img: "/companies/empresa.webp",
  title: t('experience.empresa.title'),
  company: t('experience.empresa.company'),
  description: t('experience.empresa.description'),
}
```
4. `pnpm build`

## Añadir tag tecnológico
1. Icono SVG → `src/components/icons/Nombre.astro` (recibe `class` prop)
2. Importar en Projects.astro
3. Añadir a `TAGS`:
```ts
NOMBRE: { name: "Tech", class: "bg-[#HEX] text-white", icon: Icono }
```

### Plantilla de icono SVG
```astro
---
export interface Props { class?: string }
const { class: className } = Astro.props
---
<svg class={className} viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- paths -->
</svg>
```

## Colores de tags existentes
| Tag | bg |
|-----|-----|
| PHP | `#539FD4` |
| Symfony/Laravel | `#858585` |
| Vue.js | `#183D2C` |
| jQuery | `#081F33` |
| Next.js | `black` |
| Tailwind CSS | `#003159` |
