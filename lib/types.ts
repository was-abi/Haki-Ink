// ─── Review (sourced from MDX frontmatter) ───────────────────────────────────

export type ReviewStatus = "Currently Reading" | "Finished" | "DNF";

export interface ReviewFrontmatter {
  title: string;
  author: string;
  date: string;          // YYYY-MM-DD
  rating: number;        // 0–5 integer
  status: ReviewStatus;
  coverImage: string;    // e.g. "/covers/gatsby.jpg"
  summary: string;       // 1–2 sentence hook for the grid
  tags?: string[];       // genre/category tags e.g. ["Fiction", "Classic Lit"]
  draft?: boolean;       // if true, exclude from public pages
}

export interface Review extends ReviewFrontmatter {
  slug: string;          // derived from filename
  content: string;       // raw MDX string (rendered in Phase 4)
}

// ─── Comment (stored in PostgreSQL) ──────────────────────────────────────────

export interface Comment {
  id: string;            // UUID
  slug: string;          // which review this belongs to
  name: string;          // commenter display name
  comment: string;       // comment body (max 500 chars)
  isApproved: boolean;   // only approved comments show publicly
  createdAt: string;     // ISO timestamp
  updatedAt: string;     // ISO timestamp
}

// Subset used when creating a new comment
export type NewComment = Pick<Comment, "slug" | "name" | "comment">;
