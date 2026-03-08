# Content Creation Instructions

This document provides guidelines for adding new book reviews and blog posts to the Book Review Blog. Follow these carefully to maintain consistency with the existing design system and architecture.

---

## Table of Contents
1. [General Requirements](#general-requirements)
2. [Book Review Instructions](#book-review-instructions)
3. [Blog Post Instructions](#blog-post-instructions)
4. [Design System Reference](#design-system-reference)

---

## General Requirements

### Color Palette
- **Primary**: `#0A3200` (Forest Green) — Main text and headings
- **Secondary**: `#379634` (Medium Green) — Accents and highlights
- **Mint**: `#74F2CE` (Bright Mint) — Blog post labels and highlights
- **Text**: `#0A3200` (Dark Green) — Body text
- **Background Soft**: `#f4fff9` (Off-White) — Section backgrounds

### Typography
- **Headings**: Playfair Display (serif) — Bold, 700 weight
- **Body**: Inter (sans-serif) — Regular, 400 weight
- **Prose**: Line height 1.8, Font size 1.0625rem (premium editorial)

### Featured Post Selection
- The post with the **most recent date** automatically appears at the top of the homepage
- Featured posts are determined by the `date` field in the REVIEWS array (not manually set)
- Update the `date` field to make a post featured

---

## Book Review Instructions

### Data Structure
Add a new object to the `REVIEWS` array in `app/page.tsx`:

```typescript
{
  slug: "unique-url-slug",           // kebab-case, unique identifier
  title: "Book Title",               // Full book title
  author: "Author Name",             // Required for book reviews
  date: "YYYY-MM-DD",                // Publication/review date (YYYY-MM-DD format)
  rating: 4.5,                       // 0-5 stars (0.5 increments OK)
  status: "Finished",                // "Finished" | "Currently Reading" | "DNF"
  coverImage: "/covers/filename.jpg", // Path to book cover image
  summary: "Brief 2-3 sentence summary of the book...", // Max 150 characters
  tags: ["Fiction", "Classic Lit"],  // 2-3 relevant genre/topic tags
  type: "review",                    // MUST be "review" for book reviews
  content: "",                       // Leave empty, content is in app/blog/[slug]/page.tsx
}
```

### Image Requirements
- **Aspect Ratio**: 3:4 (portrait, like a book cover)
- **Dimensions**: Recommend 600px × 800px minimum
- **Format**: JPG or PNG
- **Location**: Place in `public/covers/` directory
- **On Homepage**: Single column in grid
- **On Detail Page**: Displayed in sidebar (compact, 144-176px width)

### Status Badge Styling
- **Finished**: Dark Green background
- **Currently Reading**: Medium Green background
- **DNF**: Muted Gray background
- Status badge appears on card and featured section automatically

### Featured Section Display (Reviews Only)
When a review is featured:
- Shows as "Latest Review" (not "Latest Post")
- Cover image: Portrait aspect (3:4), 48-56px width with frame effect
- Includes author byline with decorative accent line
- Shows star rating
- Includes status badge
- Layout: Horizontal (side-by-side) on desktop

### Creating Content Detail Page
1. Create file: `app/blog/[slug]/page.tsx`
2. Copy existing review detail structure
3. For layout use the **sidebar pattern** (not full-width)
4. Import and render content component with premium prose styling
5. The detail page automatically shows star rating and author

### Detail Page Structure for Reviews
```tsx
// Hero section: Sidebar layout
<div className="flex flex-col gap-8 md:flex-row md:gap-8">
  {/* Compact cover (144-176px) */}
  {/* Meta info and content on right */}
</div>

// Content uses premium prose styling:
// - Drop caps on first paragraph
// - Gradient underlines on h2 headers
// - Enhanced blockquotes with gradient background
// - Decorative quotation marks
// - Line height 1.8, font size 1.0625rem
```

### Tags Best Practices
- Use existing tags when possible
- Common tags: Fiction, Mystery, Classic Lit, Contemporary, Japanese Lit, Sci-Fi, Philosophy, Russian Lit
- Limit to 2-3 tags per review

---

## Blog Post Instructions

### Data Structure
Add a new object to the `REVIEWS` array in `app/page.tsx`:

```typescript
{
  slug: "unique-url-slug",                      // kebab-case, unique identifier
  title: "Blog Post Title",                     // Main topic/headline
  author: "",                                   // MUST be empty string for blog posts
  date: "YYYY-MM-DD",                           // Publication date (YYYY-MM-DD format) — Use TODAY's date to feature immediately
  rating: 0,                                    // MUST be 0 for blog posts
  status: "Finished",                           // Any value (not displayed)
  coverImage: "/covers/filename.png",           // Path to cover image
  summary: "Brief 2-3 sentence summary of the blog post...", // Max 150 characters
  tags: ["Topic1", "Topic2", "Topic3"],         // 2-3 relevant topic tags
  type: "blog",                                 // MUST be "blog" for blog posts
  content: "Placeholder - see blog detail page for full content", // Required placeholder
}
```

### Image Requirements
- **Aspect Ratio**: 16:9 (landscape/video format)
- **Dimensions**: Recommend 1792px × 1024px minimum
- **Format**: PNG or JPG
- **Location**: Place in `public/covers/` directory
- **On Homepage**: Spans 2 columns (full width effect)
- **On Detail Page**: Full-width cover at top with no padding/rounding

### No Status Badge or Author
- Blog posts do **NOT** display:
  - Status badge (e.g., "Finished", "Currently Reading")
  - Author byline
  - Star ratings
- Only shows "Latest Post" label (not "Latest Review")
- Appears as mint green "Blog Post" label on cards

### Featured Section Display (Blog Posts Only)
When a blog post is featured:
- Shows as "Latest Post" (not "Latest Review")
- Cover image: Landscape aspect (16:9), full-width centered with `md:max-w-2xl` constraint
- NO author byline
- NO star rating
- NO status badge
- Layout: Vertical stack (full-width on desktop)
- Title larger and centered
- Decorative divider under title

### Creating Content Detail Page
1. Create file: `app/blog/[slug]/page.tsx`
2. Use **full-width layout** (not sidebar)
3. Hero section: Full-width cover image (no padding, rounded corners)
4. Content section: Full width with premium prose styling
5. Example: `components/TransformationBlogContent.tsx` (with ExpandableSection components)

### Detail Page Structure for Blog Posts
```tsx
// Hero section: Full-width cover
<div className="w-full">
  <Image className="w-full aspect-video rounded-lg" />
</div>

// Content uses premium prose styling + custom components:
// Can include ExpandableSection components for organized content
// Drop caps, gradient underlines, decorative elements
// Line height 1.8, font size 1.0625rem
```

### Custom Content Components
For complex blog posts, create custom components:
- **ExpandableSection.tsx**: Accordion-style sections with "Click to expand" hints
- **PrincipleCard.tsx**: Numbered cards with gradient backgrounds
- **SectionHeader.tsx**: Clickable headers with rotating chevron icons

Example from "path-to-personal-transformation":
- Uses `TransformationBlogContent.tsx` component
- Includes 3 ExpandableSection components (Transformation, Love, Spiritual)
- Each section has 11 numbered principle cards
- Color-coded sections with gradient backgrounds

### Using ExpandableSection Component

```tsx
import ExpandableSection from "@/components/ExpandableSection";

<ExpandableSection
  title="Section Title"
  description="Optional subtitle"
  isFirst={true}  // Shows "Click to expand" hint only on first section
>
  {/* Content goes here */}
  <div>Your expandable content</div>
</ExpandableSection>
```

### Tags Best Practices
- Use descriptive topic tags
- Common tags: Self-Help, Spirituality, Philosophy, Personal Growth, Wellness, Technology
- Limit to 2-3 tags per post

---

## Design System Reference

### Featured Section Styling
Both blog posts and reviews use enhanced featured sections with:

**Visual Elements:**
- Gradient top border: Primary → Secondary → Mint
- Background gradient: Soft white with mint pale undertone
- Frame effect on review covers (reviews only)
- Decorative divider line under title

**Typography:**
- Heading: 3xl on mobile, 4xl-5xl on desktop
- Tight tracking (`tracking-tight`)
- Color: Primary green (#0A3200)
- Hover: Changes to secondary green with drop-shadow

**Interactive Elements:**
- Cover hover: Scale +5%, brightness +10%
- Gradient overlay appears on hover
- CTA button with gradient background, hover effects, micro-animations
- Labels with dynamic coloring based on type

### Card Styling (Grid)
**Blog Posts:**
- Span 2 columns on tablet+ (full width effect)
- Aspect ratio: 16:9 (landscape)
- Title: 1.25rem (xl)
- Single column on mobile, 2 columns on tablet, 1 column per blog post
- Shows "Blog Post" mint label instead of status

**Book Reviews:**
- Single column
- Aspect ratio: 3:4 (portrait)
- Title: 1.25rem (xl)
- Shows StatusBadge (Finished/Currently Reading/DNF)
- Shows author byline and star rating

### Prose Styling (Detail Pages)
Applied to article content in `app/blog/[slug]/page.tsx`:

- Font size: 1.0625rem (17px)
- Line height: 1.8
- Drop cap styling on first letter
- Gradient underlines on h2 elements
- Enhanced blockquotes with background gradient and decorative quote mark
- Improved link styling with underlines
- Code block styling with soft background
- Horizontal rule dividers with gradient effect

### Premium Editorial Features
Employed throughout for high-quality appearance:

**Typography:**
- Generous line height (1.8) for readability
- Larger font size (1.0625rem) for visual impact
- Decorative elements (drop caps, dividers)
- Tight tracking on large headings

**Shadows:**
- Layered shadows: `0 20px 50px rgba(10,50,0,0.15), 0 10px 30px rgba(55,150,52,0.08), inset 0 1px 0 rgba(255,255,255,0.3)`
- Shadow tints match brand colors (green family)
- Subtle inset highlight for depth

**Colors:**
- Never use default Tailwind colors
- All colors are CSS variables derived from brand palette
- Opacity variations for hierarchy: Primary, Secondary, Mint with `10%`, `20%`, `40%` tints

---

## Quick Checklist

### Before Publishing a Book Review
- [ ] Slug is unique and kebab-case
- [ ] Author name is provided
- [ ] Rating is 0-5 with 0.5 increments
- [ ] Status is one of: "Finished", "Currently Reading", "DNF"
- [ ] Cover image is 3:4 aspect ratio, 600×800px minimum
- [ ] Summary is 2-3 sentences, max 150 characters
- [ ] 2-3 tags are assigned
- [ ] `type: "review"` is set
- [ ] `author` field is NOT empty
- [ ] Detail page created in `app/blog/[slug]/page.tsx`
- [ ] Premium prose styling applied to detail page content

### Before Publishing a Blog Post
- [ ] Slug is unique and kebab-case
- [ ] `author` field is EMPTY STRING (`""`)
- [ ] Rating is 0 (zero)
- [ ] Cover image is 16:9 aspect ratio, 1792×1024px minimum
- [ ] Summary is 2-3 sentences, max 150 characters
- [ ] 2-3 tags are assigned
- [ ] `type: "blog"` is set
- [ ] Date is TODAY's date to feature immediately (or desired publish date)
- [ ] Detail page created in `app/blog/[slug]/page.tsx` with full-width layout
- [ ] Custom components created if needed (ExpandableSection, etc.)
- [ ] Premium prose styling applied to content

### Featured Post
- [ ] Most recent date automatically becomes featured
- [ ] Featured section displays correctly with responsive image dimensions
- [ ] No manual featured selection needed — date field controls it

---

## Examples

### Example: Book Review Entry
```typescript
{
  slug: "the-midnight-library",
  title: "The Midnight Library",
  author: "Matt Haig",
  date: "2026-03-05",
  rating: 4.5,
  status: "Finished",
  coverImage: "/covers/midnight_library.jpg",
  summary: "A woman at the edge of her life explores alternate versions of herself in a magical library.",
  tags: ["Fiction", "Contemporary", "Philosophy"],
  type: "review",
  content: "",
}
```

### Example: Blog Post Entry
```typescript
{
  slug: "mindfulness-in-daily-life",
  title: "Mindfulness in Daily Life: A Practical Guide",
  author: "",
  date: "2026-03-08",
  rating: 0,
  status: "Finished",
  coverImage: "/covers/mindfulness.png",
  summary: "Discover simple techniques to bring mindfulness into your everyday routines and transform your mental health.",
  tags: ["Wellness", "Personal Growth", "Spirituality"],
  type: "blog",
  content: "Placeholder - see blog detail page for full content",
}
```

---

## Support & Updates

This guide reflects the current state of the project as of March 8, 2026. Update this file when:
- New design patterns are introduced
- Component structure changes
- CSS variables or color palette updates
- Typography system updates
- New reusable components are created

---
