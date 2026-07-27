import { EditorialButton } from "@/components/ui/EditorialButton";
import { TechnicalIcon } from "@/components/ui/TechnicalIcon";
import type { WritingItem } from "@/types/content";

type WritingRowProps = {
  item: WritingItem;
  index: number;
  variant: "homepage" | "index";
};

export function WritingRow({ item, index, variant }: WritingRowProps) {
  const headingId = `writing-${item.id}-title`;

  return (
    <li className={`writing-row writing-row--${variant}`}>
      <article aria-labelledby={headingId} data-writing-id={item.id}>
        <div className="writing-row__index">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <small>{item.contentType}</small>
        </div>
        <div className="writing-row__main">
          <h3 id={headingId}>
            <a
              className="writing-row__title-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{item.title}</span>
              <TechnicalIcon name="external-link" size={17} />
              <span className="visually-hidden">Opens in a new tab</span>
            </a>
          </h3>
          <p>{item.summary}</p>
        </div>
        <div className="writing-row__metadata">
          <div>
            <p>Topics</p>
            <ul aria-label={`Topics for ${item.title}`}>
              {item.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Platform</p>
            <span>{item.platform}</span>
          </div>
        </div>
        <div className="writing-row__actions">
          <EditorialButton href={item.url} variant="secondary" external>
            Read on DEV
          </EditorialButton>
          {item.discussionUrl ? (
            <EditorialButton
              href={item.discussionUrl}
              variant="text"
              external
            >
              LinkedIn discussion
            </EditorialButton>
          ) : null}
        </div>
      </article>
    </li>
  );
}
