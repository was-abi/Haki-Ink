import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import Sidebar from "@/components/Sidebar";
import StarRating from "@/components/StarRating";
import StatusBadge from "@/components/StatusBadge";
import type { Review } from "@/lib/types";

// Placeholder data — Phase 3 replaces with real MDX
const REVIEWS: Review[] = [
  {
    slug: "the-great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    date: "2026-02-15",
    rating: 4,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/182E4B/FFFFFF?text=Gatsby",
    summary: "A masterpiece of American literature exploring wealth, love, and the American Dream through the eyes of Nick Carraway.",
    content: "",
  },
  {
    slug: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    date: "2026-01-20",
    rating: 5,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/7FB082/FFFFFF?text=Mockingbird",
    summary: "A timeless story of racial injustice and moral growth in the American South, told through the innocent eyes of Scout Finch.",
    content: "",
  },
  {
    slug: "the-brothers-karamazov",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    date: "2026-01-05",
    rating: 5,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/333333/FFFFFF?text=Karamazov",
    summary: "A profound exploration of faith, doubt, morality, and the human condition set against the backdrop of a Russian family drama.",
    content: "",
  },
  {
    slug: "dune",
    title: "Dune",
    author: "Frank Herbert",
    date: "2026-02-01",
    rating: 5,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/A0785A/FFFFFF?text=Dune",
    summary: "An epic science fiction saga of politics, religion, ecology, and destiny on the desert planet Arrakis.",
    content: "",
  },
  {
    slug: "normal-people",
    title: "Normal People",
    author: "Sally Rooney",
    date: "2026-02-20",
    rating: 3,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/7FB082/182E4B?text=Normal+People",
    summary: "An intimate portrait of connection and miscommunication between two young people from a small Irish town.",
    content: "",
  },
  {
    slug: "piranesi",
    title: "Piranesi",
    author: "Susanna Clarke",
    date: "2026-02-24",
    rating: 4,
    status: "Currently Reading",
    coverImage: "https://placehold.co/400x600/4A6FA5/FFFFFF?text=Piranesi",
    summary: "A haunting mystery set in a house with infinite halls, where statues line the walls and tides flow through the lower floors.",
    content: "",
  },
];

const featured = REVIEWS[0];
const rest = REVIEWS.slice(1);

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ── Featured Hero ───────────────────────────────────────────── */}
        <section className="bg-[var(--color-bg-soft)] border-b border-[var(--color-border)]">
          <div className="site-container py-10">
            <Link
              href={`/reviews/${featured.slug}`}
              className="group flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
            >
              {/* Cover */}
              <div className="relative mx-auto aspect-[2/3] w-48 flex-shrink-0 overflow-hidden rounded-[4px] shadow-card-hover md:mx-0 md:w-56">
                <Image
                  src={featured.coverImage}
                  alt={`Cover of ${featured.title}`}
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <span className="category-label bg-[var(--color-primary)]">Featured Review</span>
                  <StatusBadge status={featured.status} />
                </div>
                <h1 className="font-heading text-3xl font-bold leading-tight text-[var(--color-primary)] text-balance transition-colors group-hover:text-[var(--color-secondary)]">
                  {featured.title}
                </h1>
                <p className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  by {featured.author}
                </p>
                <StarRating rating={featured.rating} />
                <p className="font-body text-sm leading-relaxed text-[var(--color-text)] max-w-[55ch]">
                  {featured.summary}
                </p>
                <span className="read-more self-center md:self-start">Read Full Review →</span>
              </div>
            </Link>
          </div>
        </section>

        {/* ── Main content + sidebar ───────────────────────────────────── */}
        <div className="site-container py-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">

            {/* 2/3 — Post grid */}
            <section className="min-w-0 flex-[2]">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  Latest Reviews
                </h2>
                <div className="h-px flex-1 mx-4 bg-[var(--color-border)]" />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {rest.map((review) => (
                  <BookCard key={review.slug} review={review} />
                ))}
              </div>
            </section>

            {/* 1/3 — Sidebar */}
            <aside className="w-full lg:w-72 lg:flex-shrink-0">
              <Sidebar />
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
