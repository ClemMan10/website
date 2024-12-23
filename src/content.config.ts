import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const videos = defineCollection({
  loader: file("src/content/video/videos.json"),
  schema: z.object({
    slug: z.string(),
    url: z.string(),
  }),
});

export const collections = { videos };
