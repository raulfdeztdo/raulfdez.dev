# Non-Negotiable Rules

## 1. Bilingüe ES+EN
Toda key en `src/i18n/ui.ts` debe existir en **ambos** objetos `es` y `en`. Formato: `domain.element` (ej: `hero.greeting`). Nunca hardcodear texto en `.astro`, usar siempre `t('key')`.

## 2. Build sin errores
`npm run build` ejecuta `astro check` antes de build. Debe pasar con **0 errores TypeScript**.

## 3. Tailwind-only
Solo clases Tailwind para estilos. Nada de CSS externo. `<style>` scoped solo para `@keyframes`. `<style is:global>` solo en Layout.ao (fuentes, scroll, color-scheme). Dark mode con `dark:` prefix.

## 4. Componentes .astro
Todo en `.astro`. Nada de React/Vue/Svelte. Si se necesita JS cliente, `<script>` inline dentro del `.astro`.

## 5. Conventional Commits
`<tipo>(<scope>): <descripción en español>`. Tipos: `feat | fix | docs | refactor | ci | chore`.

## 6. Imágenes WebP
Solo `.webp` en `public/`. Excepción: `favicon.ico` y `.svg`.

## 7. Path alias @/
`import X from "@/components/X.astro"` (nunca rutas relativas `../../`).

## 8. Node 18
Producción usa Node 18 (Netlify). No usar APIs posteriores.

## 9. Sin secretos
Nunca hardcodear API keys, tokens ni credenciales. `.env` está en `.gitignore`.

## 10. ViewTransitions
El sitio usa `<ViewTransitions />`. Scripts cliente deben escuchar `astro:after-swap` para re-inicializar estado. Usar `transition:persist` en elementos que persisten entre navegaciones.

## 11. Verificar con build
Tras cualquier cambio en `.astro`, `.ts` o `.tsx` → `npm run build`. `dist/` nunca se commitea.

## 12. SPA estático
Sin SSR, sin endpoints API. El catch-all `/*` → `/index.html` de Netlify es el único "enrutamiento" en producción.

## 13. CC BY-NC 4.0
Atribución a midudev/porfolio.dev en README. Uso comercial prohibido.
