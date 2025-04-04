import { defineCollection, z } from "astro:content";
import { DEFAULT_LANG, LOCALES, type LangType } from "@src/i18n/utils";
import { SITE } from "@src/consts";

const posts = defineCollection({
  schema: z.object({
    title: z.string().min(10).max(100),
    description: z.string().min(50).max(200),
    author: z.string().default(SITE.authorFirstName),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default(["others"]),
    heroImage: z.string().optional(),
    lang: z.enum(LOCALES as [LangType, ...LangType[]]).default(DEFAULT_LANG),
    giscusTitleDiscussionsMapping: z.string().min(10),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };
