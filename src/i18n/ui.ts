import { SITE } from "@src/consts";
import { type LangType } from "@src/i18n/utils";

const defaultUiTranslation = {
  "site.title": SITE.author,
  "site.description": `I am {firstname} and welcome to my blog, a dedicated space for developers and technology enthusiasts!
    🚀 Here, I share 💡 ideas, 🔧 tips, 📘 tutorials, and inspiring projects related to development, covering technologies like Power BI 📊, Python 🐍, AI 🧠, TypeScript 💻, Django 🗄️, React, and React Native 📱. 
    You’ll also find resources on low-code tools, including Power Apps and Power Automate 🔄, to create innovative solutions without complex coding. 
    Join me in exploring 🌐 the world of programming and low-code!`,
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
};

type UiTranslationType = typeof defaultUiTranslation;

const _uiTranslation: Partial<Record<LangType, UiTranslationType>> = {
  [SITE.defaultLang]: defaultUiTranslation,
  fr: {
    "site.title": SITE.author,
    "site.description": `Je suis {firstname} et bienvenue sur mon blog, un espace dédié aux passionnés de développement et de technologie !
      🚀 Ici, je partage 💡 des idées, 🔧 des astuces, 📘 des tutoriels et des projets inspirants autour du développement, en couvrant des technologies telles que Power BI 📊, Python 🐍, IA 🧠, TypeScript 💻, Django 🗄️, React, et React Native 📱.
      Vous trouverez également des ressources sur les outils low-code, notamment Power Apps et Power Automate 🔄, pour créer des solutions innovantes sans code complexe.
      Rejoignez-moi pour explorer 🌐 le monde de la programmation et du low-code !`,
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
  },
};

export const uiTranslation = _uiTranslation as Record<LangType, UiTranslationType>;
