"use client";

import { useState } from "react";

interface ExpandableSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  isFirst?: boolean;
}

export default function ExpandableSection({
  title,
  description,
  children,
  isFirst = false,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-4 py-4 px-0 text-left group"
      >
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] text-balance">
            {title}
          </h2>
          {description && (
            <p className="font-body text-sm text-[var(--color-text)] mt-2">
              {description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0">
          <svg
            className={`w-6 h-6 text-[var(--color-secondary)] transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>

      {isFirst && !isExpanded && (
        <div
          className="mt-3 p-4 bg-[var(--color-mint-pale)] border border-[var(--color-mint)] rounded-[4px] flex items-start gap-3"
          role="status"
        >
          <svg
            className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="font-body text-sm font-bold text-[var(--color-primary)]">
              Click to expand
            </p>
            <p className="font-body text-xs text-[var(--color-primary)] mt-1">
              Each principle includes detailed explanations and examples
            </p>
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="mt-4 space-y-6 animate-in fade-in duration-300">
          {children}
        </div>
      )}
    </div>
  );
}
