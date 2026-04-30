---
name: astro-component-builder
description: "Crea componentes .astro para raulfdez.dev siguiendo patrones del proyecto. Cubre secciones de página, componentes con i18n, islas JS cliente (is:inline, astro:page-load, astro:after-swap), transition:persist, iconos SVG, reglas de estilo Tailwind-only, integración en páginas ES/EN y checklist de verificación."
---

Crea componentes `.astro` siguiendo las convenciones del proyecto.

## Patrones

### Sección de página
```astro
<SectionContainer id="section-id">
  <TitleSection>
    <Icono class="size-8" />
    {t("section.name")}
  </TitleSection>
  <ComponenteContenido />
</SectionContainer>
```

### Componente con i18n
```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

export interface Props { class?: string; title: string }

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const { class: className = "", title } = Astro.props;
---

<div class={className}>
  <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
  <p class="mt-2 text-gray-700 dark:text-gray-400">{t('key')}</p>
</div>
```

### Componente con JS cliente — islas
Hay dos tipos de `<script>` en Astro:

**`<script>` (default):** Astro lo procesa (bundling, TypeScript, import resolution). Se ejecuta una sola vez. **NO se re-ejecuta** tras ViewTransitions.
```astro
<script>
  // Se ejecuta una vez. Usar astro:page-load para re-ejecutar tras navegación SPA.
  document.addEventListener("astro:page-load", () => { /* init */ })
</script>
```

**`<script is:inline>`:** Astro NO lo procesa. Se inyecta tal cual en el HTML. **Se duplica** por cada instancia del componente. Usar solo cuando se necesita acceder al DOM inmediatamente (ej: ThemeToggle para evitar flash).
```astro
<script is:inline>
  // No TypeScript, no imports. Código JS plano.
  // Se ejecuta en cada carga de página (incluso tras ViewTransitions).
</script>
```

### Eventos ViewTransitions
```astro
<script>
  document.addEventListener("astro:page-load", () => {
    // Se ejecuta en carga inicial Y tras cada navegación SPA.
    // Usar para: añadir event listeners, iniciar observers, etc.
  })
  document.addEventListener("astro:after-swap", () => {
    // Se ejecuta justo después de que la nueva página reemplaza a la anterior.
    // Usar para: restaurar estado del DOM, scroll, tema.
    // Los elementos con transition:persist YA están en el DOM en este punto.
  })
</script>
```

### Persistencia entre navegaciones — `transition:persist`
Para elementos que deben sobrevivir a ViewTransitions sin reiniciar su estado:
```astro
<button id="theme-toggle-btn" transition:persist>...</button>
<div id="themes-menu" transition:persist>...</div>
```
El elemento de la página anterior se reutiliza en la nueva página en vez de destruirse y recrearse. Ideal para: theme toggles, reproductores de video/audio, menús abiertos.

### Componente con JS cliente (ejemplo completo)
```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<div id="my-element">...</div>

<style>
  @keyframes anim { to { opacity: 1; } }
</style>

<script>
  document.addEventListener("astro:page-load", () => {
    const el = document.getElementById("my-element")
    // init: event listeners, observers, etc.
  })
</script>
```

### Icono SVG
```astro
---
export interface Props { class?: string }
const { class: className } = Astro.props
---
<svg class={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- paths -->
</svg>
```

## Reglas de estilo
- Solo Tailwind `class`. Nada de CSS externo ni `style=` inline.
- Siempre `dark:` + light: `bg-white dark:bg-gray-950 text-black dark:text-white`
- Acento amarillo: `text-yellow-500 dark:text-yellow-200`
- Mobile-first: `flex-col md:flex-row`
- `<style>` scoped solo para `@keyframes`

## Integración en páginas
Tras crear componente + keys en `ui.ts` (es+en):

**`src/pages/index.astro` (ES):**
```astro
import NuevoComponente from "@/components/NuevoComponente.astro"
import NuevoIcono from "@/components/icons/NuevoIcono.astro"

<SectionContainer id="nueva-seccion">
  <TitleSection><NuevoIcono class="size-8" />{t("section.nueva")}</TitleSection>
  <NuevoComponente />
</SectionContainer>
```

**`src/pages/en/index.astro` (EN):** mismo bloque. Usar `@/` alias.

**Navegación (si aplica)** → `navItems` en Header.astro:
```ts
{ title: t('nav.nueva'), label: "nueva-seccion", url: "/#nueva-seccion" }
```

## Checklist final
1. Componente en `src/components/`
2. Icono en `icons/` si es necesario
3. Keys en `ui.ts` (es + en)
4. `t('key')` para TODO texto, `set:html` si contiene HTML
5. Clases `dark:` emparejadas
6. Componente con JS usa `astro:page-load` (no `DOMContentLoaded`)
7. Elementos que persisten usan `transition:persist`
8. Importado en `index.astro` y `en/index.astro`
9. `pnpm build` ✓
