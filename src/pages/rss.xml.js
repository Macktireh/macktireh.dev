import rss from "@astrojs/rss";
import { getPostsByLang } from "@src/services/posts";
import { DEFAULT_LANG, useTranslations } from "@src/i18n/utils";


export async function GET(context) {
  const t = useTranslations(DEFAULT_LANG)
  const posts = await getPostsByLang(DEFAULT_LANG);
  return rss({
    title: t("site.title"),
    description: t("site.description", { firstname: SITE.authorFirstName }),
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${DEFAULT_LANG}${post.pathname}`,
    })),
  });
}
