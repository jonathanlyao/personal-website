export function LimitationsLedger({
  limitations,
}: {
  limitations: readonly string[];
}) {
  return (
    <ol className="limitations-ledger">
      {limitations.map((limitation, index) => (
        <li key={limitation}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{limitation}</p>
        </li>
      ))}
    </ol>
  );
}
