# Product Requirements Document: Minimalist MDX Book Review Blog

**Project Name:** Digital Bookshelf
**Version:** 1.0
**Last Updated:** 2026-02-25
**Status:** In Development

---

## 1. Executive Summary

**Digital Bookshelf** is a minimalist personal book review blog designed to showcase and share book reviews with a clean, elegant interface. Built with Next.js and powered by local MDX files, it combines the simplicity of file-based content management with the interactivity of a guest comment system. The blog emphasizes performance, accessibility, and a distraction-free reading experience.

---

## 2. Product Vision & Goals

### Vision
Create a "Digital Bookshelf" — a personal reading portfolio that reflects literary taste while inviting guest interaction, all delivered with minimalist design principles.

### Goals
1. **Content First:** Manage reviews via local MDX files with zero complexity.
2. **Performance:** Achieve >90 Lighthouse scores across all pages.
3. **Simplicity:** No friction for visitors — browse, read, comment without authentication.
4. **Aesthetic Excellence:** Ultra-minimalist design with elegant typography and ample whitespace.
5. **Moderation Control:** Admin capability to approve/filter comments and prevent spam.

---

## 3. Target Users

### Primary User: The Author
- Personal book reviewer who wants to share reviews publicly.
- Comfortable with Markdown/MDX but prefers not to manage a traditional CMS.
- Wants a modern, aesthetically pleasing showcase.
- Expects simple admin controls for comment moderation.

### Secondary User: Readers/Guests
- Visiting the blog to read book reviews.
- May wish to leave comments or reactions.
- Expect intuitive navigation and fast performance.
- Should not be required to create an account.

---

## 4. Core Features

### 4.1 Homepage: The Grid
**Route:** `/`

#### Requirements
- Display all published books as a responsive grid of cards.
- Grid should be 2-3 columns on desktop, 1 column on mobile, with responsive behavior.
- Each card shows:
  - `coverImage` (optimized with `next/image`)
  - `title`
  - `author`
  - `rating` (displayed as star rating, e.g., ★★★★☆)
  - `summary` (one or two sentences)
  - Visual indicator for `status` (e.g., "Currently Reading", "Finished")
- Cards should have subtle hover effects (slight shadow, image scale, opacity change).
- No pagination initially; if >20 reviews, consider lazy loading.
- Search/filter by title, author, or rating (optional for v1, consider for v2).
- Dark mode toggle in header.

#### Design Specifications
- Layout: Grid with 24px gap between cards.
- Typography: Serif font (e.g., Playfair Display) for headings, sans-serif (e.g., Inter) for UI.
- Colors: White/off-white background (light mode), near-black background (dark mode).
- Hover State: Subtle shadow increase, 5% image zoom, text color slightly brightens.

---

### 4.2 Review Detail Page
**Route:** `/reviews/[slug]`

#### Requirements
- Render full MDX content from `.mdx` file.
- Display metadata:
  - Book title (H1 with serif font)
  - Author name
  - Publication/review date
  - Rating (star display)
  - Reading status badge
  - Cover image (large, full-width or 50% width)
- Use `@tailwindcss/typography` prose class for article styling.
- Sticky navigation bar with:
  - Back to Home link (top-left)
  - Dark mode toggle (top-right)
  - Optional: Reading progress indicator
- Guest Comment Section:
  - Positioned at bottom of review
  - Shows existing approved comments in reverse-chronological order
  - Each comment displays: Author name, timestamp, and comment text
  - Form to submit new comments (Name + Comment textarea)
  - Submit button with loading state
  - Success/error messages
- No comment author email display to protect privacy.

#### Design Specifications
- Max content width: 65ch (for readability).
- Serif typography for body prose.
- Adequate line-height (1.75) and letter-spacing (0.5px) for comfort.
- Code blocks (if MDX contains code): Dark background, syntax highlighting.
- Images in prose: Rounded corners (4px), subtle shadow.

---

### 4.3 Guest Comment System
**Scope:** Allow unregistered visitors to comment on reviews.

