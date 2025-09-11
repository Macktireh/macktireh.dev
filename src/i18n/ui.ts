import { SITE } from "@src/consts";
import { type LangType } from "@src/i18n/utils";

const defaultUiTranslation = {
  "site.title": SITE.author,
  "site.description": `
    I’m {firstname}. Welcome to my blog!<br>
    Here I share what I’m most passionate about: development and tech 🚀<br>
    <ul>
      <li>💡 practical ideas and tips</li>
      <li>📘 articles on development, data, and AI</li>
      <li>🐍 projects with Power BI, Python, Django, TypeScript, React, and React Native</li>
      <li>🔄 and also low-code with Power Apps and Power Automate</li>
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
  "cv.title": "Curriculum Vitae",
  "cv.description":
    "Professional background, skills, projects, and certifications.",
  "cv.role": "Full-Stack Developer Python / Django / Power Platform",
  "cv.badge.powerbi": "Power BI Certified",

  "cv.now": "Present",

  "cv.about.title": "About me",
  "cv.about.text": `Software engineer specialized in Python/Django and Microsoft Power Platform.
    Experience spans data, machine learning, web/application development, and DevOps.
    Passionate about building end-to-end applications, APIs, and data-driven solutions, I enjoy taking part in the entire project lifecycle — from the initial idea to production deployment.
`,

  "cv.skills.title": "Skills",
  "cv.skills.backend": "Backend",
  "cv.skills.frontend": "Frontend",
  "cv.skills.power": "Power Platform",
  "cv.skills.data": "Data & ML",
  "cv.skills.devops": "DevOps & Tools",

  "cv.experience.title": "Professional Experience",
  "cv.experience.freelance.title": "Freelance & Personal Projects",
  "cv.experience.eviden.desc":
    "Full-stack developer at Eviden (for TotalEnergies). Ownership of end-to-end lifecycle: from REST APIs to data visualization and low-code automation.",
  "cv.experience.eviden.b1":
    "Designed and maintained Django REST APIs with authentication, caching, and background tasks.",
  "cv.experience.eviden.b2":
    "Built Power BI dashboards with robust data models (DAX/M) for operational insights.",
  "cv.experience.eviden.b3":
    "Automated workflows with Power Automate and integrated services (SharePoint, email, webhooks).",
  "cv.experience.freelance.desc":
    "Delivered custom apps and dashboards for SMEs combining Python/Django/Flask and Power BI.",
  "cv.experience.freelance.b1":
    "Developed secure CRUD back-ends and admin tools.",
  "cv.experience.freelance.b2":
    "Created interactive BI reports connected to APIs/SQL sources.",
  "cv.experience.freelance.b3": "Set up CI/CD with Docker and GitHub Actions.",

  "cv.projects.title": "Projects",
  "cv.projects.link.demo": "Demo",
  "cv.projects.link.code": "Code",
  "cv.projects.meteox":
    "React Native weather app using WeatherAPI with clean UI and offline-friendly caching.",
  "cv.projects.djinitializr":
    "Online generator to scaffold Django projects (Starlette API + React UI).",
  "cv.projects.eventmanager":
    "Spring Boot app to manage events, invitations, and seat allocation with reminders.",

  "cv.education.title": "Education & Certifications",
  "cv.education.master.title": "Master’s in Data Science & Engineering",
  "cv.education.master.meta": "University (2019)",
  "cv.certifications.powerbi.title":
    "Microsoft Certified: Power BI Data Analyst Associate",
  "cv.certifications.powerbi.meta": "Issued 2023",

  "cv.contact.title": "Contact",
};

type UiTranslationType = typeof defaultUiTranslation;

const _uiTranslation: Partial<Record<LangType, UiTranslationType>> = {
  [SITE.defaultLang]: defaultUiTranslation,
  fr: {
    "site.title": SITE.author,
    "site.description": `
      Moi c’est {firstname}. Bienvenue sur mon blog !<br>
      Ici, je partage ce qui me passionne : le développement et la tech 🚀<br>
      <ul>
        <li>💡 des idées et astuces pratiques</li>
        <li>📘 des articles autour du développement, de la data et de l’IA</li>
        <li>🐍 des projets avec Power BI, Python, Django, TypeScript, React et React Native</li>
        <li>🔄 mais aussi du low-code avec Power Apps et Power Automate</li>
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
    "cv.title": "Curriculum Vitae",
    "cv.description":
      "Parcours professionnel, compétences, projets et certifications.",
    "cv.role": "Développeur Full-Stack Python / Django / Power Platform",
    "cv.badge.powerbi": "Certifié Power BI",

    "cv.now": "Aujourd’hui",

    "cv.about.title": "À propos",
    "cv.about.text": `Ingénieur logiciel spécialisé en Python/Django et Microsoft Power Platform.  
      Expérience couvrant la data, le machine learning, le développement web/applicatif et le DevOps.  
      Passionné par la création d’applications, APIs et solutions data de bout en bout, j’apprécie particulièrement de prendre part à tout le cycle de vie d’un projet, de l’idée initiale jusqu’à la mise en production.`,
    "cv.skills.title": "Compétences",
    "cv.skills.backend": "Backend",
    "cv.skills.frontend": "Frontend",
    "cv.skills.power": "Power Platform",
    "cv.skills.data": "Data & ML",
    "cv.skills.devops": "DevOps & Outils",

    "cv.experience.title": "Expériences professionnelles",
    "cv.experience.freelance.title": "Freelance & Projets personnels",
    "cv.experience.eviden.desc":
      "Développeur full-stack chez Eviden (pour TotalEnergies). Prise en charge du cycle complet : des APIs REST à la data viz et l’automatisation low-code.",
    "cv.experience.eviden.b1":
      "Conception et maintenance d’APIs Django REST avec auth, cache et tâches asynchrones.",
    "cv.experience.eviden.b2":
      "Création de tableaux de bord Power BI avec modèles de données solides (DAX/M) pour la décision.",
    "cv.experience.eviden.b3":
      "Automatisation de workflows avec Power Automate et intégrations (SharePoint, email, webhooks).",
    "cv.experience.freelance.desc":
      "Réalisation d’apps et de dashboards pour PME combinant Python/Django/Flask et Power BI.",
    "cv.experience.freelance.b1":
      "Développement de back-ends sécurisés et outils d’administration.",
    "cv.experience.freelance.b2":
      "Conception de rapports BI interactifs connectés à des APIs/sources SQL.",
    "cv.experience.freelance.b3":
      "Mise en place de CI/CD avec Docker et GitHub Actions.",

    "cv.projects.title": "Projets",
    "cv.projects.link.demo": "Démo",
    "cv.projects.link.code": "Code",
    "cv.projects.meteox":
      "Application météo React Native (WeatherAPI), UI soignée et cache offline-friendly.",
    "cv.projects.djinitializr":
      "Générateur en ligne pour démarrer des projets Django (API Starlette + UI React).",
    "cv.projects.eventmanager":
      "App Spring Boot pour gérer événements, invitations et places, avec rappels.",

    "cv.education.title": "Formation & Certifications",
    "cv.education.master.title": "Master en Data Science & Ingénierie",
    "cv.education.master.meta": "Université (2019)",
    "cv.certifications.powerbi.title":
      "Microsoft Certified : Power BI Data Analyst Associate",
    "cv.certifications.powerbi.meta": "Délivrée en 2023",

    "cv.contact.title": "Contact",
  },
};

export const uiTranslation = _uiTranslation as Record<
  LangType,
  UiTranslationType
>;
