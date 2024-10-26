import rss from "@astrojs/rss";
import { getPostsByLang } from "@src/content/config";
import { ui } from "@src/i18n/ui";
import { LOCALES } from "@src/i18n/utils";

export function getStaticPaths() {
  const paths = LOCALES.map((lang) => ({
    params: { lang },
  }));
  return paths;
}

export async function GET(context) {
  const { lang } = context.params;
  const posts = await getPostsByLang(lang);
  return rss({
    title: ui[lang]["site.title"],
    description: ui[lang]["site.description"],
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${lang}${post.pathname}`,
    })),
  });
}
