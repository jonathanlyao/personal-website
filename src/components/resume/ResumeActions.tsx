"use client";

import { TechnicalIcon } from "@/components/ui/TechnicalIcon";

export function ResumeActions({
  resumePdfUrl,
}: {
  resumePdfUrl?: string;
}) {
  return (
    <div className="resume-actions" aria-label="Résumé actions">
      <button
        className="editorial-button editorial-button--primary"
        type="button"
        onClick={() => window.print()}
        aria-label="Print résumé or save it as a PDF"
      >
        <span>Print / Save PDF</span>
        <TechnicalIcon name="document" size={16} />
      </button>
      {resumePdfUrl ? (
        <a
          className="editorial-button editorial-button--secondary"
          href={resumePdfUrl}
          download
        >
          <span>Download PDF</span>
          <TechnicalIcon name="document" size={16} />
        </a>
      ) : null}
    </div>
  );
}
