import Link from "next/link";
import Image from "next/image";
import type { Review } from "@/lib/types";
import StarRating from "@/components/StarRating";
import StatusBadge from "@/components/StatusBadge";

export default function BookCard({ review }: { review: Review }) {
  const { slug, title, author, rating, status, coverImage, summary, date, tags } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col">
      {/* Cover image */}
      <Link href={`/reviews/${slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div
          className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-bg-soft)]"
          style={{ boxShadow: "0 4px 16px rgba(47,76,76,0.10), 0 1px 4px rgba(47,76,76,0.06)" }}
        >
          <Image
            src={coverImage}
            alt={`Cover of ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      {/* Colored bottom border accent — appears on hover */}
      <div className="h-[2px] w-full bg-[var(--color-secondary)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

      {/* Card body */}
      <div className="flex flex-col gap-2 pt-3">
        {/* Status badge + tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          <StatusBadge status={status} />
          {tags?.map((tag) => (
            <Link
              key={tag}
              href={`/?category=${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="tag-pill"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-heading text-xl font-bold leading-tight text-[var(--color-primary)] text-balance">
          <Link
            href={`/reviews/${slug}`}
            className="transition-colors hover:text-[var(--color-secondary)]"
          >
            {title}
          </Link>
        </h2>

        {/* Author */}
        <p className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
          by {author}
        </p>

        {/* Stars + date */}
        <div className="flex items-center justify-between">
          <StarRating rating={rating} size="sm" />
          <span className="font-body text-xs text-[var(--color-muted)]">{formattedDate}</span>
        </div>

        {/* Summary */}
        <p className="font-body text-sm leading-relaxed text-[var(--color-text)] line-clamp-3">
          {summary}
        </p>

        {/* Read more */}
        <Link href={`/reviews/${slug}`} className="read-more mt-1 self-start">
          Read More →
        </Link>
      </div>
    </article>
  );
}
