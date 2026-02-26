import Link from "next/link";
import Image from "next/image";
import type { Review } from "@/lib/types";

export default function Sidebar({ reviews = [] }: { reviews?: Review[] }) {
  const sorted = [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const recentPosts = sorted.slice(0, 5);
  const recentCovers = sorted.slice(0, 4);

  // Derive category counts dynamically from review tags
  const categoryMap = new Map<string, number>();
  for (const review of reviews) {
    for (const tag of review.tags ?? []) {
      categoryMap.set(tag, (categoryMap.get(tag) ?? 0) + 1);
    }
  }
  const categories = Array.from(categoryMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([label, count]) => ({ label, count }));

  return (
    <aside className="flex flex-col gap-8">

      {/* About widget */}
      <div className="rounded-[4px] bg-[var(--color-blush)] p-5 border-t-2 border-[var(--color-secondary)]">
        <p className="sidebar-heading">About This Blog</p>
        <p className="font-body text-sm leading-relaxed text-[var(--color-text)]">
          Haki &amp; Ink is a personal reading journal — honest reviews, careful reads, and a growing shelf of stories worth talking about.
        </p>
      </div>

      {/* Recent covers grid */}
      <div>
        <p className="sidebar-heading">Recently Reviewed</p>
        <div className="grid grid-cols-4 gap-2">
          {recentCovers.map((c) => (
            <Link key={c.slug} href={`/reviews/${c.slug}`} className="block overflow-hidden rounded-[3px]">
              <div className="relative aspect-[3/4]">
                <Image src={c.coverImage} alt={`Cover of ${c.title}`} fill className="object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent posts list */}
      <div>
        <p className="sidebar-heading">Latest Reviews</p>
        <ul className="flex flex-col divide-y divide-[var(--color-border)]">
          {recentPosts.map((post) => (
            <li key={post.slug} className="py-2.5">
              <Link
                href={`/reviews/${post.slug}`}
                className="block font-heading text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
              >
                {post.title}
              </Link>
              <span className="font-body text-xs text-[var(--color-muted)]">
                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories — dynamically derived from tags */}
      <div>
        <p className="sidebar-heading">Categories</p>
        <ul className="flex flex-col gap-1">
          {categories.map((cat) => (
            <li key={cat.label} className="flex items-center justify-between group">
              <Link
                href={`/?category=${cat.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-sm text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
              >
                {cat.label}
              </Link>
              <span className="font-body text-xs text-white bg-[var(--color-secondary)] rounded-full px-2 py-0.5 leading-none tabular-nums">
                {cat.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter CTA */}
      <div
        className="rounded-[4px] p-5 text-center"
        style={{
          background: "linear-gradient(135deg, var(--color-blush) 0%, #f9ede8 60%, #faf8f6 100%)",
          border: "1px solid rgba(202,108,104,0.2)",
          boxShadow: "0 2px 12px rgba(202,108,104,0.08)"
        }}
      >
        <p className="sidebar-heading text-center">Stay Updated</p>
        <p className="mb-3 font-body text-sm text-[var(--color-text)]">
          Get new reviews in your inbox.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="mb-2 w-full rounded-[3px] border border-[var(--color-border)] bg-white px-3 py-2 font-body text-sm focus:border-[var(--color-secondary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]/30"
        />
        <button className="w-full rounded-[3px] bg-[var(--color-secondary)] px-4 py-2 font-heading text-[0.65rem] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-primary)] active:scale-[0.98]">
          Subscribe
        </button>
      </div>

    </aside>
  );
}
