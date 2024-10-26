import type { LangType } from "@src/i18n/utils";

const defaultUi = {
  "site.title": "Astro Blog",
  "site.description": "Welcome to my website!",
  "home.hello": "👋 Hello!",
  "home.p1": ``,
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
    "site.title": "Astro Blog",
    "site.description": "Bienvenue sur mon site web !",
    "home.hello": "👋 Hello!",
    "home.p1": ``,
    page: "Page",
    "pagination.first": "Premier",
    "pagination.prev": "Précédent",
    "pagination.next": "Suivant",
    "pagination.last": "Dernier",
    "time-read": "min de lecture",
  },
};
