export function StatusLabel({ children }: { children: string }) {
  return (
    <span className="status-label">
      <span className="status-label__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
