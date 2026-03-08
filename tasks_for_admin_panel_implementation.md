# Admin Panel Implementation Tasks

## Overview
Build an admin dashboard to manage posts (add, edit, delete, toggle draft) at `/admin`.
Protected by password login. Data stored in a JSON file on the server.

---

## Phase 1 — Centralize Data

**Problem:** REVIEWS array is hardcoded and duplicated across multiple page files. Must move to a single source of truth before building admin.

### Steps:
1. Create `data/posts.json` — migrate all 7 posts from `app/blog/[slug]/page.tsx` (with full content) into JSON format
2. Create `lib/data.ts` — reads from `data/posts.json` and exports `REVIEWS: Review[]`
3. Update `app/page.tsx` — remove hardcoded REVIEWS array, import from `lib/data.ts`
4. Update `app/blog/[slug]/page.tsx` — remove hardcoded REVIEWS array, import from `lib/data.ts`
5. Update `app/reviews/[slug]/page.tsx` (legacy) — remove hardcoded REVIEWS array, import from `lib/data.ts`

### Data Schema for `data/posts.json`:
```json
[
  {
    "slug": "before-the-coffee-gets-cold",
    "title": "Before the Coffee Gets Cold",
    "author": "Toshikazu Kawaguchi",
    "date": "2025-01-06",
    "rating": 4.5,
    "status": "Finished",
    "coverImage": "/covers/before-coffee.jpg",
    "summary": "A quiet, melancholic story...",
    "tags": ["Fiction", "Japanese Literature"],
    "type": "review",
    "draft": false,
    "content": "Full markdown content here..."
  }
]
```

---

## Phase 2 — API Routes

Create REST API for reading and writing `data/posts.json`.

### Files to create:

**`app/api/posts/route.ts`**
- `GET /api/posts` — return all posts (optionally filter by `?draft=true`)
- `POST /api/posts` — create new post, write to `data/posts.json`

**`app/api/posts/[slug]/route.ts`**
- `GET /api/posts/[slug]` — return single post
- `PUT /api/posts/[slug]` — update post, write to `data/posts.json`
- `DELETE /api/posts/[slug]` — remove post from `data/posts.json`

---

## Phase 3 — Admin Auth

Protect `/admin/*` with a password stored in `.env.local`.

### Steps:
1. Add `ADMIN_PASSWORD=your_password_here` to `.env.local` (and Vercel env vars)
2. Create `app/admin/login/page.tsx` — simple password form, sets a cookie on success
3. Create `middleware.ts` — intercepts all `/admin/*` requests, redirects to `/admin/login` if no valid session cookie

---

## Phase 4 — Admin Dashboard UI

### Files to create:

**`app/admin/page.tsx`** — Admin home
- Links to Posts section and Comments section
- Shows quick stats: total posts, total reviews, total blog posts, drafts

**`app/admin/posts/page.tsx`** — Posts list
- Table with columns: Title, Type, Date, Status, Rating, Draft toggle
- Edit button → `/admin/posts/[slug]/edit`
- Delete button → confirmation dialog → calls DELETE /api/posts/[slug]
- "New Post" button → `/admin/posts/new`

**`app/admin/posts/new/page.tsx`** — New post form
- Fields: title, slug (auto-generated from title), author, date, type (review/blog), rating, status, coverImage URL, summary, tags, content (textarea), draft toggle
- On submit → POST /api/posts → redirect to posts list

**`app/admin/posts/[slug]/edit/page.tsx`** — Edit post form
- Same form as new, pre-filled with existing data
- On submit → PUT /api/posts/[slug] → redirect to posts list

### Design notes:
- Use brand colors: `#0A3200` primary, `#379634` secondary, `#74F2CE` mint
- Fonts: Playfair Display headings, Inter body
- Reuse styling patterns from existing `app/admin/comments/page.tsx`

---

## Phase 5 — Add `.gitignore` Entry for `data/posts.json` (Optional)

If you don't want post edits tracked in git, add `data/posts.json` to `.gitignore`.
Otherwise keep it tracked so posts are version-controlled.

---

## File Summary

| File | Action |
|------|--------|
| `data/posts.json` | CREATE |
| `lib/data.ts` | CREATE |
| `app/page.tsx` | MODIFY |
| `app/blog/[slug]/page.tsx` | MODIFY |
| `app/reviews/[slug]/page.tsx` | MODIFY |
| `app/api/posts/route.ts` | CREATE |
| `app/api/posts/[slug]/route.ts` | CREATE |
| `app/admin/login/page.tsx` | CREATE |
| `middleware.ts` | CREATE |
| `app/admin/page.tsx` | CREATE |
| `app/admin/posts/page.tsx` | CREATE |
| `app/admin/posts/new/page.tsx` | CREATE |
| `app/admin/posts/[slug]/edit/page.tsx` | CREATE |
| `.env.local` | MODIFY — add ADMIN_PASSWORD |
| `lib/types.ts` | REUSE — Review, ReviewStatus, PostType already defined |

---

## Testing Checklist

- [ ] `npm run dev` runs without errors after data centralization
- [ ] Homepage loads all posts correctly
- [ ] Detail pages (`/blog/[slug]`) load correctly for all 7 posts
- [ ] `/admin` redirects to `/admin/login` when not authenticated
- [ ] Login with correct password → redirected to `/admin`
- [ ] Login with wrong password → error shown
- [ ] Posts list shows all 7 posts
- [ ] Edit a post → changes appear on homepage and detail page
- [ ] Add a new post → appears in grid with working detail page
- [ ] Delete a post → removed from homepage
- [ ] Toggle draft → post hidden from public, still visible in admin list
