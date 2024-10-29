import rss from "@astrojs/rss";
import { getPostsByLang } from "@src/services/posts";
import { LOCALES, useTranslations } from "@src/i18n/utils";
import { SITE } from "@src/consts"

export function getStaticPaths() {
  const paths = LOCALES.map((lang) => ({
    params: { lang },
  }));
  return paths;
}

export async function GET(context) {
  const { lang } = context.params;
  const t = useTranslations(lang);
  const posts = await getPostsByLang(lang);
  return rss({
    title: t("site.title"),
    description: t("site.description", { firstname: SITE.authorFirstName }),
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${lang}${post.pathname}`,
    })),
  });
}
