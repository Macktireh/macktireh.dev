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
    "Software engineer specialized in Python/Django and Microsoft Power Platform. Experience covering data, web/application development and DevOps. Passionate about creating applications, APIs and end-to-end data solutions, I particularly enjoy taking part in the entire lifecycle of a project, from initial idea to production deployment.",
  "cv.contact.articles": "Articles",
  "cv.section.about": "About",
  "cv.section.skills": "Skills & Achievements",
  "cv.section.experience": "Professional Experience",
  "cv.section.opensource": "Open Source Contributions",
  "cv.section.education": "Education & Certifications",
  "cv.project.demo": "Demo",
  "cv.project.code": "Code",
  "cv.skills.containerization": "Containerization",

  // Projects
  "cv.projects.ollaix.title":
    "OllaixAPI – Unified API enabling real-time interaction with multiple LLMs, featuring streaming.",
  "cv.projects.ollaix.description":
    "Unified API enabling real-time interaction with multiple LLMs (Ollama, Google Gemini), featuring streaming and Dockerized deployment.",
  "cv.projects.mackdin.title":
    "Mackdin – Full-stack LinkedIn clone with user profiles, professional feeds, notification management...",
  "cv.projects.mackdin.description":
    "Full-stack LinkedIn clone (Django, PostgreSQL) with user profiles, professional feeds, notifications, media management.",
  "cv.projects.easycard.title":
    "EasyCard – Complete app for secure bank card management with authentication, AI-powered OCR, and analytical dashboard.",
  "cv.projects.easycard.description":
    "Complete solution (Flask backend + Python desktop app) for secure bank card management with authentication, AI-powered OCR, and analytical dashboard.",
  "cv.projects.ollaix-ui.title":
    "OllaixUI – Modern interface for real-time LLM conversations, with multilingual support.",
  "cv.projects.ollaix-ui.description":
    "Modern React/TypeScript interface for real-time LLM conversations, featuring dark mode and multilingual support (FR/EN).",
  "cv.projects.twitter.title":
    "Twitter – Full-stack app replicating Twitter's core social and real-time features.",
  "cv.projects.twitter.description":
    "Full-stack application (Django REST + React/Redux PWA) replicating Twitter’s core social and real-time features (tweets, likes, retweets, notifications, chat).",
  "cv.projects.meteox.title":
    "Meteox – Cross-platform mobile app delivering real-time weather data and forecasts.",
  "cv.projects.meteox.description":
    "Cross-platform mobile app delivering real-time weather data and forecasts with city search and intelligent local storage.",
  "cv.projects.dockerisation":
    "Docker & Docker Compose orchestration for Ollaix, Twitter Clone, and EasyCard.",
  "cv.projects.cicd":
    "GitHub Actions pipelines (build, test, deploy) across multiple projects.",
  "cv.projects.packaging":
    "Publishing and maintaining Python libraries on PyPI",

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
      "Ingénieur logiciel spécialisé en Python/Django et Microsoft Power Platform. Expérience couvrant la data, le développement web/applicatif et le DevOps. Passionné par la création d'applications, APIs et solutions data de bout en bout, j'apprécie particulièrement de prendre part à tout le cycle de vie d'un projet, de l'idée initiale jusqu'à la mise en production.",
    "cv.contact.articles": "Articles",
    "cv.section.about": "À propos",
    "cv.section.skills": "Compétences & Réalisations",
    "cv.section.experience": "Expériences Professionnelles",
    "cv.section.opensource": "Contributions Open Source",
    "cv.section.education": "Formation & Certifications",
    "cv.project.demo": "Démo",
    "cv.project.code": "Code",
    "cv.skills.containerization": "Conteneurisation",

    // Projects
    "cv.projects.ollaix.title":
      "OllaixAPI – API unifiée permettant d'interagir en streaming avec plusieurs LLMs.",
    "cv.projects.ollaix.description":
      "API unifiée permettant d'interagir en streaming avec plusieurs LLMs (Ollama, Google Gemini) via une architecture Dockerisée performante.",
    "cv.projects.mackdin.title":
      "Mackdin – Clone LinkedIn full-stack offrant profils utilisateurs, gestion de notification...",
    "cv.projects.mackdin.description":
      "Clone LinkedIn full-stack (Django, PostgreSQL) offrant profils utilisateurs, flux professionnels et gestion de notification.",
    "cv.projects.easycard.title":
      "EasyCard – App complète pour la gestion sécurisée de cartes bancaires avec auth, OCR IA et tableau de bord analytique.",
    "cv.projects.easycard.description":
      "Solution complète (Flask backend + app desktop Python) pour la gestion sécurisée de cartes bancaires avec authentification, OCR IA et tableau de bord analytique.",
    "cv.projects.ollaix-ui.title":
      "OllaixUI – Interface moderne en pour dialoguer avec des LLMs en temps réel, avec prise en charge multilingue.",
    "cv.projects.ollaix-ui.description":
      "Interface moderne en React/TypeScript pour dialoguer avec des LLMs en temps réel, avec mode sombre et multilingue (FR/EN).",
    "cv.projects.twitter.title":
      "Twitter – App full-stack reproduisant les principales fonctionnalités sociales et temps réel de Twitter.",
    "cv.projects.twitter.description":
      "Application full-stack (Django REST + React/Redux PWA) reproduisant les principales fonctionnalités sociales et temps réel de Twitter (tweets, likes, retweets, notifications, chat).",
    "cv.projects.meteox.title":
      "Meteox – Application mobile cross-platform offrant météo en temps réel et prévisions détaillées.",
    "cv.projects.meteox.description":
      "Application mobile cross-platform offrant météo en temps réel et prévisions détaillées, avec recherche de villes et stockage local intelligent.",
    "cv.projects.dockerisation":
      "Conteneurisation et orchestration avec Docker & Docker Compose pour Ollaix, Twitter Clone et EasyCard.",
    "cv.projects.cicd":
      "Automatisation des pipelines GitHub Actions (build, tests, déploiement) pour plusieurs projets.",
    "cv.projects.packaging":
      "Publication et maintenance de librairies Python sur PyPI",

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
