"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

type ProjectsListProps = {
  projects: Project[];
};

type SortOrder = "newest" | "oldest";
type StatusFilter = "all" | "ongoing" | "completed";
type ProjectType = Project["projectType"];

const projectTypeOptions: Array<{ id: ProjectType; label: string }> = [
  { id: "personal", label: "Personal Project" },
  { id: "hospital", label: "Hospital Research" },
  { id: "coursework", label: "Coursework" }
];
const topicOptions = ["Research", "UX Design", "AI", "Social Robot", "XR"] as const;

function periodToSortableValue(period: string) {
  const [start] = period.split("–").map((item) => item.trim());
  const match = start.match(/(\d{4})\.(\d{2})/);
  if (!match) return 0;
  return Number(match[1]) * 100 + Number(match[2]);
}

function getProjectStatus(period: string): StatusFilter {
  return period.includes("Present") ? "ongoing" : "completed";
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<ProjectType[]>([
    "personal",
    "hospital",
    "coursework"
  ]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const visibleProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const statusMatched =
        statusFilter === "all" ? true : getProjectStatus(project.period) === statusFilter;
      const topicMatched =
        selectedTopics.length === 0 ? true : selectedTopics.every((topic) => project.tags.includes(topic));
      const projectTypeMatched = selectedProjectTypes.includes(project.projectType);

      return statusMatched && topicMatched && projectTypeMatched;
    });

    return [...filtered].sort((a, b) => {
      const diff = periodToSortableValue(b.period) - periodToSortableValue(a.period);
      return sortOrder === "newest" ? diff : -diff;
    });
  }, [projects, selectedProjectTypes, selectedTopics, sortOrder, statusFilter]);

  const handleToggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic]
    );
  };

  const handleToggleProjectType = (projectType: ProjectType) => {
    setSelectedProjectTypes((prev) =>
      prev.includes(projectType) ? prev.filter((item) => item !== projectType) : [...prev, projectType]
    );
  };

  return (
    <div>
      <div className="mb-8 rounded-2xl border border-border/80 bg-white p-4 shadow-[0_10px_24px_-26px_rgba(20,26,68,0.6)]">
        <p className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-primary">
          Filters
        </p>

        <div className="mb-4">
          <p className="mb-2 text-[0.82rem] font-medium text-text-secondary">Project Type</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {projectTypeOptions.map((option) => (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-[0.78rem] transition ${
                  selectedProjectTypes.includes(option.id)
                    ? "border-primary/45 bg-primary-subtle text-primary"
                    : "border-border bg-white text-text-secondary hover:border-primary/30 hover:text-primary"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedProjectTypes.includes(option.id)}
                  onChange={() => handleToggleProjectType(option.id)}
                  className="h-4 w-4 accent-[var(--color-primary)]"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[0.82rem] font-medium text-text-secondary">Topic</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedTopics([])}
              className={`rounded-md px-2.5 py-1 text-[0.76rem] font-medium transition ${
                selectedTopics.length === 0
                  ? "border border-primary bg-primary text-white"
                  : "border border-primary/40 bg-white text-primary hover:bg-primary-subtle"
              }`}
            >
              All topics
            </button>
            {topicOptions.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => handleToggleTopic(topic)}
                className={`rounded-md px-2.5 py-1 text-[0.76rem] font-medium transition ${
                  selectedTopics.includes(topic)
                    ? "border border-primary bg-primary text-white"
                    : "border border-primary/40 bg-white text-primary hover:bg-primary-subtle"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
