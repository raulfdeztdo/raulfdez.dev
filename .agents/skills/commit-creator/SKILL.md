---
name: commit-creator
description: "Crea commits siguiendo Conventional Commits v1.0.0 para raulfdez.dev. Cubre formato <type>(<scope>): <description>, tipos (feat/fix/docs/refactor/ci/chore/style/test/perf), scopes del proyecto (Header/Projects/Experience/i18n/Footer/Hero/AboutMe), breaking changes con ! y footer, descripciones en español, y validación de mensajes."
---

Crea mensajes de commit para raulfdez.dev siguiendo Conventional Commits.

## Especificación — Conventional Commits v1.0.0

### Formato
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Reglas
1. `type` y `description` son obligatorios
2. `description` en minúscula (primera letra)
3. Sin punto final en `description`
4. Máximo 72 caracteres en `description` (ideal), 100 máximo
5. `BREAKING CHANGE:` en footer o `!` tras type/scope para cambios que rompen compatibilidad
6. Línea en blanco entre header y body/footer

### Tipos estándar
| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad (MINOR en semver) |
| `fix` | Corrección de bug (PATCH en semver) |
| `docs` | Solo cambios en documentación |
| `style` | Formato, espacios, punto y coma (sin cambio de lógica) |
| `refactor` | Cambio de código que ni arregla bug ni añade feature |
| `perf` | Mejora de rendimiento |
| `test` | Añadir o corregir tests |
| `build` | Sistema de build, dependencias externas |
| `ci` | Configuración CI/CD |
| `chore` | Tareas de mantenimiento, limpieza |
| `revert` | Revertir commit anterior |

## Scopes del proyecto
Basados en la estructura real de `src/components/` y `src/i18n/`:

| Scope | Área |
|-------|------|
| `Header` | Navegación, observer, menú |
| `Hero` | Sección hero, badge, social pills |
| `Experience` | Timeline experiencia laboral |
| `Projects` | Grid proyectos, TAGS |
| `AboutMe` | Sección sobre mí |
| `Footer` | Footer, copyright |
| `Layout` | Layout.astro global |
| `ThemeToggle` | Tema dark/light/system |
| `LanguageSelector` | Selector ES/EN |
| `i18n` | Traducciones en ui.ts |
| `Icons` | Iconos SVG |
| `Badge` | Componente badge animado |
| `SocialPill` | Botones sociales |
| `SectionContainer` | Wrapper secciones |
| `TitleSection` | Títulos de sección |
| `LinkButton` | Botones link |
| `config` | astro.config, tailwind.config, tsconfig, netlify |
| `build` | Scripts, dependencias |
| `skills` | Skills en .agents/ |
| `docs` | AGENTS.md, architecture.md, etc. |

## Convenciones específicas del proyecto

1. **Descripciones en inglés** y en minúscula inicial:
```
feat(Projects): add Tailor project
fix(Header): fix observer thresholds
docs(i18n): update about section translations
refactor(Experience): simplify timeline structure
ci: add netlify config
chore: clean up unused assets
```

2. **Descripción concisa** (idealmente ≤50 chars). Explica el "qué" y el "por qué", no el "cómo".
   - ✅ `fix(Header): adjust observer margin for mobile`
   - ❌ `fix(Header): changed rootMargin value to -20%`

3. **Body opcional** para contexto adicional (separado por línea en blanco):
```
refactor(Projects): remove Vue tag from Tailor

Tailor uses Symfony, not Vue.js. The tag was incorrect since the initial commit.
```

4. **Breaking changes** con `!` o footer:
```
refactor(i18n)!: change key format to domain.action.element

BREAKING CHANGE: old keys like 'hero.description' become 'hero.description.text'
```

## Cómo generar un commit
1. Analiza los cambios: `git status`, `git diff`
2. Identifica el tipo según la naturaleza del cambio
3. Identifica el scope (componente o área afectada). Si afecta a varios, usa el más significativo o omite scope.
4. Redacta descripción en inglés, ≤50 chars ideal, explicando el cambio
5. Si es necesario, añade body con contexto/justificación
6. Ejecuta: `git add` + `git commit -m "mensaje"`

## Ejemplos del historial real del proyecto
```
feat: 🎉 Initial commit: Portfolio personal de Raúl Fernández
docs: update README by removing image and refining description
chore: clean up project assets and format config files
ci: add netlify config and update site url in astro config
refactor(components): optimize images and improve responsive styles
fix(Header): adjust intersection observer thresholds and margins
refactor(pages): standardize import statements and fix layout structure
docs(i18n): update about section content in ui translations
refactor(Projects): remove Vue tag from Tailor project
```

## Verificación
Tras commitear, verificar con:
```bash
git log -1 --format="%s"
```
Si el proyecto tuviera commitlint configurado, validaría automáticamente.
