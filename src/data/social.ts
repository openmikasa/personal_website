export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername' },
  { name: 'Email', url: 'mailto:your.email@example.com' },
];
