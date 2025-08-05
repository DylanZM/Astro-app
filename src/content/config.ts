import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string().max(200),
    date: z.string().transform((str) => new Date(str)),
    avatar: z.string().url(),
  }),
});

export const collections = { blog };
 