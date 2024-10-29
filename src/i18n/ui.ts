import { SITE } from "@src/consts";
import { type LangType } from "@src/i18n/utils";

const defaultUiTranslation = {
  "site.title": SITE.author,
  "site.description": `I am <strong>{firstname}</strong> and welcome to my blog, a dedicated space for developers and technology enthusiasts!
    🚀 Here, I share 💡 ideas, 🔧 tips, 📘 tutorials, and inspiring projects related to development, covering frameworks like Python 🐍, TypeScript 💻, Django 🗄️, React, and React Native 📱. 
    You’ll also find resources on low-code tools, including Power BI 📊, Power Apps, and Power Automate 🔄, to create innovative solutions without complex coding. 
    Join me in exploring 🌐 the world of programming and low-code!`,
  "navbar.posts": "Posts",
  "home.hello": "👋 Hello!",
  "home.latest-post": "Latest Posts",
  page: "Page",
  by: "by",
  "published.on": "Published on",
  "last.updated.on": "Updated on",
  "pagination.first": "First",
  "pagination.prev": "Previous",
  "pagination.next": "Next",
  "pagination.last": "Last",
  "go.back": "Go back",
  "time-read": "min read",
};

type UiTranslationType = typeof defaultUiTranslation;

const _uiTranslation: Partial<Record<LangType, UiTranslationType>> = {
  [SITE.defaultLang]: defaultUiTranslation,
  fr: {
    "site.title": SITE.author,
    "site.description": `Je suis <strong>{firstname}</strong> et bienvenue sur mon blog, un espace dédié aux passionnés de développement et de technologie !
      🚀 Ici, je partage 💡 des idées, 🔧 des astuces, 📘 des tutoriels et des projets inspirants autour du développement, couvrant des frameworks tels que Python 🐍, TypeScript 💻, Django 🗄️, React et React Native 📱.
      Vous trouverez également des ressources sur les outils low-code, notamment Power BI 📊, Power Apps et Power Automate 🔄, pour créer des solutions innovantes sans code complexe.
      Rejoignez-moi pour explorer 🌐 le monde de la programmation et du low-code !`,
    "navbar.posts": "Articles",
    "home.hello": "👋 Hello!",
    "home.latest-post": "Derniers articles",
    page: "Page",
    by: "par",
    "published.on": "Publié le",
    "last.updated.on": "Mise à jour le",
    "pagination.first": "Premier",
    "pagination.prev": "Précédent",
    "pagination.next": "Suivant",
    "pagination.last": "Dernier",
    "go.back": "Retourner",
    "time-read": "min de lecture",
  },
};

export const uiTranslation = _uiTranslation as Record<LangType, UiTranslationType>;
