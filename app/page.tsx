import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import Sidebar from "@/components/Sidebar";
import QuoteBanner from "@/components/QuoteBanner";
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
    type: "review",
    content: "",
  },
  {
    slug: "path-to-personal-transformation",
    title: "The Path to Personal Transformation and Spiritual Alignment",
    author: "",
    date: "2026-03-08",
    rating: 0,
    status: "Finished",
    coverImage: "/covers/transformation.png",
    summary: "33 principles across transformation, love, and spiritual alignment — a distilled guide to living with purpose, depth, and surrender.",
    tags: ["Self-Help", "Spirituality", "Philosophy"],
    type: "blog",
    content: "Placeholder - see blog detail page for full content",
  },
];

// Feature the most recently updated post
const featured = REVIEWS.reduce((latest, current) =>
  new Date(current.date) > new Date(latest.date) ? current : latest
);
const rest = REVIEWS.filter(review => review.slug !== featured.slug);

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <QuoteBanner />

        {/* ── Featured Hero ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-bg-soft)] via-white to-[var(--color-mint-pale)]/20 border-b border-[var(--color-border)]">
          {/* Decorative gradient border accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-mint)]" />

          <div className="site-container py-12 md:py-16">
            <div className={`group flex flex-col gap-8 ${featured.type === "blog" ? "md:flex-col md:items-center" : "md:flex-row md:items-center"} md:gap-12`}>
              {/* Cover with frame effect */}
              <Link href={`/blog/${featured.slug}`} className={`flex-shrink-0 relative ${featured.type === "blog" ? "w-full md:max-w-2xl" : ""}`} tabIndex={-1} aria-hidden="true">
                {/* Decorative frame background */}
                <div className={`absolute inset-0 -m-3 bg-[var(--color-primary)]/5 rounded-[8px] blur-sm ${featured.type === "blog" ? "hidden md:block" : ""}`} />
                <div className={`absolute inset-0 -m-4 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-mint)]/5 rounded-[12px] ${featured.type === "blog" ? "hidden md:block" : ""}`} />

                <div className={`relative overflow-hidden ${featured.type === "blog" ? "aspect-video rounded-lg" : "aspect-[2/3] w-48 md:w-56 rounded-lg"}`} style={{boxShadow:"0 20px 50px rgba(10,50,0,0.15), 0 10px 30px rgba(55,150,52,0.08), inset 0 1px 0 rgba(255,255,255,0.3)"}}>
                  <Image
                    src={featured.coverImage}
                    alt={`Cover of ${featured.title}`}
                    fill
                    sizes={featured.type === "blog" ? "(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw" : "(max-width: 768px) 192px, 224px"}
                    className="object-cover transition-all duration-500 group-hover:scale-[1.05] group-hover:brightness-110"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>

              {/* Text content with enhanced typography */}
              <div className={`flex flex-col gap-4 ${featured.type === "blog" ? "text-center" : "md:text-left"}`}>
                {/* Label section with enhanced styling */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${featured.type === "blog" ? "bg-[var(--color-mint)] text-[var(--color-primary)] shadow-md shadow-[var(--color-mint)]/20 group-hover:shadow-lg group-hover:shadow-[var(--color-mint)]/30" : "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-md shadow-[var(--color-primary)]/20 group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/30"}`}>
                    {featured.type === "blog" ? "Latest Post" : "Latest Review"}
                  </span>
                  {featured.type !== "blog" && <StatusBadge status={featured.status} />}
                  {featured.tags?.slice(0, 2).map((tag) => (
                    <Link
                      key={tag}
                      href={`/?category=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="tag-pill"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                {/* Decorative divider */}
                <div className={`h-[2px] bg-gradient-to-r from-[var(--color-secondary)]/40 to-transparent ${featured.type === "blog" ? "w-16 mx-auto" : "w-12"}`} />

                {/* Main heading with enhanced sizing */}
                <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-[var(--color-primary)] text-balance tracking-tight">
                  <Link href={`/blog/${featured.slug}`} className="transition-all duration-300 hover:text-[var(--color-secondary)] hover:drop-shadow-sm">
                    {featured.title}
                  </Link>
                </h1>

                {/* Author and rating (reviews only) */}
                {featured.type !== "blog" && (
                  <>
                    <p className="font-heading text-sm font-semibold uppercase tracking-widest text-[var(--color-secondary)] flex items-center gap-2">
                      <span className="inline-block w-8 h-[2px] bg-[var(--color-secondary)]" />
                      by {featured.author}
                    </p>
                    <StarRating rating={featured.rating} />
                  </>
                )}

                {/* Summary with improved typography */}
                <p className="font-body text-base leading-relaxed text-[var(--color-text)]/90 max-w-[60ch] mt-1">
                  {featured.summary}
                </p>

                {/* CTA Button with enhanced styling */}
                <div className={`pt-2 ${featured.type === "blog" ? "" : "md:self-start"}`}>
                  <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)]/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-secondary)]/30 hover:translate-y-[-2px] active:translate-y-0 active:shadow-md group/btn">
                    <span>{featured.type === "blog" ? "Read Full Post" : "Read Full Review"}</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
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