#### Requirements
- **Frontend Form:**
  - Two fields: Name (text input), Comment (textarea, min 2 chars, max 500 chars).
  - Form validation: Show inline error messages (name required, comment length rules).
  - Submit button with loading spinner.
  - Success message ("Thanks for your comment!") with short auto-hide (3-5 seconds).
  - Prevent double-submission (button disabled during submission).

- **Backend Logic:**
  - POST endpoint: `/api/comments`
  - Accepts: `{ slug, name, comment }`
  - Database: Supabase or Neon PostgreSQL.
  - Store: `name`, `comment`, `slug`, `createdAt`, `isApproved` (default: false).
  - Return success/error with HTTP status codes.

- **Comment Display:**
  - Only show comments where `isApproved = true`.
  - Sort by `createdAt` descending (newest first).
  - Format timestamp as relative ("2 days ago") or locale-specific date.
  - No nested replies in v1 (flat comment structure).

- **Admin Moderation:**
  - Private admin route: `/admin/comments` (protected, no login UI—use environment-based auth token or header check).
  - Display all comments (approved and pending).
  - Quick actions: Approve, Delete, Mark as Spam.
  - Filter by status (Pending, Approved, Spam).
  - Search by slug or author name.
  - No UI for user signup/login; access via direct URL + secret token in env var (e.g., `ADMIN_TOKEN`).

---

### 4.4 Content Management: MDX Files
**Directory:** `/content/reviews/` (or configurable)

#### File Structure
Each `.mdx` file contains YAML frontmatter and markdown content:

```yaml
---
title: "The Great Gatsby"
author: "F. Scott Fitzgerald"
date: "2026-02-15"
rating: 4
status: "Finished"
coverImage: "/covers/gatsby.jpg"
summary: "A masterpiece of American literature exploring wealth, love, and the American Dream."
---

## First Impressions

[MDX content here...]
```

#### Frontmatter Fields
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | Yes | Display title of the book |
| `author` | string | Yes | Author name(s) |
| `date` | string (YYYY-MM-DD) | Yes | Review date |
| `rating` | number | Yes | 0-5 integer (displayed as stars) |
| `status` | string | Yes | One of: "Currently Reading", "Finished", "DNF" (Did Not Finish) |
| `coverImage` | string | Yes | Relative path to cover image in `/public/covers/` |
| `summary` | string | Yes | 1-2 sentence hook for homepage grid |
| `draft` | boolean | No | If `true`, exclude from homepage (default: false) |

#### Slug Generation
- Slug derived from filename (e.g., `the-great-gatsby.mdx` → `/reviews/the-great-gatsby`).
- Slugs must be unique.

---

## 5. Technical Architecture

### 5.1 Tech Stack
| Layer | Technology | Notes |
|-------|-----------|-------|
| **Frontend** | Next.js 14+ (App Router), TypeScript, React 18+ | For performance and SSR |
| **Styling** | Tailwind CSS 4+, @tailwindcss/typography | Prose class for article styling |
| **Content** | MDX (via `next-mdx-remote` or `velite`) | For rich content with React components |
| **Fonts** | Playfair Display (headings), Inter (UI) | Google Fonts |
| **Images** | `next/image` | Automatic optimization and lazy loading |
| **Database** | Supabase or Neon PostgreSQL | Comments only |
| **Deployment** | Vercel | Auto-deploy on git push (Free Tier) |
| **Version Control** | Git (GitHub/GitLab/Gitea) | For deployment and content versioning |

### 5.2 Data Schema

#### Comments Table
**Name:** `comments`

| Column | Type | Constraints | Notes |
|--------|------|-----------|-------|
| `id` | UUID | PK | Auto-generated |
| `slug` | string | FK (reviews.slug) | Book review slug |
| `name` | string | NOT NULL | Commenter name |
| `comment` | text | NOT NULL, max 500 | Comment content |
| `isApproved` | boolean | default: false | Moderation flag |
| `createdAt` | timestamp | default: now() | Comment creation time |
| `updatedAt` | timestamp | default: now() | Last update time |

