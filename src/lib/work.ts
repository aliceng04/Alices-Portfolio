import { getCollection } from 'astro:content';

// Published posts, newest first. Drafts show while running locally (npm run dev)
// so they can be previewed, but never reach the built site.
export async function getWork() {
  const posts = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
