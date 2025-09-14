import { SITE } from "@src/consts";
import { type LangType } from "@src/i18n/utils";

const defaultUiTranslation = {
  "site.title": SITE.author,
  "site.description": `
    I'm {firstname}. Welcome to my blog!<br>
    Here I share what I'm most passionate about: development and tech 🚀<br>
    <ul>
      <li>practical ideas and tips</li>
      <li>articles on development, data, and AI</li>
      <li>projects with Power BI, Python, Django, TypeScript, React, and React Native</li>
      <li>and also low-code with Power Apps and Power Automate</li>
    </ul>
    <br>
    My goal: to make these tools accessible and show how to build useful and innovative solutions — with or without code.
  `,
  "navbar.posts": "Posts",
  "home.hello": "👋 Hello!",
  "home.latest-post": "Latest Posts",
  page: "Page",
  by: "by",
  "published.on": "Published on",
  "last.updated.on": "Updated on",
  "pagination.prev": "Prev",
  "pagination.next": "Next",
  "go.back": "Go back",
  "time-read": "min read",
  "coming.soon": "🚧 Coming soon!",
  "coming.soon.description": "💻 I'm working on it! 💪✨",
  "infobox.note": "Note",
  "infobox.tip": "Tip",
  "infobox.important": "Important",
  "infobox.warning": "Warning",
  "infobox.caution": "Caution",
  "cv.page.title": `Resume - ${SITE.author}`,
  "cv.page.description":
    "Full-Stack Developer specialized in Python/Django and Microsoft Power Platform",
  "cv.title": "Full-Stack Developer Python / Django / Power Platform",
  "cv.about":
    "Software engineer specialized in Python/Django and Microsoft Power Platform. Experience covering data, machine learning, web/application development and DevOps. Passionate about creating applications, APIs and end-to-end data solutions, I particularly enjoy taking part in the entire lifecycle of a project, from initial idea to production deployment.",
  "cv.contact.articles": "Articles",
  "cv.section.about": "About",
  "cv.section.skills": "Skills & Achievements",
  "cv.section.experience": "Professional Experience",
  "cv.section.opensource": "Open Source Contributions",
  "cv.section.education": "Education & Certifications",
  "cv.project.demo": "Demo",
  "cv.project.code": "Code",
  "cv.skills.desktop": "Desktop Applications (Python)",

  // Projects
  "cv.projects.ollaix":
    "Unified API (Litestar) for real-time interaction with multiple LLMs (Ollama, Google Gemini), streaming and Dockerized deployment.",
  "cv.projects.twitter-backend":
    "Complete API in Django REST & Channels: authentication, tweets, likes, retweets, notifications and real-time chat.",
  "cv.projects.mackdin":
    "LinkedIn Clone (Django, PostgreSQL, Cloudinary) for managing profiles and professional feeds.",
  "cv.projects.easycard-backend":
    "Flask API (Flask-RESTx) for secure bank card management, authentication, CRUD, and number extraction via OCR (Tesseract), with modular architecture, Docker & PDM.",
  "cv.projects.ollaix-ui":
    "Modern LLM chat interface with real-time streaming, dark mode, multilingual (FR/EN).",
  "cv.projects.twitter-frontend":
    "Responsive PWA in React/Redux, integrating all backend social features.",
  "cv.projects.meteox":
    "Mobile weather app displaying current conditions, hourly and daily forecasts, city search, local storage and data expiration (WeatherAPI API).",
  "cv.projects.easycard-desktop":
    "Python graphical application for bank card management with AI extraction, analytical dashboard and customizable themes.",

  // Experiences
  "cv.experiences.fdj.position": "Power BI & Python Developer",
  "cv.experiences.fdj.period": "06/2025 – Present",
  "cv.experiences.fdj.description":
    "Design and development of interactive Power BI dashboards (DAX/M) connected to various data sources (Teradata, APIs, Jira, etc.). Development of Python automation tools, including PDF report generation based on Jinja2 templates. User support and assistance during version upgrades and BI solution evolutions.",
  "cv.experiences.total.position": "Full-Stack Developer & Power Platform",
  "cv.experiences.total.period": "2021 – 04/2025",
  "cv.experiences.total.description":
    "Development of a Power Apps application for station data collection, with integration of Power BI reports for performance monitoring. Implementation of automated workflows with Power Automate, integrated with SharePoint, emails and webhooks. Application maintenance: bug fixes, feature optimization and writing technical and user documentation.",

  // Open Source
  "cv.opensource.description":
    "Open-source library published on PyPI to simplify multi-provider social authentication (Google, GitHub, LinkedIn, Twitter).",

  // Education
  "cv.education.powerbi.title":
    "Microsoft Certified: Power BI Data Analyst Associate",
  "cv.education.master.title": "Master in Data Science & Engineering",
  "cv.education.master.institution": "South Brittany University",
  "cv.download.pdf": "Download PDF",
  "cv.download.print": "Print",
};

type UiTranslationType = typeof defaultUiTranslation;

