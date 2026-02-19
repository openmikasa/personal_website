# Setting Up Giscus Comments

To enable comments on your blog, you need to configure Giscus:

## Steps:

1. **Enable GitHub Discussions** on your repository:
   - Go to: https://github.com/openmikasa/personal_website/settings
   - Scroll to "Features" section
   - Check "Discussions"

2. **Get Giscus Configuration**:
   - Visit: https://giscus.app/
   - Enter your repo: `openmikasa/personal_website`
   - Select category: Create a new category called "Blog Comments" (or use existing)
   - Choose mapping: "pathname" (already configured)
   - Giscus will generate IDs for you

3. **Update Comments Component**:
   - Open: `src/components/Comments.astro`
   - Replace `YOUR_REPO_ID` with the `data-repo-id` from giscus.app
   - Replace `YOUR_CATEGORY_ID` with the `data-category-id` from giscus.app

4. **Deploy**:
   - Commit and push changes
   - Comments will appear on all blog posts!

## Current Status:
- ✅ Comments component created
- ✅ Added to all blog posts
- ⏳ Needs Giscus configuration (follow steps above)