#### Reviews (Static from MDX)
- No database; derived from `.mdx` files at build/runtime.
- Slug must be unique.

### 5.3 Folder Structure
```
.
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage (grid)
│   ├── reviews/
│   │   ├── layout.tsx
│   │   └── [slug]/
│   │       └── page.tsx              # Review detail page
│   └── api/
│       └── comments/
│           └── route.ts              # POST endpoint for new comments
├── components/
│   ├── Header.tsx                    # Navigation + dark mode toggle
│   ├── BookCard.tsx                  # Homepage card component
│   ├── CommentSection.tsx            # Comments + form
│   ├── CommentForm.tsx               # Comment submission form
│   └── Navbar.tsx                    # Sticky nav on review pages
├── content/
│   └── reviews/
│       ├── the-great-gatsby.mdx
│       ├── to-kill-a-mockingbird.mdx
│       └── ...
├── lib/
│   ├── mdx.ts                        # MDX parsing logic
│   ├── comments.ts                   # Database utility functions
│   └── types.ts                      # TypeScript interfaces
├── public/
│   └── covers/                       # Book cover images
│       ├── gatsby.jpg
│       └── ...
├── styles/
│   └── globals.css                   # Tailwind directives + custom utilities
├── middleware.ts                     # Optional: admin route protection
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 6. User Flows

### 6.1 Reading a Review
1. Visitor lands on homepage and sees grid of book cards.
2. Visitor clicks on a book card to navigate to `/reviews/[slug]`.
3. Review page loads with full MDX content, metadata, and cover image.
4. Visitor scrolls to bottom and sees existing approved comments.
5. Visitor optionally fills in Name and Comment fields, then clicks Submit.
6. Comment is stored in database with `isApproved = false`.
7. Success message appears; form is cleared.

### 6.2 Moderating Comments
1. Author navigates to `/admin/comments` (bookmarked or direct URL).
2. Page loads list of all comments (pending, approved, spam).
3. Author reviews pending comments.
4. Author clicks "Approve" to set `isApproved = true` or "Delete" to remove.
5. Changes reflected immediately; approved comments appear on review pages.

---

## 7. Non-Functional Requirements

### 7.1 Performance
- **Lighthouse Scores:** All pages should achieve 90+ in Performance, Accessibility, Best Practices, and SEO.
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Image Optimization:** All images via `next/image` with appropriate sizes and formats.
- **Build Time:** < 30 seconds on Vercel.

### 7.2 Accessibility
- WCAG 2.1 AA compliant.
- Semantic HTML (proper heading hierarchy, `<article>`, `<nav>`, etc.).
- Color contrast ratios ≥ 4.5:1 for normal text.
- Form labels properly associated with inputs.
- Keyboard navigation fully functional.
- Dark mode support (respects `prefers-color-scheme`).

### 7.3 Security
- **Database:** Use environment variables for connection strings; never commit credentials.
- **Admin Route:** Protect with simple token-based auth (env var `ADMIN_TOKEN` in header).
- **Comment Moderation:** No public API for moderation; require authentication.
- **XSS Prevention:** Sanitize comment content; escape HTML in display.
- **CORS:** Not needed for same-origin requests; configure if adding external APIs.

### 7.4 SEO
- Meta tags on all pages (title, description, Open Graph).
- Sitemap auto-generated.
- robots.txt configured.
- Structured data (JSON-LD) for books and articles (optional, v2).

### 7.5 Scalability
- MDX files can grow to 50+ reviews without performance issues (build time may increase).
- Database: PostgreSQL can handle thousands of comments; index on `slug` and `isApproved`.
- CDN: Vercel handles static assets globally.

---

## 8. Design System

### 8.1 Color Palette
**Light Mode:**
- Background: `#FAFAF8` (off-white)
- Text: `#1A1A1A` (near-black)
- Accent: `#A67C52` (warm brown, for links/highlights)
- Border: `#E5E5E1` (light gray)

**Dark Mode:**
- Background: `#0F0F0E` (near-black)
- Text: `#F5F5F0` (off-white)
- Accent: `#D4A574` (lighter warm brown)
- Border: `#2A2A2A` (dark gray)

