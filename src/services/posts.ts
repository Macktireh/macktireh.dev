import { getCollection, type CollectionEntry } from "astro:content";
import type { LangType } from "@src/i18n/utils";

export type BlogType = CollectionEntry<"posts"> & {
  blog_slug: string;
  pathname: string;
};

export async function getPosts() {
  const posts = await getCollection("posts");
  if (Boolean(import.meta.env.WITH_DRAFTS)) return posts
  return posts.filter((post) => !post.data.draft);
}

export async function getPostsSorted(): Promise<BlogType[]> {
  const posts = await getPosts();
  return posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const blog_slug = post.slug.split("/")[0].split("_")[1];
      const pathname = `/posts/${blog_slug}`;
      return {
        ...post,
        blog_slug,
        pathname,
      };
    });
}

export async function getPostsByLang(lang: LangType): Promise<BlogType[]> {
  return (await getPostsSorted()).filter((post) => {
    return post?.data?.lang === lang;
  });
}
