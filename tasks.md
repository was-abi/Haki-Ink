# Tasks: Digital Bookshelf — Step-by-Step Breakdown

## Overview
This document breaks down the PRD into actionable tasks organized by phase:
1. **Project Setup** — Initialize the project structure
2. **Design & UI** — Build the visual layer (pages, components)
3. **Content & Data** — Set up MDX files and database
4. **Logic & Interactivity** — Implement forms, API routes, and moderation
5. **Polish & Deployment** — Performance, accessibility, and launch

---

## Phase 1: Project Setup

### Task 1.1: Initialize Next.js Project
- [ ] Create Next.js 14+ project with TypeScript, Tailwind CSS, and App Router
- [ ] Install dependencies: `next`, `react`, `tailwindcss`, `@tailwindcss/typography`, `next-mdx-remote` (or `velite`)
- [ ] Set up folder structure (see PRD section 5.3)
- [ ] Create `.env.local` with placeholder database and admin token

### Task 1.2: Set Up Git & Version Control
- [ ] Initialize git repo
- [ ] Create `.gitignore` (node_modules, .env.local, build artifacts)
- [ ] Make first commit: "Initial project setup"

### Task 1.3: Configure Fonts & Design System
- [ ] Add Playfair Display (headings) and Inter (body) from Google Fonts
- [ ] Configure `tailwind.config.ts` with custom color palette (see PRD section 8.1)
- [ ] Create `globals.css` with Tailwind directives and custom utilities
- [ ] Verify fonts load correctly

---

## Phase 2: Design & UI — Build Pages and Components

### Task 2.1: Create Root Layout
- [ ] Build `app/layout.tsx` with:
  - Meta tags (title, description, Open Graph)
  - Font imports (Playfair Display, Inter)
  - Dark mode support (context or `prefers-color-scheme`)
  - Global styles and provider setup

### Task 2.2: Build Homepage (`/`)
- [ ] Create `app/page.tsx` with:
  - Header with title and dark mode toggle
  - Responsive grid container (2-3 columns desktop, 1 mobile)
  - Placeholder grid layout (no data yet)
- [ ] Style with Tailwind (colors, spacing, typography per design system)

### Task 2.3: Create BookCard Component
- [ ] Build `components/BookCard.tsx` with:
  - Cover image (optimized with `next/image`)
  - Book title, author, summary
  - Star rating display (★★★☆☆)
  - Status badge ("Currently Reading", "Finished", "DNF")
  - Hover effects (subtle shadow, 5% image zoom, text brighten)

### Task 2.4: Build Review Detail Page (`/reviews/[slug]`)
- [ ] Create `app/reviews/[slug]/page.tsx` with:
  - Sticky header with back button and dark mode toggle
  - Book metadata (title, author, rating, status, cover image)
  - Content placeholder (will connect to MDX later)
  - Comments section placeholder (will build in Phase 4)

### Task 2.5: Create Prose Styling for Articles
- [ ] Set up `@tailwindcss/typography` prose class for MDX content
- [ ] Customize prose for custom font and color scheme
- [ ] Style code blocks, blockquotes, lists (if MDX content includes them)

### Task 2.6: Build Admin Comments Page (`/admin/comments`)
- [ ] Create `app/admin/comments/page.tsx` with:
  - Placeholder layout for comments table
  - Filters (status, search)
  - Action buttons (Approve, Delete, Mark as Spam)
  - **Note:** Add admin auth middleware in Phase 4

---

## Phase 3: Content & Data Setup

### Task 3.1: Configure MDX Parsing
- [ ] Set up `lib/mdx.ts`:
  - Load MDX files from `/content/reviews/`
  - Parse frontmatter (title, author, date, rating, status, coverImage, summary)
  - Export functions to get all reviews and individual review by slug
- [ ] Use `next-mdx-remote` or `velite` (choose based on preference)

### Task 3.2: Create TypeScript Types
- [ ] Build `lib/types.ts` with interfaces:
  - `Review` (title, author, date, rating, status, coverImage, summary, slug, draft)
  - `Comment` (id, slug, name, comment, isApproved, createdAt)

