interface StarRatingProps {
  rating: number; // 0–5
  size?: "sm" | "md";
}

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  const cls = size === "sm" ? "text-sm" : "text-base";
  return (
    <span className={`inline-flex gap-px ${cls}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "star-filled" : "star-empty"} aria-hidden="true">★</span>
      ))}
    </span>
  );
}
