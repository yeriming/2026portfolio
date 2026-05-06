import Link from "next/link";
import { projects } from "@/data/projects";

const accentPalette = ["#ffb270", "#dfff47", "#cdb9ff", "#ffcde9", "#b8f1ff", "#ffe88c"];

function getYouTubeThumbUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
    }
  } catch {
    return null;
  }

  return null;
}

function getProjectThumb(project: (typeof projects)[number]) {
  if (project.galleryThumbnail) return project.galleryThumbnail;
  if (project.galleryThumbnailYouTubeUrl) return getYouTubeThumbUrl(project.galleryThumbnailYouTubeUrl);
  if (project.thumbnail) return project.thumbnail;
  if (project.thumbnailYouTubeUrl) return getYouTubeThumbUrl(project.thumbnailYouTubeUrl);
  if (project.galleryImages && project.galleryImages.length > 0) return project.galleryImages[0];
  return null;
}

export default function ProjectGallery() {
  const galleryProjects = projects
    .filter((project) => project.showInGallery)
    .sort((a, b) => (a.galleryOrder ?? Number.MAX_SAFE_INTEGER) - (b.galleryOrder ?? Number.MAX_SAFE_INTEGER));

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {galleryProjects.map((project, index) => {
        const thumbSrc = getProjectThumb(project);
        const accent = accentPalette[index % accentPalette.length];

        return (
          <article key={project.slug} className="group">
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative h-[280px] overflow-visible">
                <div
                  className="absolute left-10 top-8 h-[220px] w-[78%] rounded-3xl"
                  style={{
                    backgroundColor: accent,
                    transform: "rotate(-8deg)"
                  }}
                />
                <div className="absolute left-0 top-12 h-[220px] w-full overflow-hidden rounded-2xl bg-primary-subtle shadow-[0_18px_38px_-26px_rgba(25,30,70,0.45)] transition group-hover:-translate-y-1">
                  {thumbSrc ? (
                    // We intentionally keep a plain img tag here to support both local files and YouTube thumbnail URLs without extra config.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumbSrc} alt={`${project.title} gallery thumbnail`} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-text-secondary">No preview</div>
                  )}
                </div>
              </div>
              <h3 className="font-body mt-5 text-[1.4rem] font-medium text-text-primary">{project.title}</h3>
              <p className="mt-2 text-[0.96rem] text-text-secondary">{project.summary}</p>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
