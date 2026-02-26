import CommentForm from "@/components/CommentForm";
import type { Comment } from "@/lib/types";

const PLACEHOLDER_COMMENTS: Comment[] = [
  {
    id: "1",
    slug: "the-great-gatsby",
    name: "Alice M.",
    comment: "This review perfectly captures what makes Gatsby so haunting. The green light metaphor is something I think about constantly.",
    isApproved: true,
    createdAt: "2026-02-20T10:00:00Z",
    updatedAt: "2026-02-20T10:00:00Z",
  },
  {
    id: "2",
    slug: "the-great-gatsby",
    name: "James K.",
    comment: "I disagree about Nick being a reliable narrator — I think that ambiguity is the whole point. Great write-up though.",
    isApproved: true,
    createdAt: "2026-02-22T14:30:00Z",
    updatedAt: "2026-02-22T14:30:00Z",
  },
];

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}

export default function CommentSection({ slug }: { slug: string }) {
  const comments = PLACEHOLDER_COMMENTS.filter((c) => c.slug === slug && c.isApproved);

  return (
    <section aria-labelledby="comments-heading" className="mt-10 border-t border-[var(--color-border)] pt-8">
      <h2 id="comments-heading" className="font-heading text-xl font-bold text-[var(--color-primary)] mb-6">
        {comments.length > 0 ? `${comments.length} Comment${comments.length !== 1 ? "s" : ""}` : "Comments"}
      </h2>

      {comments.length === 0 ? (
        <p className="font-body text-sm text-[var(--color-muted)]">No comments yet — be the first to share your thoughts!</p>
      ) : (
        <ol className="flex flex-col gap-4 mb-8">
          {[...comments].reverse().map((c) => (
            <li key={c.id} className="rounded-[4px] border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-5 py-4">
              <div className="mb-2 flex items-center justify-between gap-4">
                <span className="font-heading text-sm font-bold text-[var(--color-primary)]">{c.name}</span>
                <time dateTime={c.createdAt} className="font-body text-xs text-[var(--color-muted)]">{timeAgo(c.createdAt)}</time>
              </div>
              <p className="font-body text-sm leading-relaxed text-[var(--color-text)]">{c.comment}</p>
            </li>
          ))}
        </ol>
      )}

      <CommentForm slug={slug} />
    </section>
  );
}