### Task 3.3: Create Sample MDX Files
- [ ] Create 2-3 example reviews in `/content/reviews/`:
  - `the-great-gatsby.mdx`
  - `to-kill-a-mockingbird.mdx`
  - `the-brothers-karamazov.mdx`
- [ ] Include proper frontmatter and sample markdown content

### Task 3.4: Add Cover Images
- [ ] Create `/public/covers/` folder
- [ ] Add sample cover images (JPG or PNG, optimized)
- [ ] Update MDX frontmatter `coverImage` paths

### Task 3.5: Set Up Database (Supabase or Neon)
- [ ] Choose Supabase or Neon PostgreSQL
- [ ] Create `comments` table with schema (see PRD section 5.2):
  - `id` (UUID, primary key)
  - `slug` (string, not null)
  - `name` (string, not null)
  - `comment` (text, max 500 chars)
  - `isApproved` (boolean, default false)
  - `createdAt` (timestamp, default now())
  - `updatedAt` (timestamp, default now())
- [ ] Create index on `slug` and `isApproved` for query performance
- [ ] Set up connection string in `.env.local`

---

## Phase 4: Logic & Interactivity

### Task 4.1: Connect Homepage to MDX
- [ ] Update `app/page.tsx` to:
  - Fetch all reviews from MDX via `lib/mdx.ts`
  - Exclude drafts (`draft: true`)
  - Pass data to BookCard components
  - Test with sample data

### Task 4.2: Connect Review Detail Page to MDX
- [ ] Update `app/reviews/[slug]/page.tsx` to:
  - Fetch review by slug
  - Render MDX content with prose styling
  - Display all metadata (title, author, rating, cover image)
  - Generate static routes (`generateStaticParams`)

### Task 4.3: Build Comment System — Database Utilities
- [ ] Create `lib/comments.ts` with functions:
  - `getApprovedComments(slug)` — fetch approved comments
  - `getAllComments()` — fetch all (admin only)
  - `createComment(slug, name, comment)` — insert new comment
  - `updateCommentStatus(id, isApproved)` — approve/reject
  - `deleteComment(id)` — remove comment
- [ ] Add input validation (name required, comment 2-500 chars)
- [ ] Add sanitization (escape HTML to prevent XSS)

### Task 4.4: Build Comment Form Component
- [ ] Create `components/CommentForm.tsx` with:
  - Name input (text, required)
  - Comment textarea (required, min 2 chars, max 500)
  - Form validation (inline error messages)
  - Submit button with loading spinner
  - Success message (auto-hide after 3-5 seconds)
  - Prevent double-submission (disable during submission)

### Task 4.5: Build Comments Display Component
- [ ] Create `components/CommentSection.tsx` with:
  - Fetch approved comments for a slug
  - Display each comment: author name, timestamp (relative), comment text
  - Render CommentForm below comments
  - Handle loading and error states

### Task 4.6: Create Comments API Route
- [ ] Build `app/api/comments/route.ts`:
  - POST handler for new comments
  - Accept: `{ slug, name, comment }`
  - Validate and sanitize inputs
  - Call `createComment()` from `lib/comments.ts`
  - Return success/error with HTTP status codes
  - Test with Postman or curl

### Task 4.7: Build Admin Comments Page Logic
- [ ] Update `app/admin/comments/page.tsx` to:
  - Fetch all comments (approved and pending)
  - Display in table with columns: author, comment, status, date, actions
  - Add filters (Pending, Approved, Spam)
  - Add search by slug or author name
  - Implement Approve/Delete/Mark Spam buttons (call API endpoints)
- [ ] Create API routes for admin actions:
  - `PUT /api/comments/[id]` — update status (approve, reject, spam)
  - `DELETE /api/comments/[id]` — delete comment

### Task 4.8: Add Admin Route Protection
- [ ] Create `middleware.ts`:
  - Check for `ADMIN_TOKEN` in headers for `/admin/*` routes
  - Redirect unauthorized access
- [ ] Set `ADMIN_TOKEN` in `.env.local`

### Task 4.9: Integrate Comments into Review Pages
- [ ] Update `app/reviews/[slug]/page.tsx` to:
  - Render `<CommentSection />` below article content
  - Pass slug to component
  - Handle comment submission flow

---

