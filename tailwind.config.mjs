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
        'notion-link': '#1A1A1A',
        'notion-border': '#E8E6E1',
        'notion-hover': '#F5F4F1',
        'notion-warm-accent': '#A68A6F',
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
