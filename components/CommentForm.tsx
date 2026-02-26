"use client";

import { useState } from "react";

export default function CommentForm({ slug }: { slug: string }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{ name?: string; comment?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function validate() {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Name is required.";
    if (comment.trim().length < 2) e.comment = "Comment must be at least 2 characters.";
    if (comment.trim().length > 500) e.comment = "Comment must be 500 characters or fewer.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name: name.trim(), comment: comment.trim() }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName(""); setComment("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "w-full rounded-[3px] border border-[var(--color-border)] bg-white px-3 py-2 font-body text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-secondary)] focus:outline-none";

  return (
    <div className="mt-6 rounded-[4px] border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6">
      <h3 className="font-heading text-lg font-bold text-[var(--color-primary)] mb-4">Leave a Comment</h3>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

        <div className="flex flex-col gap-1">
          <label htmlFor="comment-name" className="font-heading text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-primary)]">Your Name</label>
          <input id="comment-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jane Doe" className={inputCls} aria-invalid={!!errors.name} />
          {errors.name && <p className="font-body text-xs text-red-500">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="comment-body" className="font-heading text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-primary)]">Comment</label>
          <textarea id="comment-body" value={comment} onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..." rows={4} className={`${inputCls} resize-y`} aria-invalid={!!errors.comment} />
          <div className="flex justify-between">
            {errors.comment ? <p className="font-body text-xs text-red-500">{errors.comment}</p> : <span />}
            <p className="font-body text-xs text-[var(--color-muted)] tabular-nums">{comment.length}/500</p>
          </div>
        </div>

        {status === "success" && (
          <p role="alert" className="rounded-[3px] bg-green-50 border border-green-200 px-3 py-2 font-body text-sm text-green-700">
            Thanks for your comment! It will appear after review.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="rounded-[3px] bg-red-50 border border-red-200 px-3 py-2 font-body text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        <button type="submit" disabled={status === "loading"}
          className="self-start rounded-[3px] bg-[var(--color-primary)] px-6 py-2 font-heading text-[0.65rem] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--color-secondary)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Submit Comment"}
        </button>
      </form>
    </div>
  );
}
