export type IconName =
  | "source"
  | "ingest"
  | "warehouse"
  | "model"
  | "quality"
  | "decision"
  | "import"
  | "inbox"
  | "score"
  | "track"
  | "location"
  | "building"
  | "data"
  | "focus"
  | "email"
  | "linkedin"
  | "github"
  | "document"
  | "arrow-right"
  | "arrow-up"
  | "external-link";

export function TechnicalIcon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  const paths: Record<IconName, React.ReactNode> = {
    source: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    ingest: (
      <>
        <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
        <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
      </>
    ),
    warehouse: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v14c0 1.1 3.1 2 7 2s7-.9 7-2V5M5 10c0 1.1 3.1 2 7 2s7-.9 7-2M5 15c0 1.1 3.1 2 7 2s7-.9 7-2" />
      </>
    ),
    model: (
      <>
        <rect x="4" y="4" width="13" height="13" />
        <path d="M8 20h12V8M8 8h9v9" />
      </>
    ),
    quality: (
      <>
        <path d="m12 3 8 4v5c0 4.6-3.2 7.5-8 9-4.8-1.5-8-4.4-8-9V7l8-4Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    decision: (
      <>
        <path d="M4 20V9M10 20V4M16 20v-7M22 20V7" />
        <path d="m4 15 6-6 6 2 6-6" />
      </>
    ),
    import: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 8h8M8 12h5M12 16v4M9.5 17.5 12 20l2.5-2.5" />
      </>
    ),
    inbox: (
      <>
        <path d="M4 14 7 5h10l3 9v6H4v-6Z" />
        <path d="M4 14h5l1.5 2h3l1.5-2h5M12 3v8M9 8l3 3 3-3" />
      </>
    ),
    score: (
      <>
        <path d="M4 19V9M9 19v-5M14 19V6M19 19V3" />
        <path d="m3 7 6-3 5 2 7-4" />
      </>
    ),
    track: (
      <>
        <rect x="3" y="4" width="18" height="16" />
        <path d="M3 10h18M9 4v16M15 10v10M9 15h12" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V8l8-5v18M12 9h8v12M2 21h20" />
        <path d="M8 9h1M8 13h1M8 17h1M16 13h1M16 17h1" />
      </>
    ),
    data: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    focus: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" />
        <path d="M8 10v7M8 7v.1M12 17v-7M12 13c.5-2 5-2.3 5 1v3" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2A4.8 4.8 0 0 0 19 6c.1-.3.5-1.7-.1-3.3 0 0-1-.3-3.5 1.3a12.2 12.2 0 0 0-6.4 0C6.5 2.7 5.5 3 5.5 3 4.9 4.6 5.3 6 5.4 6a4.8 4.8 0 0 0-1.2 3.3c0 4.8 2.9 5.9 5.7 6.2-.5.5-.6 1.1-.6 2V21" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6V2Z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),
    "arrow-right": <path d="M5 12h14M14 7l5 5-5 5" />,
    "arrow-up": <path d="M12 19V5M7 10l5-5 5 5" />,
    "external-link": (
      <>
        <path d="M14 5h5v5M11 13l8-8" />
        <path d="M19 13v6H5V5h6" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}
