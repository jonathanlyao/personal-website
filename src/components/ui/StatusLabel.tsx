export function StatusLabel({
  children,
  tone = "active",
}: {
  children: string;
  tone?: "active" | "informational";
}) {
  return (
    <span className={`status-label status-label--${tone}`}>
      <span className="status-label__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
