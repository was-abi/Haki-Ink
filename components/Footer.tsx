import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  "Navigate": [
    { label: "Home",              href: "/" },
    { label: "All Reviews",       href: "/reviews" },
    { label: "Currently Reading", href: "/?status=reading" },
    { label: "About",             href: "/about" },
  ],
  "Categories": [
    { label: "Fiction",      href: "/?category=fiction" },
    { label: "Classic Lit",  href: "/?category=classic-lit" },
    { label: "Sci-Fi",       href: "/?category=sci-fi" },
    { label: "Contemporary", href: "/?category=contemporary" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="site-container py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/brand_logo.png"
              alt="Haki & Ink"
              width={120}
              height={40}
              className="mb-4 h-9 w-auto brightness-0 invert"
            />
            <p className="font-body text-sm leading-relaxed text-white/70">
              A personal book review blog — thoughtful reviews, honest takes, and a curated digital bookshelf. Updated regularly.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-4 font-heading text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                {heading}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/70 transition-colors hover:text-[var(--color-secondary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Haki &amp; Ink. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons — placeholder SVGs */}
            {["Twitter", "Instagram", "Goodreads"].map((name) => (
              <a key={name} href="#" aria-label={name} className="text-white/50 transition-colors hover:text-[var(--color-secondary)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
