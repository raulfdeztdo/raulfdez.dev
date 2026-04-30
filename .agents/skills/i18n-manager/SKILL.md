---
name: i18n-manager
description: "Gestiona traducciones bilingües (ES↔EN) del portfolio raulfdez.dev. Añade/modifica keys en src/i18n/ui.ts siguiendo la convención domain.element. Cubre uso de t('key'), set:html para HTML en traducciones, y uso en componentes .astro."
---

Gestiona traducciones bilingües (ES↔EN) en `src/i18n/ui.ts`.

## Estructura
```ts
export const ui = {
    es: { 'key.name': 'Texto español' },
    en: { 'key.name': 'English text' },
} as const;
```

## Convención de keys
Formato: `domain.element` (ej: `nav.experience`, `hero.description`, `projects.tailor.title`)

## HTML en traducciones
Valores con HTML (`<b>`, `<a href>`, `<em>`, `<br>`) se renderizan con `set:html`:
```astro
<p set:html={t('hero.description')} />
```
Si no se quiere un wrapper extra, usar `Fragment`:
```astro
<Fragment set:html={t('key')} />
```
**⚠️ XSS:** `set:html` no escapa el HTML automáticamente. En este proyecto las traducciones son hardcodeadas y confiables, pero si algún día vienen de fuente externa (CMS, API), hay que sanitizarlas.

## Uso en componentes
```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h2>{t('section.name')}</h2>
```

## Estilos para HTML en traducciones
Los tags dentro de traducciones se estilizan con selectores arbitrarios de Tailwind:
```
[&>strong]:text-yellow-500 dark:[&>strong]:text-yellow-200
```

## Checklist
1. Añadir key a **ambos** `es` y `en`
2. Usar `t('key')` (texto plano) o `set:html={t('key')}` (si contiene HTML)
3. `pnpm build`

## Errores comunes
- Olvidar traducción en inglés
- Usar `{t('key')}` en vez de `set:html={t('key')}` cuando hay HTML
- Keys con mayúsculas o espacios (van lowercase con dots)
