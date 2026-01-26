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
* **Content Formatting:** Any content written by the user should be automatically corrected to have consistent uppercase/lowercase formatting (proper Title Case for headings, proper capitalization for names and proper nouns). The backend should maintain proper casing even though the frontend displays everything in lowercase via CSS.

---

## 📁 File Structure Guidelines
* `CLAUDE.md`: This file (Project source of truth)
* `src/content/projects/`: Project Markdown files with frontmatter
* `src/components/`: Reusable Astro components
* `src/layouts/`: Page layout templates (BaseLayout, PageLayout, ProjectLayout)
* `src/pages/`: File-based routing (index, about, contact, projects)
* `src/data/`: TypeScript data files (navigation, skills, social links)
* `src/styles/global.css`: Tailwind + Notion-inspired theme
* `src/assets/images/projects/`: Project screenshots and thumbnails

---

## ⚠️ Lessons Learned & Constraints
* **[Typography]** Always use Inter font family. Never use other fonts without discussion. | This is part of the Notion-inspired design system.
* **[Content Updates]** To add projects, create Markdown files in `src/content/projects/` with required frontmatter fields (title, description, order, featured, tags, etc.). | File-based content management for easy AI updates.
* **[Formspree Setup]** Contact form ID is stored in `src/pages/contact.astro` as `https://formspree.io/f/YOUR_FORM_ID`. Update this placeholder before going live. | Formspree handles contact form submissions without exposing email.
* **[Design System]** Use Notion color palette defined in `src/styles/global.css` (--color-bg, --color-text, --color-accent, --color-border, --color-hover). | Maintains consistent Notion-inspired aesthetic throughout the site.
* **[Components]** All Astro components use kebab-case for file names and follow strict TypeScript typing. | Ensures code consistency and type safety.

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