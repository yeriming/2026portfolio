import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

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

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const visualImages =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : project.posterImage
        ? [project.posterImage]
        : [];
  const keyVisualVideoUrl = project.keyVisualYouTubeUrl ?? project.videoUrl;
  const embeddedVideoUrl = keyVisualVideoUrl ? getYouTubeEmbedUrl(keyVisualVideoUrl) : null;

  return (
    <div className="page-shell">
      <section className="border-b border-border pb-12">
        <p className="text-[0.9rem] text-text-secondary">{project.period}</p>
        <h1 className="page-title mt-3 text-[clamp(2rem,4.2vw,3.2rem)] text-text-primary">{project.title}</h1>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-primary-subtle px-3 py-1 text-[0.78rem] font-medium text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem]">
          {project.paperLink ? (
            <a href={project.paperLink} target="_blank" rel="noreferrer">
              DOI
            </a>
          ) : null}
          {project.pdfLink ? (
            <a href={project.pdfLink} target="_blank" rel="noreferrer">
              PDF
            </a>
          ) : null}
          {keyVisualVideoUrl ? (
            <a href={keyVisualVideoUrl} target="_blank" rel="noreferrer">
              Video
            </a>
          ) : null}
        </div>
        <p className="mt-7 w-full max-w-[980px] text-[1.04rem] leading-8 text-text-secondary">{project.summary}</p>
      </section>

      <section className="grid gap-10 py-12">
        <article>
          <h2 className="text-[1.55rem] font-medium tracking-[-0.02em] text-text-primary">Key Visuals</h2>
          {embeddedVideoUrl ? (
            <div className="mt-4 overflow-hidden rounded-xl bg-primary-subtle">
              <div className="aspect-video w-full">
                <iframe
                  src={embeddedVideoUrl}
                  title={`${project.title} key visual video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}
          {visualImages.length > 0 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {visualImages.map((imageSrc, index) => (
                <div key={`${imageSrc}-${index}`} className="relative h-64 overflow-hidden rounded-xl bg-primary-subtle">
                  <Image
                    src={imageSrc}
                    alt={`${project.title} visual ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            !embeddedVideoUrl ? <div className="mt-4 h-64 rounded-xl bg-primary-subtle" /> : null
          )}
        </article>
        <article>
          <h2 className="text-[1.55rem] font-medium tracking-[-0.02em] text-text-primary">Background / Problem</h2>
          <p className="mt-3 text-[1rem] leading-8 text-text-secondary">{project.description.background}</p>
        </article>
        <article>
          <h2 className="text-[1.55rem] font-medium tracking-[-0.02em] text-text-primary">My Role</h2>
          <p className="mt-3 text-[1rem] leading-8 text-text-secondary">{project.description.role}</p>
        </article>
        <article>
          <h2 className="text-[1.55rem] font-medium tracking-[-0.02em] text-text-primary">Process / Method</h2>
          <p className="mt-3 text-[1rem] leading-8 text-text-secondary">{project.description.process}</p>
        </article>
        <article>
          <h2 className="text-[1.55rem] font-medium tracking-[-0.02em] text-text-primary">Result / Outcome</h2>
          <p className="mt-3 text-[1rem] leading-8 text-text-secondary">{project.description.result}</p>
        </article>
      </section>

      <Link href="/projects" className="text-[0.95rem] font-medium text-primary">
        ← Back to Projects
      </Link>
    </div>
  );
}