const _uiTranslation: Partial<Record<LangType, UiTranslationType>> = {
  [SITE.defaultLang]: defaultUiTranslation,
  fr: {
    "site.title": SITE.author,
    "site.description": `
      Moi c'est {firstname}. Bienvenue sur mon blog !<br>
      Ici, je partage ce qui me passionne : le développement et la tech 🚀<br>
      <ul>
        <li>des idées et astuces pratiques</li>
        <li>des articles autour du développement, de la data et de l'IA</li>
        <li>des projets avec Power BI, Python, Django, TypeScript, React et React Native</li>
        <li>mais aussi du low-code avec Power Apps et Power Automate</li>
      </ul>
      <br>
      Mon objectif : rendre ces outils accessibles et montrer comment créer des solutions utiles et innovantes, avec ou sans code.
    `,
    "navbar.posts": "Articles",
    "home.hello": "👋 Hello!",
    "home.latest-post": "Derniers articles",
    page: "Page",
    by: "par",
    "published.on": "Publié le",
    "last.updated.on": "Mise à jour le",
    "pagination.prev": defaultUiTranslation["pagination.prev"],
    "pagination.next": defaultUiTranslation["pagination.next"],
    "go.back": "Retourner",
    "time-read": "min de lecture",
    "coming.soon": "🚧 Bientôt disponible!",
    "coming.soon.description": "💻 Je travaille dessus ! 💪✨",
    "infobox.note": "Note",
    "infobox.tip": "Astuce",
    "infobox.important": "Important",
    "infobox.warning": "Avertissement",
    "infobox.caution": "Attention",
    "cv.page.title": `CV - ${SITE.author}`,
    "cv.page.description":
      "Développeur Full-Stack spécialisé en Python/Django et Microsoft Power Platform",
    "cv.title": "Développeur Full-Stack Python / Django / Power Platform",
    "cv.about":
      "Ingénieur logiciel spécialisé en Python/Django et Microsoft Power Platform. Expérience couvrant la data, le machine learning, le développement web/applicatif et le DevOps. Passionné par la création d'applications, APIs et solutions data de bout en bout, j'apprécie particulièrement de prendre part à tout le cycle de vie d'un projet, de l'idée initiale jusqu'à la mise en production.",
    "cv.contact.articles": "Articles",
    "cv.section.about": "À propos",
    "cv.section.skills": "Compétences & Réalisations",
    "cv.section.experience": "Expériences Professionnelles",
    "cv.section.opensource": "Contributions Open Source",
    "cv.section.education": "Formation & Certifications",
    "cv.project.demo": "Démo",
    "cv.project.code": "Code",
    "cv.skills.desktop": "Applications Desktop (Python)",

    // Projects
    "cv.projects.ollaix":
      "API unifiée (Litestar) pour interagir en temps réel avec plusieurs LLMs (Ollama, Google Gemini), streaming et déploiement Dockerisé.",
    "cv.projects.twitter-backend":
      "API complète en Django REST & Channels : authentification, tweets, likes, retweets, notifications et chat temps réel.",
    "cv.projects.mackdin":
      "Clone LinkedIn (Django, PostgreSQL, Cloudinary) pour la gestion de profils et de flux professionnels.",
    "cv.projects.easycard-backend":
      "API Flask (Flask-RESTx) pour gestion sécurisée de cartes bancaires, authentification, CRUD, et extraction de numéros via OCR (Tesseract), avec architecture modulaire, Docker & PDM.",
    "cv.projects.ollaix-ui":
      "Interface de chat LLM moderne avec streaming temps réel, mode sombre, multilingue (FR/EN).",
    "cv.projects.twitter-frontend":
      "PWA responsive en React/Redux, intégrant toutes les fonctionnalités sociales du backend.",
    "cv.projects.meteox":
      "Application mobile météo affichant conditions actuelles, prévisions horaires et journalières, recherche de villes, stockage local et expiration des données (API WeatherAPI).",
    "cv.projects.easycard-desktop":
      "Application graphique Python pour gestion de cartes bancaires avec extraction IA, tableau de bord analytique et thèmes personnalisables.",

    // Experiences
    "cv.experiences.fdj.position": "Développeur Power BI & Python",
    "cv.experiences.fdj.period": "06/2025 – Aujourd'hui",
    "cv.experiences.fdj.description":
      "Conception et développement de dashboards Power BI interactifs (DAX/M) connectés à diverses sources de données (Teradata, APIs, Jira, etc.). Développement d'outils d'automatisation en Python, incluant la génération de rapports PDF basés sur des templates Jinja2. Support et accompagnement utilisateurs lors des montées de version et évolutions des solutions BI.",
    "cv.experiences.total.position": "Développeur Full-Stack & Power Platform",
    "cv.experiences.total.period": "2021 – 04/2025",
    "cv.experiences.total.description":
      "Développement d'une application Power Apps pour la collecte de données des stations, avec intégration de rapports Power BI pour le suivi des performances. Mise en place de workflows automatisés avec Power Automate, intégrés à SharePoint, emails et webhooks. Maintenance applicative : correction de bugs, optimisation des fonctionnalités et rédaction de documentation technique et utilisateur.",

    // Open Source
    "cv.opensource.description":
      "Librairie open-source publiée sur PyPI pour simplifier l'authentification sociale multi-fournisseurs (Google, GitHub, LinkedIn, Twitter).",

    // Education
    "cv.education.powerbi.title":
      "Microsoft Certified : Power BI Data Analyst Associate",
    "cv.education.master.title": "Master en Data Science & Ingénierie",
    "cv.education.master.institution": "Université Bretagne Sud",
    "cv.download.pdf": "Télécharger PDF",
    "cv.download.print": "Imprimer",
  },
};

export const uiTranslation = _uiTranslation as Record<
  LangType,
  UiTranslationType
>;
