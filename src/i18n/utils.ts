import { SITE } from "@src/consts";
import { uiTranslation } from "@src/i18n/ui";

export type LangType = keyof typeof SITE.languages;
export const DEFAULT_LANG = SITE.defaultLang as LangType;
export const LOCALES = Object.keys(SITE.languages) as LangType[];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (LOCALES.includes(lang as LangType)) return lang as LangType;
  return DEFAULT_LANG;
}

export function useTranslations(lang: LangType = DEFAULT_LANG) {
  return function t(
    key: keyof (typeof uiTranslation)[typeof DEFAULT_LANG],
    args?: Record<string, string>
  ) {
    let translation = Object.keys(uiTranslation).includes(lang)
      ? uiTranslation[lang][key]
      : uiTranslation[DEFAULT_LANG][key];
    if (args) {
      for (let key of Object.keys(args)) {
        translation = translation.replaceAll(
          `{${key}}`,
          args[key]
        ) as typeof translation;
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

  for (let i = 0; i < LOCALES.length; i++) {
    const lang = LOCALES[i];
    if (pathname.startsWith(`/${lang}`)) {
      startsWithLanguage = true;
      break;
    }
  }

  return startsWithLanguage;
}

export function getLocalizedPathname(pathname: string, lang: LangType) {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = LOCALES.join("|");
    const regex = new RegExp(`^\/(${availableLanguages})`);
    return pathname.replace(regex, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}
