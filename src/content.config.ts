import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { WORK_TYPES, type WorkType } from './lib/types';

// One folder per post: src/content/work/<slug>/index.mdx (+ its images).
const work = defineCollection({
  loader: glob({
    pattern: '*/index.mdx',
    base: './src/content/work',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      type: z.enum(Object.keys(WORK_TYPES) as [WorkType, ...WorkType[]]),
      date: z.coerce.date(),
      role: z.string().optional(),
      timeline: z.string().optional(),
      skills: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      tldr: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
