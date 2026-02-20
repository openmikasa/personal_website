# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# 🤖 Project Instructions: Personal Portfolio & Digital Garden

## 🎯 Project Overview
* **Purpose:** Minimalist personal portfolio and digital garden
* **Tech Stack:** Astro 5.x, Tailwind CSS 3.x, TypeScript (strict mode)
* **Architecture:** Static site generation with file-based content management (Markdown + Astro Content Collections)

## 📦 Setup & Recovery
* **New Machine Setup:** See `SETUP.md` for complete instructions on reconstructing the project on a new computer
* **Sensitive Data:**
  - Contact form uses Formspree (ID: `mwvljpgj` in `src/pages/contact.astro`)
  - No `.env` files currently needed (all config in source)
  - Backup strategy: [Password Manager / Private Repo / Vercel Dashboard]
* **Deployment:** Auto-deploys from `main` branch to Vercel

---

## 🛠️ Mandatory Tooling (MCP)

### 1. Context7 (Documentation Skill)
* **Protocol:** Before implementing any logic involving external APIs or libraries, use the `context7` tool to fetch the most recent documentation.
* **Instruction:** Do not rely on internal knowledge for libraries like **Tailwind**, **Prisma**, or **Clerk**. Always verify syntax via `context7` to ensure we are using this year standards.

### 2. Playwright (Verification Skill)
* **Protocol:** Once a UI component or a user flow (login, checkout, etc.) is modified, use the `playwright` MCP server to verify the changes.
* **Instruction:**
    1. Run a headless browser check to ensure the page renders without 500 errors.
    2. Confirm that critical buttons are "clickable" and visible.
    3. If a visual bug is suspected, take a screenshot and analyze the layout.
    4. **Test changes when relevant or needed** - Start the dev server, verify affected pages work correctly, then close the browser and stop the server. Don't ask the user if you should test; use your judgment on when testing is necessary.

---

## 📜 Coding Standards
* **TypeScript:** Strict mode enabled. No `any` types allowed. Define interfaces for all API responses.
* **Components:** Use small, functional, atomic components.
* **Naming:** Use `kebab-case` for file names and `PascalCase` for React components.
* **Error Handling:** Use try/catch blocks with meaningful error messages and UI feedback.
* **Content Formatting:** Any content written by the user should be automatically corrected to use proper sentence case (not title case). Only capitalize the first word of sentences, proper nouns (names, places, brands like UberX, BNP Paribas, etc.), and acronyms. The backend should maintain proper casing even though the frontend displays everything in lowercase via CSS.

---

## 📁 File Structure Guidelines
* `CLAUDE.md`: This file (Project source of truth)
* `src/content/blog/`: Blog posts as Markdown files with frontmatter (using Astro Content Collections)
* `src/components/`: Reusable Astro components
* `src/layouts/`: Page layout templates (BaseLayout, PageLayout, BlogLayout)
* `src/pages/`: File-based routing (index, about, contact, projects, blog)
* `src/pages/blog/`: Blog index, RSS feed, and dynamic blog route ([...slug].astro)
* `src/data/`: TypeScript data files (navigation, social links)
* `src/styles/global.css`: Tailwind + Notion-inspired theme
* `src/assets/images/projects/`: Project screenshots and thumbnails

---

## ⚠️ Lessons Learned & Constraints
* **[Typography]** Site uses Urbanist font for body text (via --font-heading). JetBrains Mono (--font-body) is reserved only for code blocks. Never change the base font without discussion. | This is part of the Notion-inspired design system.
* **[Styling]** Use Tailwind utility classes instead of inline styles. Semantic text color classes (text-primary, text-secondary, text-link) are defined in tailwind.config.mjs. Form inputs use the .form-input utility class. | Enables proper Tailwind tree-shaking and improves maintainability.
* **[Dark Mode]** Site supports dark/light theme toggling. Theme system uses: (1) CSS variables in global.css for both light and dark themes, (2) `data-theme` attribute on html element, (3) Tailwind `darkMode: 'class'` with `dark:` variants, (4) localStorage persistence with system preference fallback, (5) FOUC prevention script in BaseLayout.astro. When adding new components, ensure text uses `text-primary` class or `var(--color-text)`, and add `dark:` variants for hardcoded colors. Strong tags require explicit `text-primary` class to override parent text-secondary inheritance. | Maintains warm Notion aesthetic in both themes.
* **[Blog Posts]** Blog uses Astro Content Collections (src/content/blog/*.md). To add a new post, create a markdown file with frontmatter (title, description, date, draft). The dynamic route ([...slug].astro) handles rendering. Update is automatic - no need to modify index or RSS feed. | Single source of truth for blog content with type-safe metadata.
* **[Work History]** Work experience is kept inline in src/pages/work.astro (not as a Content Collection). | This approach works well for infrequently updated professional history.
* **[Formspree Setup]** Contact form ID is stored in `src/pages/contact.astro` as `https://formspree.io/f/mwvljpgj`. | Formspree handles contact form submissions without exposing email.
* **[Design System]** Use Notion color palette defined in `src/styles/global.css` (--color-bg, --color-text, --color-accent, --color-border, --color-hover). Access via Tailwind classes (text-primary, text-secondary, etc.) or CSS variables for special cases. | Maintains consistent Notion-inspired aesthetic throughout the site.
* **[Components]** All Astro components use kebab-case for file names and follow strict TypeScript typing. | Ensures code consistency and type safety.
* **[Analytics]** Vercel Analytics and Speed Insights are integrated in `BaseLayout.astro` with production-only injection using `import.meta.env.PROD`. No configuration files needed - managed via Vercel dashboard. | Keep analytics code in BaseLayout only.
* **[Navigation]** Navigation order is: Home → Blog → Work → Interests → Contact. Update `src/data/navigation.ts` to change menu items. | Consistent menu across all pages.
* **[External Links]** For archive/external content, add descriptive labels outside hyperlinks (e.g., "(Google drive link)", "(WIP)") using non-linked spans for clarity. | Improves UX by setting expectations.

---

## 🔄 Updating Progress
When a task is given to you, make sure you formalize a step-by-step execution plan and use chain of thoughts if needed. Then make sure to parallelize the work with multiple agents when possible and relevant.

When a task is completed, evaluate if any new "permanent" knowledge was gained. 
Update `claude.md` if:
1. We solved a recurring bug specific to this codebase.
2. We established a new architectural pattern (e.g., "Use X for state management").
3. You learned a preference I have (e.g., "Never use semicolons," "Always use functional components").
4. A library version change requires a different syntax than your training data.

**Process:**
- Propose the change first: "I've noticed we do [X] frequently. Should I add this to claude.md?"
- Use a structured format: `[Category] Description | Rationale`.
- If you want to udpate claude.md: Make sure your change is not redundant and whether the file instructions can be compressed without any loss of information or instructions. You will do this check only based on the new information you want to add, so you don't review the same things multiple times.