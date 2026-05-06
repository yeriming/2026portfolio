import type { Publication } from "@/data/publications";

type PublicationItemProps = {
  publication: Publication;
};

export default function PublicationItem({ publication }: PublicationItemProps) {
  const detailLink = publication.doi ?? publication.pdf;
  const paperLink = publication.pdf ?? publication.doi;

  return (
    <article className="rounded-2xl border border-border bg-white px-6 py-5">
      <h3 className="font-body text-[1.02rem] font-medium leading-[1.45] tracking-[-0.01em] text-text-primary">
        {publication.title}
      </h3>
      <p className="mt-2 text-[0.93rem] text-text-secondary">
        {publication.authors.map((author, index) => (
          <span key={author.name}>
            {author.isMe ? <strong className="font-semibold text-text-primary">{author.name}</strong> : author.name}
            {index < publication.authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="mt-1 text-[0.92rem] italic text-text-secondary">
        {publication.venue} ({publication.status}) · {publication.year}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-[0.88rem]">
        {detailLink ? (
          <a
            href={detailLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-white px-3 py-1.5 transition hover:border-primary hover:text-primary"
          >
            DOI
          </a>
        ) : null}
        {paperLink ? (
          <a
            href={paperLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-white px-3 py-1.5 transition hover:border-primary hover:text-primary"
          >
            PDF
          </a>
        ) : null}
      </div>
    </article>
  );
}
