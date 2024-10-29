import { defineCollection, z } from "astro:content";
import { DEFAULT_LANG, LOCALES, type LangType } from "@src/i18n/utils";
import { SITE } from "@src/consts";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default(SITE.authorFirstName),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    lang: z.enum(LOCALES as [LangType, ...LangType[]]).default(DEFAULT_LANG),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };
