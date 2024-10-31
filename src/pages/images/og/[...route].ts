import { SITE } from "@src/consts";
import { getPostsSorted } from "@src/services/posts";
import { OGImageRoute } from "astro-og-canvas";

const posts = await getPostsSorted();

// Transform the collection into an object
const pages = Object.fromEntries(
  posts.map(({ id, blog_slug, data }) => [id, { blog_slug, data }])
);


export const { getStaticPaths, GET } = OGImageRoute({
  // The name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: "route",

  // A collection of pages to generate images for.
  pages,

  // For each page, this callback will be used to customize the OG image.
  getImageOptions: async (_, { data, blog_slug }: (typeof pages)[string]) => {    
    return {
      title: data.title,
      description: data.description,
      padding: 76,
      bgImage: {
        path: SITE.ogImagePost,
        size: [1200, 630],
        fit: "cover",
      }
    };
  },
});
