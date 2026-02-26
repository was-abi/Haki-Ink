import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReviewNav from "@/components/ReviewNav";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StarRating from "@/components/StarRating";
import StatusBadge from "@/components/StatusBadge";
import CommentSection from "@/components/CommentSection";
import type { Review } from "@/lib/types";

const REVIEWS: Review[] = [
  {
    slug: "the-great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    date: "2026-02-15",
    rating: 4,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/182E4B/FFFFFF?text=Gatsby",
    summary: "A masterpiece of American literature exploring wealth, love, and the American Dream.",
    content: `
## First Impressions

Fitzgerald's prose is unlike anything else in American literature. Every sentence is deliberate, every image purposeful. The green light across the bay is one of literature's most enduring symbols — at once simple and impossibly layered.

## The Characters

Gatsby himself is a paradox: charming yet hollow, driven yet tragic. Nick Carraway serves as the perfect narrator — close enough to observe, detached enough to judge fairly. Daisy, often dismissed, is actually the novel's most interesting study in performative emptiness.

## Themes

- The impossibility of recapturing the past
- Class and the illusion of the American Dream
- Moral decay beneath glittering surfaces
- The corruption of idealism

## Verdict

A short novel that rewards re-reading. Each pass reveals new layers of irony and tragedy. Essential American literature.
    `,
  },
  {
    slug: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    date: "2026-01-20",
    rating: 5,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/7FB082/FFFFFF?text=Mockingbird",
    summary: "A timeless story of racial injustice and moral growth in the American South.",
    content: `
## A Novel That Earns Its Place

Harper Lee's debut — and for decades, only — novel remains one of the most important works of American fiction. It's a book about justice, but more fundamentally about what it costs to be good in a world that punishes goodness.

## Scout as Narrator

The decision to filter everything through Scout Finch's childhood perspective is a masterstroke. Her confusion and gradual understanding mirror the reader's own confrontation with the novel's difficult truths.

## Atticus Finch

Complex, often misread. Not a perfect man, but a man trying to do right — which the novel suggests is both easier and harder than it sounds.

## Verdict

Five stars without hesitation. Some books age poorly; this one only becomes more necessary.
    `,
  },
  {
    slug: "the-brothers-karamazov",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    date: "2026-01-05",
    rating: 5,
    status: "Finished",
    coverImage: "https://placehold.co/400x600/333333/FFFFFF?text=Karamazov",
    summary: "A profound exploration of faith, doubt, morality, and the human condition.",
    content: `
## A Monumental Achievement

Dostoevsky's final novel is a cathedral of ideas — vast, sometimes overwhelming, always rewarding. The Grand Inquisitor chapter alone is worth the entire reading experience.

## Faith vs. Doubt

The tension is presented without cheap resolution. Alyosha's goodness never feels naive; Ivan's doubt never feels cynical. Both positions are given their full philosophical weight — which is why this novel converts as many people to faith as it does to atheism.

## Verdict

The greatest novel ever written. Not a claim I make lightly.
    `,
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
    content: `
## World-Building at Its Peak

Herbert constructs a universe with the depth of Tolkien and the political sophistication of Le Carré. Arrakis is not just a setting — it is the novel's central argument about ecology, power, and human hubris.

## Paul Atreides

An intentionally problematic hero. Herbert understood that charismatic leaders who promise salvation are dangerous — and embedded that warning into the very structure of Paul's arc.

## Verdict

Essential. Read it slowly. The sequels are uneven but God Emperor of Dune is underrated.
    `,
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
    content: `
## Precisely Observed

Rooney's prose is almost uncomfortably precise in its rendering of internal contradiction. Connell and Marianne are both acutely intelligent and chronically unable to say the one thing that would fix everything — which feels very true to how people actually are.

## The Punctuation Question

The lack of quotation marks is a deliberate choice and it works — it collapses the distance between action and dialogue, between what's said and what's meant.

## Verdict

Three stars — meaning I found it genuinely good but not transcendent. Rooney is a real talent and I'll read her next book.
    `,
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
    content: `
## Still Reading — Early Impressions

About 60% through. The House is one of the most original settings in recent fiction — a structure that shouldn't work as a metaphor but absolutely does.

## The Narrator

Piranesi's voice is the novel's greatest achievement. His matter-of-fact acceptance of the impossible is both comic and quietly devastating.

## So Far

Deeply strange, deeply good. Will update the verdict when I finish.
    `,
  },
];

export async function generateStaticParams() {
  return REVIEWS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const review = REVIEWS.find((r) => r.slug === params.slug);
  if (!review) return {};
  return { title: review.title, description: review.summary };
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const review = REVIEWS.find((r) => r.slug === params.slug);
  if (!review) notFound();

  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <ReviewNav />

      <main>
        {/* Hero band */}
        <div className="bg-[var(--color-bg-soft)] border-b border-[var(--color-border)] py-8">
          <div className="site-container">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">

              {/* Cover */}
              <div className="relative mx-auto aspect-[2/3] w-36 flex-shrink-0 overflow-hidden rounded-[4px] shadow-card-hover md:mx-0 md:w-44">
                <Image src={review.coverImage} alt={`Cover of ${review.title}`} fill
                  sizes="(max-width: 768px) 144px, 176px" className="object-cover" priority />
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <StatusBadge status={review.status} />
                </div>
                <h1 className="font-heading text-3xl font-bold text-[var(--color-primary)] text-balance">
                  {review.title}
                </h1>
                <p className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  by {review.author}
                </p>
                <StarRating rating={review.rating} />
                <p className="font-body text-xs text-[var(--color-muted)]">Reviewed on {formattedDate}</p>
                <p className="font-body text-sm leading-relaxed text-[var(--color-text)] max-w-[55ch]">
                  {review.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="site-container py-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">

            {/* Article — 2/3 */}
            <div className="min-w-0 flex-[2]">
              <article className="prose prose-sm max-w-none
                prose-headings:font-heading prose-headings:text-[var(--color-primary)] prose-headings:font-bold
                prose-p:font-body prose-p:text-[var(--color-text)] prose-p:leading-[1.75]
                prose-a:text-[var(--color-secondary)] prose-a:no-underline hover:prose-a:underline
                prose-li:text-[var(--color-text)] prose-li:font-body
                prose-hr:border-[var(--color-border)]
              ">
                {review.content.trim().split("\n\n").map((block, i) => {
                  const trimmed = block.trim();
                  if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.replace("## ", "")}</h2>;
                  if (trimmed.startsWith("- ")) {
                    return (
                      <ul key={i}>
                        {trimmed.split("\n").filter(Boolean).map((item, j) => (
                          <li key={j}>{item.replace(/^-\s+/, "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{trimmed}</p>;
                })}
              </article>

              <CommentSection slug={review.slug} />
            </div>

            {/* Sidebar — 1/3 */}
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
