import type { ReviewStatus } from "@/lib/types";

const STATUS_COLORS: Record<ReviewStatus, string> = {
  "Finished":          "bg-[var(--color-primary)] text-white",
  "Currently Reading": "bg-[var(--color-secondary)] text-white",
  "DNF":               "bg-[var(--color-muted)] text-white",
};

export default function StatusBadge({ status }: { status: ReviewStatus }) {
  return (
    <span className={`category-label ${STATUS_COLORS[status]}`}>
      {status}
    </span>
  );
}
