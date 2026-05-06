import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) {
        return `https://www.youtube.com${parsed.pathname}?rel=0`;
      }
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}?rel=0` : null;
    }
  } catch {
    return null;
  }

  return null;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardThumbnail = project.projectsThumbnail ?? project.thumbnail;
  const cardThumbnailYouTubeUrl = project.projectsThumbnailYouTubeUrl ?? project.thumbnailYouTubeUrl;
  const youtubeEmbedUrl = cardThumbnailYouTubeUrl
    ? getYouTubeEmbedUrl(cardThumbnailYouTubeUrl)
    : null;
  const visibleTags = project.tags.slice(0, 3);
  const hiddenTagCount = Math.max(project.tags.length - visibleTags.length, 0);

  return (
    <article className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_14px_34px_-28px_rgba(20,26,68,0.45)] transition hover:-translate-y-1">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-primary-subtle md:aspect-[16/10]">
        {youtubeEmbedUrl ? (
          <iframe
            src={youtubeEmbedUrl}
            title={`${project.title} thumbnail video`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : cardThumbnail ? (
          <Image src={cardThumbnail} alt={`${project.title} thumbnail`} fill className="object-cover" />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-6">
        <div>
          <h3
            className="font-body min-h-[3.6rem] text-[0.9rem] font-medium leading-[1.35] tracking-[-0.01em] text-text-primary md:min-h-[4.2rem] md:text-[0.95rem] md:leading-[1.4]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {project.title}
          </h3>
          <p className="mt-1.5 text-[0.84rem] text-text-secondary md:mt-2 md:text-[0.92rem]">{project.period}</p>
        </div>

        <p
          className="mt-3 min-h-[4.05rem] text-[0.8rem] leading-[1.55] text-text-secondary md:mt-4 md:min-h-[4.5rem] md:text-[0.84rem] md:leading-6"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {project.summary}
        </p>

        <ul className="mt-3 flex flex-nowrap gap-1.5 overflow-hidden md:mt-4 md:gap-2">
          {visibleTags.map((tag) => (
            <li
              key={tag}
              className="max-w-[120px] truncate rounded-md border border-primary/20 bg-primary-subtle px-2 py-0.5 text-[0.7rem] font-medium text-primary md:max-w-[140px] md:px-2.5 md:py-1 md:text-[0.76rem]"
              title={tag}
            >
              {tag}
            </li>
          ))}
          {hiddenTagCount > 0 ? (
            <li className="rounded-md border border-primary/20 bg-primary-subtle px-2 py-0.5 text-[0.7rem] font-medium text-primary md:px-2.5 md:py-1 md:text-[0.76rem]">
              +{hiddenTagCount}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4 text-[0.8rem] md:gap-2 md:pt-5 md:text-[0.88rem]">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-lg border border-primary bg-primary px-2.5 py-1 font-medium text-white transition hover:opacity-90 md:px-3 md:py-1.5"
          >
            View Details →
          </Link>
          {project.paperLink ? (
            <a
              href={project.paperLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-white px-2.5 py-1 transition hover:border-primary hover:text-primary md:px-3 md:py-1.5"
            >
              DOI
            </a>
          ) : null}
          {project.pdfLink ? (
            <a
              href={project.pdfLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-white px-2.5 py-1 transition hover:border-primary hover:text-primary md:px-3 md:py-1.5"
            >
              PDF
            </a>
          ) : null}
          {project.videoUrl ? (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-white px-2.5 py-1 transition hover:border-primary hover:text-primary md:px-3 md:py-1.5"
            >
              Video
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
