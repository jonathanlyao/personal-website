import type { Metadata } from "next";
import { EditorialButton } from "@/components/ui/EditorialButton";

export const metadata: Metadata = {
  title: "Page Not Found | Lee Yao",
  description:
    "The requested route does not exist or is not part of Lee Yao’s current portfolio.",
};

export default function NotFound() {
  return (
    <main className="not-found-page" id="top" tabIndex={-1}>
      <div className="not-found-page__marker" aria-hidden="true">
        404
      </div>
      <div className="not-found-page__content">
        <p className="eyebrow">404 / ROUTE NOT FOUND</p>
        <h1>This page does not exist.</h1>
        <p>
          The route may have changed, or the page may not be part of the
          current portfolio.
        </p>
        <div className="not-found-page__actions">
          <EditorialButton href="/" variant="primary">
            Back Home
          </EditorialButton>
          <EditorialButton href="/work" variant="secondary">
            View Work
          </EditorialButton>
        </div>
      </div>
    </main>
  );
}
