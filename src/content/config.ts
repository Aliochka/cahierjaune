import { defineCollection, z } from "astro:content";
import type { Tag } from "../types/types";

const blog = defineCollection({
  type: "content", // contenu markdown/mdx
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Romain"),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.custom<Tag>()).optional().default([]), 
  }),
});

export const collections = { blog };
