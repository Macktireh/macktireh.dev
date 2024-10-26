import { defineCollection, z, type CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { LOCALES, type LangType } from "@src/i18n/utils";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    lang: z.enum(LOCALES as [string, ...string[]]),
    author: z.string().optional(),
  }),
});

export const collections = { blog };

export type BlogType = CollectionEntry<"blog"> & {
  blog_slug: string;
  pathname: string;
};

export async function getPosts(): Promise<BlogType[]> {
  const posts = await getCollection("blog");

  return posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      const blog_slug = post.slug.split("/")[0];
      const pathname = `/blog/${blog_slug}`;
      return {
        ...post,
        blog_slug,
        pathname,
      };
    });
}

export async function getPostsByLang(lang: LangType): Promise<BlogType[]> {
  return (await getPosts()).filter((blog) => {
    return blog?.data?.lang === lang;
  });
}
