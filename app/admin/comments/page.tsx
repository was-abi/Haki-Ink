// Admin page — Phase 4 will wire up real DB queries and actions
// Access via /admin/comments (protected by middleware in Phase 4)

type FilterStatus = "all" | "pending" | "approved" | "spam";

const PLACEHOLDER_COMMENTS = [
  { id: "1", slug: "before-the-coffee-gets-cold",      name: "Alice M.",   comment: "This review perfectly captures what makes Gatsby so haunting.",      status: "approved", createdAt: "2026-02-20" },
  { id: "2", slug: "the-stranger",      name: "James K.",   comment: "I disagree about Nick being a reliable narrator.",                   status: "approved", createdAt: "2026-02-22" },
  { id: "3", slug: "crime-and-punishment",                  name: "Omar S.",    comment: "Have you read the sequels? God Emperor is underrated.",               status: "pending",  createdAt: "2026-02-24" },
  { id: "4", slug: "death-on-gokumon-island",         name: "Buy Ch3ap!", comment: "BUY CHEAP WATCHES AT www.spam.example.com!!!",                       status: "spam",     createdAt: "2026-02-23" },
  { id: "5", slug: "never-let-me-go", name: "Sofia R.", comment: "The Grand Inquisitor scene is the greatest thing in literature.",     status: "pending",  createdAt: "2026-02-25" },
];

const STATUS_STYLES: Record<string, string> = {
  approved: "bg-brand-green/15 text-brand-green border-brand-green/30",
  pending:  "bg-brand-navy/10 text-brand-navy border-brand-navy/20",
  spam:     "bg-red-50 text-red-600 border-red-200",
};

export default function AdminCommentsPage({
  searchParams,
}: {
  searchParams: { filter?: FilterStatus };
}) {
  const filter = searchParams.filter ?? "all";

  const filtered = PLACEHOLDER_COMMENTS.filter((c) =>
    filter === "all" ? true : c.status === filter
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="container-page py-48">

        {/* Header */}
        <div className="mb-32">
          <h1 className="font-heading text-display text-[var(--color-heading)]">
            Comment Moderation
          </h1>
          <p className="mt-8 font-body text-body text-[var(--color-text)]">
            Review, approve, or delete reader comments.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-24 flex flex-wrap gap-8">
          {(["all", "pending", "approved", "spam"] as FilterStatus[]).map((f) => {
            const count = f === "all"
              ? PLACEHOLDER_COMMENTS.length
              : PLACEHOLDER_COMMENTS.filter((c) => c.status === f).length;
            return (
              <a
                key={f}
                href={f === "all" ? "/admin/comments" : `/admin/comments?filter=${f}`}
                className={`
                  rounded-full border px-16 py-4 font-body text-caption font-medium capitalize
                  transition-colors duration-200
                  ${filter === f
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-[var(--color-border)] text-[var(--color-text)] hover:border-brand-green hover:text-brand-green"
                  }
                `}
              >
                {f} ({count})
              </a>
            );
          })}
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-card border border-[var(--color-border)] bg-[var(--color-surface)]">
          {filtered.length === 0 ? (
            <p className="p-32 text-center font-body text-body text-[var(--color-text)]">
              No comments in this category.
            </p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  {["Author", "Comment", "Review", "Status", "Date", "Actions"].map((h) => (
                    <th
                      key={h}
                      className="px-16 py-12 font-body text-caption font-semibold uppercase tracking-wider text-[var(--color-heading)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr
                    key={c.id}
                    className={`border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-bg)] ${
                      i === filtered.length - 1 ? "border-0" : ""
                    }`}
                  >
                    <td className="px-16 py-12 font-body text-caption font-medium text-[var(--color-heading)] whitespace-nowrap">
                      {c.name}
                    </td>
                    <td className="px-16 py-12 font-body text-caption text-[var(--color-text)] max-w-[30ch] truncate">
                      {c.comment}
                    </td>
                    <td className="px-16 py-12 font-body text-caption text-brand-green whitespace-nowrap">
                      /{c.slug}
                    </td>
                    <td className="px-16 py-12">
                      <span className={`inline-block rounded-full border px-8 py-0.5 font-body text-caption capitalize ${STATUS_STYLES[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-16 py-12 font-body text-caption text-[var(--color-text)] whitespace-nowrap">
                      {c.createdAt}
                    </td>
                    <td className="px-16 py-12">
                      <div className="flex items-center gap-8">
                        {c.status !== "approved" && (
                          <button
                            className="font-body text-caption font-medium text-brand-green transition-colors hover:underline focus-visible:outline-brand-green"
                            // Phase 4: onClick → call PATCH /api/comments/[id]
                          >
                            Approve
                          </button>
                        )}
                        {c.status !== "spam" && (
                          <button className="font-body text-caption font-medium text-amber-600 transition-colors hover:underline">
                            Spam
                          </button>
                        )}
                        <button className="font-body text-caption font-medium text-red-500 transition-colors hover:underline">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}
