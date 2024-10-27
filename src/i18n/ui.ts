import type { LangType } from "@src/i18n/utils";

const defaultUi = {
  "site.title": "Macktireh ABDI SOUBANEH",
  "site.description": `I am <strong>Macktireh</strong> and welcome to my blog, a dedicated space for developers and technology enthusiasts!
    🚀 Here, I share 💡 ideas, 🔧 tips, 📘 tutorials, and inspiring projects related to development, covering frameworks like Python 🐍, TypeScript 💻, Django 🗄️, React, and React Native 📱. 
    You’ll also find resources on low-code tools, including Power BI 📊, Power Apps, and Power Automate 🔄, to create innovative solutions without complex coding. 
    Join me in exploring 🌐 the world of programming and low-code!`,
  "navbar.posts": "Posts",
  "home.hello": "👋 Hello!",
  "home.latest-post": "Latest Posts",
  page: "Page",
  "pagination.first": "First",
  "pagination.prev": "Previous",
  "pagination.next": "Next",
  "pagination.last": "Last",
  "time-read": "min read",
};

// Derive the type for the translations from defaultUi
type UiTranslationType = typeof defaultUi;

// Define the translations, enforcing consistency with UiTranslationType
export const ui: Record<LangType, UiTranslationType> = {
  en: defaultUi,
  fr: {
    "site.title": "Macktireh ABDI SOUBANEH",
    "site.description": `Je suis <strong>Macktireh</strong> et bienvenue sur mon blog, un espace dédié aux passionnés de développement et de technologie ! 
      🚀 Ici, je partage 💡 des idées, 🔧 des astuces, 📘 des tutoriels et des projets inspirants autour du développement, couvrant des frameworks tels que Python 🐍, TypeScript 💻, Django 🗄️, React et React Native 📱. 
      Vous trouverez également des ressources sur les outils low-code, notamment Power BI 📊, Power Apps et Power Automate 🔄, pour créer des solutions innovantes sans code complexe. 
      Rejoignez-moi pour explorer 🌐 le monde de la programmation et du low-code !`,
    "navbar.posts": "Articles",
    "home.hello": "👋 Hello!",
    "home.latest-post": "Derniers articles",
    page: "Page",
    "pagination.first": "Premier",
    "pagination.prev": "Précédent",
    "pagination.next": "Suivant",
    "pagination.last": "Dernier",
    "time-read": "min de lecture",
  },
};
