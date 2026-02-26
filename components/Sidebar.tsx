import Link from "next/link";
import Image from "next/image";

const RECENT_POSTS = [
  { slug: "the-great-gatsby",        title: "The Great Gatsby",          date: "Feb 15, 2026" },
  { slug: "piranesi",                 title: "Piranesi",                  date: "Feb 24, 2026" },
  { slug: "normal-people",            title: "Normal People",             date: "Feb 20, 2026" },
  { slug: "dune",                     title: "Dune",                      date: "Feb 1, 2026"  },
  { slug: "the-brothers-karamazov",   title: "The Brothers Karamazov",    date: "Jan 5, 2026"  },
];

const CATEGORIES = [
  { label: "Fiction",       count: 4 },
  { label: "Classic Lit",   count: 3 },
  { label: "Sci-Fi",        count: 1 },
  { label: "Contemporary",  count: 2 },
  { label: "Russian Lit",   count: 1 },
];

const RECENT_COVERS = [
  { slug: "before-the-coffee-gets-cold",      src: "/covers/before_the_coffee_gets_cold_2.jpg" },
  { slug: "never-let-me-go",              src: "/covers/never_let_me_go.jpg" },
  { slug: "death-on-gokumon-island",                  src: "/covers/death_on_gokumon_island.jpg" },
  { slug: "the-stranger",         src: "/covers/Stranger_Albert_Camus_1.png" },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-8">

      {/* About widget */}
      <div className="rounded-[4px] bg-[var(--color-blush)] p-5">
        <p className="sidebar-heading">About This Blog</p>
        <p className="font-body text-sm leading-relaxed text-[var(--color-text)]">
          Haki &amp; Ink is a personal reading journal — honest reviews, careful reads, and a growing shelf of stories worth talking about.
        </p>
      </div>

      {/* Recent covers grid */}
      <div>
        <p className="sidebar-heading">Recently Reviewed</p>
        <div className="grid grid-cols-4 gap-2">
          {RECENT_COVERS.map((c) => (
            <Link key={c.slug} href={`/reviews/${c.slug}`} className="block overflow-hidden rounded-[3px]">
              <div className="relative aspect-[3/4]">
                <Image src={c.src} alt="" fill className="object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent posts list */}
      <div>
        <p className="sidebar-heading">Latest Reviews</p>
        <ul className="flex flex-col divide-y divide-[var(--color-border)]">
          {RECENT_POSTS.map((post) => (
            <li key={post.slug} className="py-2.5">
              <Link
                href={`/reviews/${post.slug}`}
                className="block font-heading text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
              >
                {post.title}
              </Link>
              <span className="font-body text-xs text-[var(--color-muted)]">{post.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <p className="sidebar-heading">Categories</p>
        <ul className="flex flex-col gap-1">
          {CATEGORIES.map((cat) => (
            <li key={cat.label} className="flex items-center justify-between">
              <Link
                href={`/?category=${cat.label.toLowerCase().replace(" ", "-")}`}
                className="font-body text-sm text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
              >
                {cat.label}
              </Link>
              <span className="font-body text-xs text-[var(--color-muted)]">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter CTA */}
      <div className="rounded-[4px] border border-[var(--color-border)] p-5 text-center">
        <p className="sidebar-heading text-center">Stay Updated</p>
        <p className="mb-3 font-body text-sm text-[var(--color-text)]">
          Get new reviews in your inbox.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="mb-2 w-full rounded-[3px] border border-[var(--color-border)] px-3 py-2 font-body text-sm focus:border-[var(--color-secondary)] focus:outline-none"
        />
        <button className="w-full rounded-[3px] bg-[var(--color-secondary)] px-4 py-2 font-heading text-[0.65rem] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-primary)]">
          Subscribe
        </button>
      </div>

    </aside>
  );
}