### 8.2 Typography
- **Headings:** Playfair Display (serif), weights 600-700
  - H1: 48px, letter-spacing -1px
  - H2: 36px, letter-spacing -0.5px
  - H3: 28px
- **Body:** Inter (sans-serif), weights 400-500
  - Base: 16px, line-height 1.75
  - Small (captions): 14px
- **Code:** "Fira Code" or "JetBrains Mono", 14px

### 8.3 Spacing
- Base unit: 4px
- Common: 8px, 16px, 24px, 32px, 48px
- Container max-width: 1200px
- Content max-width: 65ch

### 8.4 Component Patterns
- **Buttons:** Filled or outlined, Tailwind utility classes, hover/focus states.
- **Cards:** Subtle shadow (4px blur), border-radius 4px, transition on hover.
- **Links:** Underlined on hover, accent color.
- **Forms:** Input with bottom border, focus ring, error states (red text below field).

---

## 9. Success Metrics

### Quantitative
- Lighthouse Performance score: ≥90
- Time to Interactive: <3 seconds
- Comment submission success rate: >99%
- Zero unhandled errors (monitored via Sentry or similar)

### Qualitative
- Readers describe the site as "clean" and "elegant"
- No complaints about readability or navigation
- Comments are submitted without confusion

---

## 10. Future Enhancements (v2+)

### v1.1
- Search/filter books by title, author, rating, status.
- Reading stats dashboard (e.g., books read this year, average rating).

### v1.2
- Sorting options for grid (by date, rating, status).
- Category/tags system for grouping reviews.
- Export comments as JSON.

### v2.0
- Social media sharing buttons on review pages.
- Reading list/wishlist feature.
- Author bio page with photo and social links.
- RSS feed for new reviews.
- Email notifications for new comments (to author).
- Nested comment replies.
- Comment reactions (likes, emoji reactions).

---

## 11. Launch Checklist

### Pre-Launch
- [ ] All MDX files created with correct frontmatter
- [ ] Cover images optimized and placed in `/public/covers/`
- [ ] Database schema created in Supabase/Neon
- [ ] Environment variables configured locally and on Vercel
- [ ] Admin page tested and verified
- [ ] Lighthouse scores audited; ≥90 on all metrics
- [ ] Mobile responsiveness tested on iPhone, Android, tablet
- [ ] Dark mode toggle tested
- [ ] Form validation and error handling verified
- [ ] Accessibility audit completed (axe DevTools, WAVE, or similar)
- [ ] SEO meta tags verified (Open Graph, Twitter Card)
- [ ] Sitemap and robots.txt generated

### Launch Day
- [ ] Deploy to Vercel main branch
- [ ] Test live site in production (including comments)
- [ ] Share with friends/beta testers
- [ ] Monitor for errors (Vercel dashboard, error logs)

### Post-Launch
- [ ] Gather feedback from early readers
- [ ] Plan v1.1 features based on usage
- [ ] Monitor and moderate comments regularly

---

## 12. Appendix

### A. Example MDX File
```yaml
---
title: "The Brothers Karamazov"
author: "Fyodor Dostoevsky"
date: "2026-01-20"
rating: 5
status: "Finished"
coverImage: "/covers/brothers-karamazov.jpg"
summary: "A profound exploration of faith, morality, and the human condition."
---

## A Journey Into Darkness and Light

This masterpiece of Russian literature... [content continues in Markdown]

## Themes

- Faith vs. doubt
- The nature of evil
- Redemption and forgiveness

---
```

### B. Environment Variables Template
```
# Database
DATABASE_URL=postgresql://user:password@host:port/dbname

# Admin
ADMIN_TOKEN=your-secret-admin-token-here

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### C. Useful Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Typography Plugin](https://tailwindcss.com/docs/typography-plugin)
- [Supabase PostgreSQL](https://supabase.com/)
- [Neon PostgreSQL](https://neon.tech/)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- [Velite](https://velite.js.org/)

---

**End of Document**
