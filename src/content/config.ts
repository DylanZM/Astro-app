import { defineCollection, z } from "astro:content";
import { Tags } from "lucide-react";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),
    avatar: z.string().url(),

  }),
});

export const collections = { blog };
 