## Phase 5: Polish & Deployment

### Task 5.1: Dark Mode Implementation
- [ ] Set up dark mode context/provider (if not done in Phase 2)
- [ ] Update all components to respect dark mode (use Tailwind `dark:` utilities)
- [ ] Test toggle on all pages
- [ ] Ensure colors meet WCAG AA contrast ratio (≥4.5:1)

### Task 5.2: Mobile Responsiveness
- [ ] Test on mobile breakpoints (sm, md, lg, xl)
- [ ] Verify:
  - Grid adapts to 1 column on mobile
  - Text remains readable
  - Forms are touch-friendly (large inputs)
  - Images scale appropriately
- [ ] Use Chrome DevTools device emulation

### Task 5.3: Accessibility Audit
- [ ] Run axe DevTools or similar
- [ ] Check:
  - Semantic HTML (proper heading hierarchy, `<article>`, `<nav>`)
  - Color contrast (≥4.5:1)
  - Form labels properly associated
  - Keyboard navigation (Tab, Enter)
  - Alt text on images
- [ ] Fix any violations

### Task 5.4: Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize:
  - Image formats (WebP, AVIF)
  - Bundle size (check with `next/bundle-analyzer`)
  - CSS and JavaScript (tree-shake unused code)
  - Font loading strategy (font-display: swap)
  - Core Web Vitals (LCP, FID, CLS)
- [ ] Aim for Lighthouse scores ≥90

### Task 5.5: SEO & Meta Tags
- [ ] Add meta tags to all pages:
  - Title, description, Open Graph (og:title, og:description, og:image)
  - Twitter Card tags
- [ ] Generate sitemap (use `next-sitemap` or manual)
- [ ] Create `robots.txt` in `/public/`
- [ ] Test with OpenGraph debugger

### Task 5.6: Error Handling & Edge Cases
- [ ] Test:
  - Missing cover images (fallback placeholder)
  - Missing or invalid MDX files (error page)
  - Database connection failure (graceful error)
  - Comment submission errors (user-friendly message)
- [ ] Set up error logging (optional: Sentry, LogRocket)

### Task 5.7: Testing
- [ ] Manual end-to-end testing:
  - Browse homepage, click cards
  - Navigate to review pages
  - Submit a comment, verify it appears (after approval)
  - Test admin panel (approve/delete comments)
  - Toggle dark mode
  - Test on mobile
- [ ] Optional: Set up automated tests (Jest, React Testing Library)

### Task 5.8: Pre-Launch Checklist
- [ ] Verify all items from PRD section 11:
  - MDX files created with correct frontmatter
  - Cover images optimized
  - Database schema created
  - Environment variables configured
  - Lighthouse scores ≥90
  - Accessibility audit passed
  - Mobile responsiveness verified
  - Dark mode tested
  - Forms validated
  - SEO meta tags verified

### Task 5.9: Deploy to Vercel
- [ ] Connect GitHub/GitLab repo to Vercel
- [ ] Set up environment variables on Vercel (DATABASE_URL, ADMIN_TOKEN)
- [ ] Deploy to production
- [ ] Test live site (form submission, admin panel, comments moderation)
- [ ] Monitor Vercel dashboard for errors

### Task 5.10: Post-Launch
- [ ] Share with beta testers
- [ ] Monitor comments and moderate as needed
- [ ] Gather feedback for v1.1
- [ ] Plan future features (search, stats, tags)

---

## Beginner Tips: How to "Vibe Code" in This Project

### 1. **Start Small, Build Up**
- Don't try to build everything at once.
- Follow the phases in order: Setup → UI → Data → Logic → Polish.
- Each task is a small, completable unit.

### 2. **Read the PRD Alongside Your Code**
- Refer to the PRD when you're unsure about design, types, or features.
- Section 5.3 shows folder structure; follow it exactly.
- Section 8 shows the design system; use those colors and fonts in Tailwind.

### 3. **Use AI/Claude Code to Your Advantage**
- Ask Claude to explain Next.js concepts (App Router, dynamic routes, SSR).
- Ask Claude to help debug when tests fail.
- Let Claude write repetitive code (e.g., form validation, API routes) so you learn patterns.
- Read the generated code to understand how it works.

