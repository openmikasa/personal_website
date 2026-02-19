import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blogPosts = [
    {
      title: 'Drones vs democracy',
      description: 'How autonomous weapons might fundamentally reshape the mathematical basis of democracy',
      pubDate: new Date('2026-02-15'),
      link: '/blog/drones-vs-democracy',
    },
    {
      title: 'Cost to produce to zero',
      description: 'What happens when AI and robotics drive production costs to zero',
      pubDate: new Date('2026-02-01'),
      link: '/blog/cost-to-produce-to-zero',
    },
    {
      title: 'Legacy vs AI-native companies',
      description: 'Why AI-native companies will dominate and what legacy companies have left',
      pubDate: new Date('2026-01-15'),
      link: '/blog/legacy-vs-ai-native-companies',
    },
    {
      title: 'Your brain was the bottleneck',
      description: 'How AI tools like Claude Code are removing the cognitive tax on thinking',
      pubDate: new Date('2026-01-01'),
      link: '/blog/your-brain-was-the-bottleneck',
    },
    {
      title: 'AI will make us dumber, until we get smarter',
      description: 'Exploring how AI might initially reduce our cognitive abilities, before we adapt and become stronger',
      pubDate: new Date('2025-12-01'),
      link: '/blog/ai-will-make-us-dumber',
    },
  ];

  return rss({
    title: "Ramy Ghorayeb's Blog",
    description: 'Thoughts and essays on AI, technology, and the future',
    site: context.site || 'https://ramyg.vercel.app',
    items: blogPosts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      link: post.link,
    })),
    customData: `<language>en-us</language>`,
  });
}
