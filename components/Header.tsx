"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home",              href: "/" },
  { label: "Reviews",           href: "/reviews" },
  { label: "Currently Reading", href: "/?status=reading" },
  { label: "About",             href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-border)] bg-white">
      {/* Thin rust accent bar at top */}
      <div className="h-[3px] w-full bg-[var(--color-secondary)]" />

      <div className="site-container">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <Link href="/" aria-label="Haki & Ink — home" className="flex-shrink-0">
            <Image
              src="/brand_logo.png"
              alt="Haki & Ink"
              width={130}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading text-[0.68rem] font-bold uppercase tracking-widest text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-[5px] p-2 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-5 bg-[var(--color-primary)] transition-transform duration-200 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[var(--color-primary)] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[var(--color-primary)] transition-transform duration-200 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-[var(--color-border)] pb-4 md:hidden" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-heading text-[0.68rem] font-bold uppercase tracking-widest text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
