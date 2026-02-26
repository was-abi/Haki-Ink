import Link from "next/link";
import Image from "next/image";
import type { Review } from "@/lib/types";
import StarRating from "@/components/StarRating";
import StatusBadge from "@/components/StatusBadge";

export default function BookCard({ review }: { review: Review }) {
  const { slug, title, author, rating, status, coverImage, summary, date } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col">
      {/* Cover image */}
      <Link href={`/reviews/${slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--color-bg-soft)]">
          <Image
            src={coverImage}
            alt={`Cover of ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      {/* Card body */}
      <div className="flex flex-col gap-2 pt-3">
        {/* Status badge */}
        <div>
          <StatusBadge status={status} />
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
