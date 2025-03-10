import { defineCollection, z } from 'astro:content';

// Define a schema type for better TypeScript support
const baseSchema = z.object({
  title: z.string(),
  image: z.string().optional(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  date: z.date().optional(),
});

// Export the schema type
export type BaseSchema = z.infer<typeof baseSchema>;

const posts = defineCollection({
  type: 'content',
  schema: baseSchema
});

const projects = defineCollection({
  type: 'content',
  schema: baseSchema
});

export const collections = { posts, projects };
