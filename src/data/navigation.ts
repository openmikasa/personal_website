export interface NavigationItem {
  name: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { name: 'home', href: '/' },
  { name: 'work', href: '/work' },
  { name: 'interests', href: '/interests' },
  { name: 'contact', href: '/contact' },
];
