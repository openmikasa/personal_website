import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(999), // Manual sorting (1 = highest priority)
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    thumbnail: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
