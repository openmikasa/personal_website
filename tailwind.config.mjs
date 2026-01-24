/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'notion-bg': '#FAFAF8',
        'notion-text': '#2D2A26',
        'notion-text-secondary': '#5E5A54',
        'notion-text-muted': '#8B8680',
        'notion-accent': '#1A1A1A',
        'notion-link': '#2563EB',
        'notion-border': '#E8E6E1',
        'notion-hover': '#F5F4F1',
        'notion-warm-accent': '#A68A6F',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
