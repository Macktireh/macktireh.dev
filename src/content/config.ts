import { defineCollection, z, type CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { LOCALES, type LangType } from "@src/i18n/utils";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    lang: z.enum(LOCALES as [LangType, ...LangType[]]),
    author: z.string().optional(),
  }),
});

export const collections = { posts };

export type BlogType = CollectionEntry<"posts"> & {
  blog_slug: string;
  pathname: string;
};

export async function getPosts(): Promise<BlogType[]> {
  const posts = await getCollection("posts");

  return posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const blog_slug = post.slug.split("/")[0];
      const pathname = `/posts/${blog_slug}`;
      return {
        ...post,
        blog_slug,
        pathname,
      };
    });
}

export async function getPostsByLang(lang: LangType): Promise<BlogType[]> {
  return (await getPosts()).filter((post) => {
    return post?.data?.lang === lang;
  });
}
