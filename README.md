# 🚀 raulfdez.dev — Portfolio Personal

<div align="center">

![Astro](https://img.shields.io/badge/Astro-4.4-FF3E00?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
[![Netlify Status](https://api.netlify.com/api/v1/badges/52699236-271a-4739-a4fd-fa7dc22ac1d0/deploy-status)](https://app.netlify.com/projects/raulfdeztdo/deploys)
![License](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey?style=flat-square)

</div>

**[https://raulfdez.dev](https://raulfdez.dev)**

---

## 📖 Sobre el proyecto

Portfolio personal como desarrollador de software. Muestra mi experiencia profesional, proyectos destacados y habilidades técnicas. Construido con **Astro SSG** (Static Site Generation) para máximo rendimiento, con soporte multiidioma nativo y cambio dinámico de tema.

Basado en la plantilla [midudev/porfolio.dev](https://github.com/midudev/porfolio.dev).

### ✨ Características

- 🌐 **Multiidioma** — Español e inglés con sistema de i18n propio
- 🌙 **Tema oscuro/claro** — Modo claro, oscuro y automático (sistema)
- ⚡ **Rendimiento** — Astro SSG, cero JavaScript innecesario en cliente
- 📱 **Responsive** — Mobile-first, adaptado a todos los dispositivos
- 🎯 **SEO** — Metadatos, Open Graph, JSON-LD, sitemap, robots.txt, hreflang
- 🔗 **View Transitions** — Navegación SPA con animaciones nativas del navegador

---

## 🛠️ Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | [Astro](https://astro.build) | 4.4.5 |
| Estilos | [Tailwind CSS](https://tailwindcss.com) | 3.4.1 |
| Lenguaje | [TypeScript](https://www.typescriptlang.org) | 5.3.3 |
| Tipografía | [Onest Variable](https://fontsource.org) | 5.0.2 |
| i18n | Sistema propio (sin librería externa) | — |
| Deploy | [Netlify](https://netlify.com) | Git CI |

---

## 🚀 Instalación y uso

### Requisitos

- Node.js 18 o superior
- npm 9 o superior

```bash
# Clonar el repositorio
git clone https://github.com/raulfdeztdo/raulfdez.dev.git
cd raulfdez.dev

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:4321)
npm run dev

# Construir para producción (dist/)
npm run build

# Previsualizar el build
npm run preview
```

---

## 📁 Estructura del proyecto

```
raulfdez.dev/
├── public/
│   ├── companies/            # Logos de empresas (.webp)
│   ├── projects/             # Imágenes de proyectos (.webp)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── me.webp               # Foto para Hero
│   ├── porfolio.webp          # Imagen Open Graph
│   └── raulfdez.webp          # Foto para About Me
├── src/
│   ├── components/
│   │   ├── AboutMe.astro
│   │   ├── Badge.astro
│   │   ├── Experience.astro
│   │   ├── ExperienceItem.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LanguageSelector.astro
│   │   ├── LinkButton.astro
│   │   ├── LinkInline.astro
│   │   ├── Projects.astro
│   │   ├── SectionContainer.astro
│   │   ├── SocialPill.astro
│   │   ├── ThemeToggle.astro
│   │   ├── TitleSection.astro
│   │   └── icons/             # 17 iconos SVG inline
│   ├── i18n/
│   │   ├── ui.ts              # Traducciones ES ↔ EN (~50 keys)
│   │   └── utils.ts           # Helpers: getLangFromUrl, useTranslations, translatePath
│   ├── layouts/
│   │   └── Layout.astro       # HTML raíz, meta tags, SEO, estilos globales
│   └── pages/
│       ├── index.astro        # Página ES (default, /)
│       ├── en/
│       │   └── index.astro    # Página EN (/en/)
│       └── components.astro   # Catálogo de componentes (/components/)
├── astro.config.mjs           # i18n routing, site URL, integraciones
├── tailwind.config.mjs        # darkMode: 'class'
├── tsconfig.json              # strict, path alias @/
├── netlify.toml               # Build config Node 18, SPA redirects
└── package.json
```

---

## 🌍 Internacionalización

Sistema de i18n propio sin dependencias externas:

| Idioma | URL | Locale |
|--------|-----|--------|
| Español (default) | `/` | `es` |
| English | `/en/` | `en` |

- Traducciones en `src/i18n/ui.ts` (~50 keys por idioma)
- Detección automática desde la URL
- Soporte para HTML en traducciones mediante `set:html`
- `hreflang` tags para SEO multiidioma

---

## 📄 Licencia

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — Creative Commons Attribution-NonCommercial 4.0 International

---

## 🙏 Agradecimientos

- **[midudev](https://github.com/midudev)** por la plantilla base [porfolio.dev](https://github.com/midudev/porfolio.dev)
- **Comunidad Astro** por la documentación y el ecosistema
- **Tailwind CSS** por el framework de estilos utilitario

---

<div align="center">
Hecho con ❤️ por <strong>Raúl Fernández</strong>
</div>
