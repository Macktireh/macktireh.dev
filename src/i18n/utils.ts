import { ui } from "@src/i18n/ui";

export const LANGUAGES = {
  en: "English",
  fr: "Français",
};

export type LangType = keyof typeof LANGUAGES;
export const DEFAULT_LANG = "en";
export const LOCALES = Object.keys(LANGUAGES) as LangType[];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (LOCALES.includes(lang as LangType)) return lang as LangType;
  return DEFAULT_LANG;
}

export function useTranslations(lang: LangType = DEFAULT_LANG) {
  return function t(
    key: keyof (typeof ui)[typeof DEFAULT_LANG],
    ...args: any[]
  ) {
    let translation = Object.keys(ui).includes(lang) ? ui[lang][key] : ui[DEFAULT_LANG][key];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = (translation.replace(`{${i}}`, args[i]) as typeof translation);
      }
    }
    return translation;
  };
}

export function pathNameIsInLanguage(pathname: string, lang: LangType) {
  return (
    pathname.startsWith(`/${lang}`) ||
    (lang === DEFAULT_LANG && !pathNameStartsWithLanguage(pathname))
  );
}

function pathNameStartsWithLanguage(pathname: string) {
  let startsWithLanguage = false;
  const languages = Object.keys(LANGUAGES);

  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    if (pathname.startsWith(`/${lang}`)) {
      startsWithLanguage = true;
      break;
    }
  }

  return startsWithLanguage;
}

export function getLocalizedPathname(pathname: string, lang: LangType) {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = Object.keys(LANGUAGES).join("|");
    const regex = new RegExp(`^\/(${availableLanguages})`);
    return pathname.replace(regex, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}
