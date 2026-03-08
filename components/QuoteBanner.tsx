"use client";

import { useState } from "react";

interface Quote {
  text: string;
  author: string;
  source?: string;
}

const QUOTES: Quote[] = [
  {
    text: "People don't see things and hear things as objectively as they might think. The visual and auditory information that enters the mind is distorted by experiences, thoughts, circumstances, wild fancies, prejudices, preferences, knowledge, awareness, and countless other workings of the mind.",
    author: "Toshikazu Kawaguchi",
    source: "Before the Coffee Gets Cold",
  },
  {
    text: "Don't walk in front of me… I may not follow\nDon't walk behind me… I may not lead\nWalk beside me… just be my friend",
    author: "Albert Camus",
  },
  {
    text: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    author: "Albert Camus",
  },
  {
    text: "Man is the only creature who refuses to be what he is.",
    author: "Albert Camus",
  },
  {
    text: "Nobody realizes that some people expend tremendous energy merely to be normal.",
    author: "Albert Camus",
  },
  {
    text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    author: "Albert Camus",
  },
  {
    text: "You know what charm is: a way of getting the answer yes without having asked any clear question.",
    author: "Albert Camus",
    source: "The Fall",
  },
  {
    text: "Fiction is the lie through which we tell the truth.",
    author: "Albert Camus",
  },
  {
    text: "I love mankind, he said, \"but I find to my amazement that the more I love mankind as a whole, the less I love man in particular.\"",
    author: "Fyodor Dostoyevsky",
    source: "The Brothers Karamazov",
  },
  {
    text: "People speak sometimes about the \"bestial\" cruelty of man, but that is terribly unjust and offensive to beasts, no animal could ever be so cruel as a man, so artfully, so artistically cruel.",
    author: "Fyodor Dostoyevsky",
  },
  {
    text: "For someone like myself in whom the ability to trust others is so cracked and broken that I am wretchedly timid and am forever trying to read the expression on people's faces.",
    author: "Osamu Dazai",
    source: "No Longer Human",
  },
  {
    text: "The thought of dying has never bothered me, but getting hurt, losing blood, becoming crippled and the like—no thanks.",
    author: "Osamu Dazai",
    source: "No Longer Human",
  },
  {
    text: "Refusal to accept the flow of the world is the root of all misery.",
    author: "Devdutt Pattanaik",
    source: "Jaya: An Illustrated Retelling of the Mahabharata",
  },
  {
    text: "Its not about making the world a peaceful place; it is about us being at peace with the world.",
    author: "Devdutt Pattanaik",
    source: "Jaya: An Illustrated Retelling of the Mahabharata",
  },
  {
    text: "Everybody dies—some suddenly, some slowly, some painfully, some peacefully. No one can escape death. The point is to make the most of life—enjoy it, celebrate it, learn from it, make sense of it, share it with fellow human beings—so that when death finally comes, it will not be such a terrible thing.",
    author: "Devdutt Pattanaik",
    source: "Jaya: An Illustrated Retelling of the Mahabharata",
  },
  {
    text: "In general, people are not drawn to perfection in others. People are drawn to shared interests, shared problems, and an individual's life energy.\n\nHumans connect with humans. Hiding one's humanity and trying to project an image of perfection makes a person vague, slippery, lifeless, and uninteresting.",
    author: "Robert Glover",
    source: "No More Mr. Nice Guy: A Proven Plan for Getting What You Want in Love, Sex, and Life",
  },
];

export default function QuoteBanner() {
  // Determine initial quote based on current hour
  const hourIndex = Math.floor(Date.now() / (1000 * 60 * 60)) % QUOTES.length;
  const [quoteIndex, setQuoteIndex] = useState(hourIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const quote = QUOTES[quoteIndex];

  const handleQuoteClick = () => {
    if (isAnimating) return; // Prevent rapid clicks

    setIsAnimating(true);

    // Get random quote (can be the same one)
    const randomIndex = Math.floor(Math.random() * QUOTES.length);

    // Reset animation after transition completes
    setTimeout(() => {
      setQuoteIndex(randomIndex);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-[var(--color-primary)] text-white py-8 px-4">
      <style>{`
        @keyframes quoteOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-8px);
          }
        }

        @keyframes quoteIn {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .quote-animate-out {
          animation: quoteOut 0.3s ease-out forwards;
        }

        .quote-animate-in {
          animation: quoteIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="site-container flex flex-col items-center text-center gap-3">
        <button
          onClick={handleQuoteClick}
          disabled={isAnimating}
          className="text-[var(--color-mint)] text-4xl leading-none font-heading transition-all duration-200 hover:scale-110 hover:opacity-90 active:scale-95 cursor-pointer disabled:opacity-70"
          aria-label="Get a new quote"
        >
          "
        </button>

        <blockquote
          className={`font-heading italic text-base md:text-lg leading-relaxed max-w-3xl text-white/90 whitespace-pre-line ${
            isAnimating ? 'quote-animate-out' : 'quote-animate-in'
          }`}
        >
          {quote.text}
        </blockquote>

        <cite
          className={`font-body text-xs uppercase tracking-widest text-[var(--color-mint)] not-italic ${
            isAnimating ? 'quote-animate-out' : 'quote-animate-in'
          }`}
        >
          — {quote.author}{quote.source ? `, ${quote.source}` : ""}
        </cite>
      </div>
    </div>
  );
}
