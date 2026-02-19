import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const blogPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => {
      const dateA = new Date(a.data.date);
      const dateB = new Date(b.data.date);
      return dateB.getTime() - dateA.getTime();
    });

  return rss({
    title: "Ramy Ghorayeb's Blog",
    description: 'Thoughts and essays on AI, technology, and the future',
    site: context.site || 'https://ramyg.vercel.app',
    items: blogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
