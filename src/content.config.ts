import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared shape for both showcase collections. Frontmatter is validated at build
// time, so a typo in `date:` or a missing `description:` fails the build loudly
// instead of silently rendering an empty card. `image()` resolves the relative
// path to an optimized asset and carries its real dimensions through to <Image>.
const showcase = ({ image }: { image: () => z.ZodType }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: image().optional(),
    skills: z.array(z.string()).default([]),
    role: z.string().optional(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    draft: z.boolean().default(false),
  });

const technical = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/technical' }),
  schema: showcase,
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: showcase,
});

export const collections = { technical, work };
