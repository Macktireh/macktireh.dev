import type { LangType } from "@src/i18n/utils";
import { defineCollection, z, type CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    lang: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { blog };

export type BlogType = CollectionEntry<"blog"> & { blog_slug: string };

export async function getBlogPosts() {
  const posts = await getCollection("blog");

  return posts.map((post) => {
    const blog_slug = post.slug.split("/")[0];
    return {
      ...post,
      blog_slug,
    };
  });
}

export async function getBlogPostsByLang(lang: LangType) {
  return (await getCollection("blog"))
    .filter((blog) => {
      return blog?.data?.lang === lang;
    })
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
