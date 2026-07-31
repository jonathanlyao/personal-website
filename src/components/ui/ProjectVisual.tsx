import Image from "next/image";
import type { ProjectMedia } from "@/types/content";

export type ProjectVisualProps = ProjectMedia & {
  className?: string;
  sizes?: string;
};

export function ProjectVisual({
  src,
  alt,
  caption,
  eyebrow,
  sourceNote,
  priority = false,
  aspectRatio = "16:10",
  fit = "cover",
  tone = "light",
  variant = "full",
  className,
  sizes = "(max-width: 900px) calc(100vw - 2rem), 960px",
  intrinsicWidth = 1600,
  intrinsicHeight = 1000,
}: ProjectVisualProps) {
  if (!src) {
    return null;
  }

  const figureClassName = [
    "project-visual",
    `project-visual--${tone}`,
    `project-visual--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const mediaClassName = [
    "project-visual__media",
    `project-visual__media--${aspectRatio.replace(":", "-")}`,
    `project-visual__media--${fit}`,
  ].join(" ");
  const hasCaption = Boolean(eyebrow || caption || sourceNote);

  return (
    <figure className={figureClassName}>
      <div className={mediaClassName}>
        {aspectRatio === "auto" ? (
          <Image
            src={src}
            alt={alt}
            width={intrinsicWidth}
            height={intrinsicHeight}
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        )}
      </div>
      {hasCaption ? (
        <figcaption className="project-visual__caption">
          {eyebrow ? <span>{eyebrow}</span> : null}
          {caption ? <p>{caption}</p> : null}
          {sourceNote ? <small>{sourceNote}</small> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
