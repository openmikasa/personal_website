export interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Interests', href: '/interests' },
  { name: 'Recommendations', href: '/recommendations' },
  { name: 'Contact', href: '/contact' },
];
