export interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Work', href: '/work' },
  { name: 'Interests', href: '/interests' },
  { name: 'Contact', href: '/contact' },
];