### 4. **Understand the Tech Stack**
- **Next.js + React:** Framework for pages and components. Pages are files in `app/`.
- **TypeScript:** Adds type safety. Helps catch bugs early. Define interfaces in `lib/types.ts`.
- **Tailwind CSS:** Utility-first CSS. Use `className="text-lg font-bold text-red-600"` instead of writing CSS.
- **MDX:** Markdown + React. Write reviews as `.mdx` files with frontmatter metadata.
- **PostgreSQL:** Database for comments. SQL queries via `lib/comments.ts`.

### 5. **Break Each Task Into Sub-Steps**
Example: Task 2.3 (BookCard Component):
1. Create the file `components/BookCard.tsx`
2. Accept props: `{ coverImage, title, author, rating, status, summary }`
3. Use `next/image` for the cover
4. Render title as `<h3>` (serif font)
5. Render stars: map rating (0-5) to ★ and ☆
6. Add hover effects: shadow increase, scale image, brighten text
7. Test with a sample review

### 6. **Test as You Go**
- After each task, check your work:
  - `npm run dev` — start dev server
  - Open `http://localhost:3000` in browser
  - Does it look right? Does it work?
- Don't wait until the end to test.

### 7. **Use Browser DevTools**
- **Inspector:** Check spacing, colors, fonts (is the design matching?)
- **Console:** Look for JavaScript errors
- **Network:** Check if pages load fast
- **Responsive:** Test on mobile sizes (375px, 768px, 1024px)

### 8. **Understand the Component Flow**
```
app/page.tsx (Homepage)
  ├── Fetches reviews from MDX (lib/mdx.ts)
  ├── Maps each review to <BookCard /> component
  └── BookCard shows title, author, cover, rating, status

app/reviews/[slug]/page.tsx (Review Detail)
  ├── Fetches MDX file for that slug
  ├── Renders full article content
  └── Includes <CommentSection /> at bottom
    ├── Fetches approved comments (lib/comments.ts)
    ├── Shows each comment
    └── Includes <CommentForm /> for new comments
```

### 9. **Database Workflow**
- When a visitor submits a comment:
  1. Form validates (name required, comment 2-500 chars)
  2. POST to `/api/comments` with `{ slug, name, comment }`
  3. API calls `lib/comments.ts` → `createComment()`
  4. Function inserts into PostgreSQL with `isApproved = false`
  5. Success message shown to user
  6. Comment appears on the page only after admin approves it (in `/admin/comments`)

### 10. **Don't Skip Error Handling**
- What if a review file is missing? → Show error page
- What if the database is down? → Show user-friendly error
- What if a user submits a bad comment? → Show validation error
- Ask Claude to help with try/catch blocks and error messages.

### 11. **Keep a Learning Log**
- Write down things you learn:
  - "How Next.js dynamic routes work"
  - "How to fetch data in Server Components"
  - "How to style with Tailwind"
  - "How to sanitize user input"
- Refer back when you're stuck.

### 12. **Ask Questions**
- Not sure what a task means? Re-read the PRD section.
- Confused about code? Ask Claude to explain.
- Stuck on a bug? Describe what you tried, what you expected, what happened instead.

---

## Phase Ordering Recommendation

**Follow this order to stay motivated:**

1. **Phase 1** (1 day) — Quick win: Project setup, git, fonts.
2. **Phase 2** (2-3 days) — Visual progress: Build all pages and components. See it on screen.
3. **Phase 3** (1 day) — Data: Create sample reviews, set up database.
4. **Phase 4** (2-3 days) — Interactivity: Connect data, build forms, API routes.
5. **Phase 5** (1-2 days) — Polish: Dark mode, accessibility, performance, deploy.

**Total:** ~7-10 days if you work steadily.

---

## How to Approach Each Task

For **every task**, ask Claude:
1. "What's the code structure for [Task X]?"
2. "Show me a working example."
3. "Explain what this code does."
4. "How do I test this?"

Then:
- [ ] Write/copy the code
- [ ] Run `npm run dev`
- [ ] Open browser and verify
- [ ] Check for errors in terminal
- [ ] Move to next task

---

**Good luck! You've got this.** 🚀
