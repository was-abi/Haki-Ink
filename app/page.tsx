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
    slug: "before-the-coffee-gets-cold",
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    date: "2025-01-06",
    rating: 4.5,
    status: "Finished",
    coverImage: "/covers/before_the_coffee_gets_cold_2.jpg",
    summary: "In a small back alley in Tokyo, a mysterious cafe offers its customers the chance to travel back in time, provided they return before their coffee gets cold.",
    tags: ["Fiction", "Contemporary", "Japanese Lit"],
    content: "",
  },
  {
    slug: "never-let-me-go",
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    date: "2024-12-26",
    rating: 4,
    status: "Finished",
    coverImage: "/covers/never_let_me_go.jpg",
    summary: "In an isolated boarding school, a group of students slowly discovers the heartbreaking truth about their shared destiny and the dark, utilitarian purpose behind their seemingly idyllic lives.",
    tags: ["Fiction", "Sci-Fi", "Classic Lit"],
    content: "",
  },
  {
    slug: "death-on-gokumon-island",
    title: "Death On Gokumon Island",
    author: "Seishi Yokomizo",
    date: "2025-07-29",
    rating: 4,
    status: "Finished",
    coverImage: "/covers/death_on_gokumon_island.jpg",
    summary: "On the secluded Gokumon Island, scruffy detective Kosuke Kindaichi must decipher a dying man’s cryptic warning to protect three sisters from a series of gruesome, ritualistic murders rooted in a bitter family legacy.",
    tags: ["Fiction", "Mystery", "Japanese Lit"],
    content: "",
  },
  {
    slug: "picture-of-dorian-gray",
    title: "The Picture Of Dorian Gray",
    author: "Oscar Wilde",
    date: "2025-07-26",
    rating: 5,
    status: "Finished",
    coverImage: "/covers/picture-of-dorian-gray.png",
    summary: "In 19th-century England, a beautiful young man remains eternally youthful while his hidden portrait grotesquely withers and decays, bearing the physical scars of his descent into a life of sin and moral corruption.",
    tags: ["Fiction", "Classic Lit"],
    content: "",
  },
  {
    slug: "the-stranger",
    title: "The Stranger",
    author: "Albert Camus",
    date: "2024-04-14",
    rating: 3,
    status: "Finished",
    coverImage: "/covers/Stranger_Albert_Camus_1.png",
    summary: "In a sun-drenched Algiers, a detached and indifferent man is drawn into a senseless murder, ultimately facing his own execution while stubbornly embracing the cold, irrational absurdity of existence.",
    tags: ["Fiction", "Classic Lit", "Philosophy"],
    content: "",
  },
  {
    slug: "crime-and-punishment",
    title: "Crime And Punishment",
    author: "Fyodor Dostoevsky",
    date: "2023-09-12",
    rating: 4,
    status: "Currently Reading",
    coverImage: "/covers/crime_and_punishment.jpg",
    summary: "In the grim slums of St. Petersburg, a desperate former student commits a calculated murder to prove his superhuman superiority, only to find his sanity and soul slowly dismantled by the relentless weight of his own conscience.",
    tags: ["Fiction", "Classic Lit", "Russian Lit"],
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
            <div className="group flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              {/* Cover */}
              <Link href={`/reviews/${featured.slug}`} className="mx-auto flex-shrink-0 md:mx-0" tabIndex={-1} aria-hidden="true">
                <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-[4px] md:w-56" style={{boxShadow:"0 8px 32px rgba(47,76,76,0.18), 0 2px 8px rgba(202,108,104,0.12)"}}>
                  <Image
                    src={featured.coverImage}
                    alt={`Cover of ${featured.title}`}
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority
                  />
                </div>
              </Link>

              {/* Text */}
              <div className="flex flex-col gap-3 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <span className="category-label bg-[var(--color-primary)]">Featured Review</span>
                  <StatusBadge status={featured.status} />
                  {featured.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/?category=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="tag-pill"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <h1 className="font-heading text-3xl font-bold leading-tight text-[var(--color-primary)] text-balance">
                  <Link href={`/reviews/${featured.slug}`} className="transition-colors hover:text-[var(--color-secondary)]">
                    {featured.title}
                  </Link>
                </h1>
                <p className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  by {featured.author}
                </p>
                <StarRating rating={featured.rating} />
                <p className="font-body text-sm leading-relaxed text-[var(--color-text)] max-w-[55ch]">
                  {featured.summary}
                </p>
                <Link href={`/reviews/${featured.slug}`} className="read-more self-center md:self-start">Read Full Review →</Link>
              </div>
            </div>
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
              <Sidebar reviews={REVIEWS} />
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
