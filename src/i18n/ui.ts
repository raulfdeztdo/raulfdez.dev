export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'nav.home': 'Inicio',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.personal_projects': 'Personales',
        'nav.about': 'Sobre mí',
        'nav.contact': 'Contacto',

        'hero.available': 'Trabajando en Emais',
        'hero.greeting': '¡Hola! Soy Raúl',
        'hero.description': '<strong>+4 años desarrollando aplicaciones web</strong> con PHP, Symfony y Laravel. Especializado en back-end, con experiencia fullstack. Andaluz viviendo en Galicia.',
        'hero.contact': 'Contáctame',

        'section.experience': 'Experiencia laboral',
        'section.projects': 'Proyectos participados',
        'section.personal_projects': 'Proyectos personales',
        'section.about': 'Sobre mí',

        'experience.emais.date': 'May 2024 - Actualmente',
        'experience.emais.title': 'Desarrollador Back-end',
        'experience.emais.company': '<a href="https://www.emais.es" target="_blank">Emais</a>',
        'experience.emais.description': 'Desarrollo y mantenimiento de la aplicación Tailor en el equipo de back-end para la gestión de activos inmobiliarios. Integración de inteligencia artificial en los procesos de desarrollo back-end.',

        'experience.itgallery.date': 'Ago 2022 - May 2024',
        'experience.itgallery.title': 'Desarrollador Fullstack',
        'experience.itgallery.company': '<a href="https://www.itgalleryapp.com/" target="_blank">IT Gallery SLU</a>',
        'experience.itgallery.description': 'Desarrollo de nuevas mejoras y arreglos para la aplicación web de <b><a href="https://www.itgalleryapp.com/es/base-datos.html" target="_blank">ITGallery</a></b> desarrollada mediante una API de Laravel. Desarrollo de la aplicación web <b><a href="https://exhibify.net/" target="_blank">Exhibify</a></b> desarrollada con un template Liquid de Shopify.',

        'experience.inforalia.date': 'Jun 2021 - Ago 2022',
        'experience.inforalia.title': 'Desarrollador Back-end',
        'experience.inforalia.company': '<a href="https://www.linkedin.com/company/inforalia-sl/" target="_blank">Inforalia</a>',
        'experience.inforalia.description': 'Experiencia como desarrollador fullstack en el proyecto de <b><a href="https://redalia.es" target="_blank">Redalia</a></b> para mantenimiento y nuevas funcionalidades. Desarrollo completo del back-end para el proyecto de <b><a href="https://combinacionganadora.com" target="_blank">CombinacionGanadora</a></b> utilizando PHP y scripting e implementación de utilidades de terceros para obtención de resultados de lotería.',

        'experience.riosa.date': 'Ago 2020 - Feb 2021<br>Jun 2019 - Sep 2019<br>Jun 2018 - Sep 2018',
        'experience.riosa.title': 'Desarrollador fullstack y mantenimiento de sistemas',
        'experience.riosa.company': '<a href="https://www.riosa.com" target="_blank">Riosa</a>',
        'experience.riosa.description': 'Desarrollo de aplicación interna en PHP para la gestión de la empresa. Mantenimiento de sistemas y servidores Linux.',

        'experience.sunaca.date': 'Sep 2019 - May 2020',
        'experience.sunaca.title': 'Becario de Ingeniería Informática',
        'experience.sunaca.company': '<a href="https://www.ventiladoressunaca.com/" target="_blank">Sunaca</a>',
        'experience.sunaca.description': 'Beca de prácticas de la universidad en la que ayudé a la empresa con una aplicación web ejecutada en la red interna de la empresa para actualizar de forma automatizada el stock de productos de la tienda online mediante ficheros CSV.',

        'projects.tailor.title': 'Tailor',
        'projects.tailor.description': 'Aplicación web para gestión integral de activos inmobiliarios mejorando la gestión de carteras de grandes tenedores',

        'projects.itgallery.title': 'ITGallery App',
        'projects.itgallery.description': 'Plataforma para la gestión de obras de arte, enfocado en coleccionistas, artistas y galerías. Aplicación creada con una API de Laravel y una interfaz de usuario desarrollada con jQuery y CSS.',

        'projects.exhibify.title': 'Exhibify',
        'projects.exhibify.description': 'Plataforma de venta de obras de arte, publicación de exhibiciones gestionadas por galerías y ferias de arte. Creada con Shopify y personalizada para ITGallery mediante un template de Liquid',

        'projects.combinacionganadora.title': 'CombinacionGanadora',
        'projects.combinacionganadora.description': 'Portal web con miles de visitas mensuales, ofrece información y resultados sobre loterías de España y de otros muchos países. Back-end desarrollado con PHP, implementación de utilidades de terceros para obtención de resultados de lotería. Front-end desarrollado con jQuery y Foundation.',

        'projects.redalia.title': 'Redalia',
        'projects.redalia.description': 'Plataforma para la venta, renovación y gestión de certificados SSL. Desarrollada en PHP con interfaz jQuery y Foundation.',

        'personal_projects.padelstats.title': 'PadelStats',
        'personal_projects.padelstats.description': 'Aplicación web pública de estadísticas de la competición profesional de Premier Padel: rankings semanales, perfiles de jugadores y parejas, torneos, partidos con estadísticas detalladas, head-to-head y gráficas del circuito. Los datos se agregan de varias fuentes oficiales y se sincronizan a una base de datos propia mediante cron de Vercel y GitHub Actions.',

        'personal_projects.kernelia.title': 'Kernelia',
        'personal_projects.kernelia.description': 'Agregador bilingüe de noticias sobre Inteligencia Artificial. Recopila publicaciones de medios de referencia, las deduplica, las clasifica por categoría y genera resúmenes mediante un agente IA (Llama 3.3 70B sobre Cerebras).',

        'personal_projects.forgottenbranches.title': 'Forgotten Branches',
        'personal_projects.forgottenbranches.description': 'CLI + interfaz web local para escanear repositorios git y clasificar ramas locales olvidadas (mergeadas, huérfanas, abandonadas o activas), con archivado y borrado en masa. Se instala como comando global mediante script.',

        'personal_projects.devtools.title': '</devTools>',
        'personal_projects.devtools.description': 'Suite de 29 herramientas de desarrollo 100% offline (JSON, conversores, generadores, formateadores, regex, JWT…). Todo el procesamiento ocurre en el navegador, sin telemetría ni CDN externos.',

        'about.name_alt': 'Raúl Fernández Tirado',
        'about.paragraph1': 'Soy Raúl Fernández Tirado, desarrollador de software de Linares (Jaén) viviendo en Galicia. Actualmente trabajo en <strong>Emais</strong> desarrollando aplicaciones web con <strong>PHP y Symfony</strong> —anteriormente con <strong>Laravel</strong>— integrando inteligencia artificial en los procesos de desarrollo back-end.',
        'about.paragraph2': 'Me gradué en <strong>Ingeniería Informática por la Universidad de Jaén</strong>, con la especialidad en Tecnologías de la Información.',
        'about.paragraph3': 'Aunque mi stack principal es PHP, también tengo conocimientos en <strong>C++, Java y Python</strong> como lenguajes de back-end, y experiencia básica con <strong>JavaScript, Vue.js y React</strong>. Fuera del código, me gusta hacer deporte, aprender trading y crear indicadores con <strong>Pine Script</strong>, además de investigar los últimos avances en <strong>inteligencia artificial</strong>.',

        'footer.copyright': '',
        'footer.about': 'Sobre mí',
        'footer.contact': 'Contacto',

        'theme.choose': 'Elige el tema',
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.system': 'System',

        'language.choose': 'Cambiar idioma',

        'common.learn_more': 'Saber más',
        'common.code': 'Code',
        'common.link': 'Link',

        'meta.title': 'Raúl Fdez. - Desarrollador de software',
        'meta.description': 'Desarrollador de software con más de 4 años de experiencia. Especializado en aplicaciones web con PHP (Laravel y Symfony) y scripting con Python',
    },
    en: {
        'nav.home': 'Home',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.personal_projects': 'Personal',
        'nav.about': 'About me',
        'nav.contact': 'Contact',

        'hero.available': 'Working at Emais',
        'hero.greeting': 'Hello! I\'m Raúl',
        'hero.description': '<strong>+4 years building web applications</strong> with PHP, Symfony and Laravel. Back-end specialist with fullstack experience. Andalusian living in Galicia.',
        'hero.contact': 'Contact me',

        'section.experience': 'Work Experience',
        'section.projects': 'Featured Projects',
        'section.personal_projects': 'Personal Projects',
        'section.about': 'About me',

        'experience.emais.date': 'May 2024 - Present',
        'experience.emais.title': 'Back-end Developer',
        'experience.emais.company': '<a href="https://www.emais.es" target="_blank">Emais</a>',
        'experience.emais.description': 'Development and maintenance of the Tailor application in the back-end team for real estate asset management. Integration of artificial intelligence into back-end development processes.',

        'experience.itgallery.date': 'Aug 2022 - May 2024',
        'experience.itgallery.title': 'Fullstack Developer',
        'experience.itgallery.company': '<a href="https://www.itgalleryapp.com/" target="_blank">IT Gallery SLU</a>',
        'experience.itgallery.description': 'Development of new improvements and fixes for the <b><a href="https://www.itgalleryapp.com/es/base-datos.html" target="_blank">ITGallery</a></b> web application built with a Laravel API. Development of the <b><a href="https://exhibify.net/" target="_blank">Exhibify</a></b> web application built with a Shopify Liquid template.',

        'experience.inforalia.date': 'Jun 2021 - Aug 2022',
        'experience.inforalia.title': 'Back-end Developer',
        'experience.inforalia.company': '<a href="https://www.linkedin.com/company/inforalia-sl/" target="_blank">Inforalia</a>',
        'experience.inforalia.description': 'Experience as fullstack developer in the <b><a href="https://redalia.es" target="_blank">Redalia</a></b> project for maintenance and new functionalities. Complete back-end development for the <b><a href="https://combinacionganadora.com" target="_blank">CombinacionGanadora</a></b> project using PHP and scripting and implementation of third-party utilities for obtaining lottery results.',

        'experience.riosa.date': 'Aug 2020 - Feb 2021<br>Jun 2019 - Sep 2019<br>Jun 2018 - Sep 2018',
        'experience.riosa.title': 'Fullstack developer and systems maintenance',
        'experience.riosa.company': '<a href="https://www.riosa.com" target="_blank">Riosa</a>',
        'experience.riosa.description': 'Development of internal PHP application for company management. Linux systems and servers maintenance.',

        'experience.sunaca.date': 'Sep 2019 - May 2020',
        'experience.sunaca.title': 'Computer Engineering Intern',
        'experience.sunaca.company': '<a href="https://www.ventiladoressunaca.com/" target="_blank">Sunaca</a>',
        'experience.sunaca.description': 'University internship scholarship where I helped the company with a web application running on the company\'s internal network to automatically update the online store product stock through CSV files.',

        'projects.tailor.title': 'Tailor',
        'projects.tailor.description': 'Web application for comprehensive real estate asset management improving portfolio management for large holders',

        'projects.itgallery.title': 'ITGallery App',
        'projects.itgallery.description': 'Platform for artwork management, focused on collectors, artists and galleries. Application created with a Laravel API and a user interface developed with jQuery and CSS.',

        'projects.exhibify.title': 'Exhibify',
        'projects.exhibify.description': 'Artwork sales platform, publication of exhibitions managed by galleries and art fairs. Created with Shopify and customized for ITGallery through a Liquid template',

        'projects.combinacionganadora.title': 'CombinacionGanadora',
        'projects.combinacionganadora.description': 'Web portal with thousands of monthly visits, offers information and results about lotteries from Spain and many other countries. Back-end developed with PHP, implementation of third-party utilities for obtaining lottery results. Front-end developed with jQuery and Foundation.',

        'projects.redalia.title': 'Redalia',
        'projects.redalia.description': 'Platform for selling, renewing and managing SSL certificates. Developed in PHP with a jQuery and Foundation interface.',

        'personal_projects.padelstats.title': 'PadelStats',
        'personal_projects.padelstats.description': 'Public web app for professional Premier Padel statistics: weekly rankings, player and pair profiles, tournaments, matches with detailed stats, head-to-head and circuit-wide charts. Data is aggregated from several official sources and synced to an own database via Vercel cron and GitHub Actions.',

        'personal_projects.kernelia.title': 'Kernelia',
        'personal_projects.kernelia.description': 'Bilingual AI news aggregator. It collects posts from reference media, deduplicates them, classifies them by category and generates summaries using an AI agent (Llama 3.3 70B on Cerebras).',

        'personal_projects.forgottenbranches.title': 'Forgotten Branches',
        'personal_projects.forgottenbranches.description': 'CLI + local web UI to scan git repositories and classify forgotten local branches (merged, orphan, abandoned or active), with archiving and bulk deletion. Installs as a global command via script.',

        'personal_projects.devtools.title': '</devTools>',
        'personal_projects.devtools.description': 'Suite of 29 fully offline developer tools (JSON, converters, generators, formatters, regex, JWT…). All processing happens in the browser, with no telemetry or external CDNs.',

        'about.name_alt': 'Raúl Fernández Tirado',
        'about.paragraph1': 'I\'m Raúl Fernández Tirado, a software developer from Linares (Jaén) living in Galicia. I currently work at <strong>Emais</strong> building web applications with <strong>PHP and Symfony</strong> —previously with <strong>Laravel</strong>— integrating artificial intelligence into back-end development processes.',
        'about.paragraph2': 'I hold a degree in <strong>Computer Engineering from the University of Jaén</strong>, specializing in Information Technologies.',
        'about.paragraph3': 'While PHP is my core stack, I also have knowledge of <strong>C++, Java and Python</strong> for back-end development, and basic experience with <strong>JavaScript, Vue.js and React</strong>. Outside of coding, I enjoy sports, learning trading and building indicators with <strong>Pine Script</strong>, as well as keeping up with advances in <strong>artificial intelligence</strong>.',

        'footer.copyright': '',
        'footer.about': 'About me',
        'footer.contact': 'Contact',

        'theme.choose': 'Choose theme',
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.system': 'System',

        'language.choose': 'Change language',

        'common.learn_more': 'Learn more',
        'common.code': 'Code',
        'common.link': 'Link',

        'meta.title': 'Raúl Fdez. - Software Developer',
        'meta.description': 'Software developer with more than 4 years of experience. Specialized in web applications with PHP (Laravel and Symfony) and scripting with Python',
    },
} as const;