"use client";

import Link from "next/link";
import Image from "next/image";

export default function ReviewNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white">
      <div className="h-[3px] w-full bg-[var(--color-secondary)]" />
      <div className="site-container flex h-12 items-center justify-between">
        <Link href="/" aria-label="Haki & Ink — home" className="flex-shrink-0">
          <Image src="/brand_logo.png" alt="Haki & Ink" width={100} height={34} className="h-8 w-auto" priority />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 font-heading text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          All Reviews
        </Link>
      </div>
    </header>
  );
}
