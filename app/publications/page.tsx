import PublicationItem from "@/components/PublicationItem";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  const sortedPublications = [...publications].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <div className="page-shell">
      <section>
        <h1 className="page-title text-[clamp(2.1rem,4.2vw,3.2rem)] text-text-primary">Publications</h1>
      </section>

      <section className="mt-12 space-y-5">
        {sortedPublications.map((publication) => (
          <PublicationItem key={publication.title} publication={publication} />
        ))}
      </section>
    </div>
  );
}
