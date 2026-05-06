"use client";

import { useState } from "react";
import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const newsItems = [
    {
      date: "2026.02",
      text: "Full-time Research Associate, Dept. of Pediatric Emergency Medicine, Samsung Medical Center (Advisor: Prof. Meong Hi Son)"
    },
    {
      date: "2025.10",
      text: "Joined Samsung Medical Center as Research Intern, Dept. of Pediatric Emergency Medicine"
    },
    {
      date: "2025.07",
      text: "Initiated SophyBARA project in collaboration with Prof. Martin Puchner, Dept. of English and Comparative Literature, Harvard University"
    },
    {
      date: "2025.04",
      text: "Presented at ACM CHI 2025 Student Design Competition · Finalist · Yokohama, Japan"
    },
    {
      date: "2025.03",
      text: "Exchange Student, Freie Universitat Berlin (Philosophy) · Credit exchange at TU Berlin (HCI)"
    },
    {
      date: "2024.12",
      text: "Award: Minister of Science and ICT Award, XR Device Content Makeathon"
    },
    {
      date: "2024.08",
      text: "Became Research Lead, XREAL (Seoul National University-based XR/AI Society)"
    },
    {
      date: "2022.12",
      text: "Award: Game Changer Award, Ewha Social Economy Startup Academy"
    }
  ];
  const [showAllNews, setShowAllNews] = useState(false);
  const visibleNews = showAllNews ? newsItems : newsItems.slice(0, 4);
  // Replace the second path with your newly added photo in public/images.
  const profileImages = ["/images/profile2.jpg", "/images/profile.JPG"];
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);

  return (
    <div className="page-shell">
      <section
        id="about"
        className="section-divider scroll-mt-28 grid gap-10 md:grid-cols-[320px_minmax(0,1fr)] md:gap-16"
      >
        <aside className="order-1 flex items-start justify-start p-1 md:justify-start md:p-2">
          <button
            type="button"
            onClick={() => setActiveProfileIndex((prev) => (prev === 0 ? 1 : 0))}
            className="group relative aspect-[3/4] w-56 sm:w-64 md:w-72"
            aria-label="Toggle profile photo"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_10px_20px_-18px_rgba(20,26,68,0.45)]" />
            {profileImages.map((src, index) => {
              const isFront = index === activeProfileIndex;
              return (
                <div
                  key={src}
                  className={`absolute inset-0 overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_14px_24px_-20px_rgba(20,26,68,0.55)] transition-all duration-300 ease-out ${
                    isFront
                      ? "z-10 translate-x-0 translate-y-0 scale-100"
                      : "z-0 translate-x-3 translate-y-3 scale-[0.985]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={index === 0 ? "Yerim Lee profile photo" : "Yerim Lee alternate profile photo"}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              );
            })}
          </button>
        </aside>

        <div className="order-2 flex flex-col justify-center">
          <div className="flex flex-col font-heading text-[clamp(2.2rem,5.3vw,3.6rem)] font-semibold leading-[1.14] tracking-[-0.01em] text-primary">
            <p>Hi, I am Yerim Lee.</p>
            <p>I design AI for a more</p>
            <p>empathetic world.</p>
          </div> 
          <div className="mt-7 w-full space-y-4 text-[1.08rem] leading-[1.85] text-text-secondary">
            <p>
            I am a researcher and designer interested in how people experience and make sense of AI systems. My work focuses on designing agentic AI and tools for AI-generated content, with an emphasis on shaping meaningful interactions between humans and AI. I approach AI not only as a technical system, but as an experiential medium that influences how people think, feel, and act. With a background in content convergence, I work across design research, prototyping, and UX design to develop AI systems that are both functional and experientially grounded.
            </p>
            
          </div>
        </div>
      </section>

      <section className="section-divider scroll-mt-28">
        <h2 className="text-[2rem] font-semibold tracking-[-0.025em]">Recent News</h2>
        <div className="mt-8 space-y-3">
          {visibleNews.map((item) => (
            <article key={`${item.date}-${item.text}`} className="grid gap-2 md:grid-cols-[150px_minmax(0,1fr)] md:gap-6">
              <p className="text-[0.95rem] font-semibold text-text-primary">{item.date}</p>
              <p className="border-l border-border pl-5 text-[0.98rem] leading-7 text-text-primary/90">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        {newsItems.length > 4 ? (
          <button
            type="button"
            onClick={() => setShowAllNews((prev) => !prev)}
            className="mt-5 rounded-full border border-border px-4 py-1.5 text-[0.86rem] text-text-secondary transition hover:border-primary hover:text-primary"
          >
            {showAllNews ? "Show less" : "Show more"}
          </button>
        ) : null}
      </section>

      <section id="education" className="section-divider scroll-mt-28">
        <h2 className="text-[2rem] font-semibold tracking-[-0.025em]">Education</h2>
        <div className="mt-8 space-y-3">
          <article className="grid gap-2 md:grid-cols-[170px_minmax(0,1fr)] md:gap-6">
            <p className="text-[0.95rem] font-semibold text-text-primary">2025.03 – 2025.08</p>
            <div className="border-l border-border pl-5">
              <p className="text-[1.02rem] font-semibold text-text-primary">Freie Universitat Berlin (Exchange)</p>
              <p className="mt-1 text-[0.95rem] leading-6 text-text-primary/90">
                Philosophy coursework at Freie Universitat Berlin and HCI-related credit exchange at TU Berlin.
              </p>
            </div>
          </article>
          <article className="grid gap-2 md:grid-cols-[170px_minmax(0,1fr)] md:gap-6">
            <p className="text-[0.95rem] font-semibold text-text-primary">2022.03 – 2027.02</p>
            <div className="border-l border-border pl-5">
              <p className="text-[1.02rem] font-semibold text-text-primary">
                Ewha Womans University, B.S. in Content Convergence
              </p>
              <p className="mt-1 text-[0.95rem] leading-6 text-text-primary/90">
                Double Major in Entrepreneurship · Minor in Psychology and Philosophy
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="gallery" className="section-divider scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[2rem] font-semibold tracking-[-0.025em]">Selected Work Preview</h2>
            <p className="mt-3 max-w-3xl text-[0.98rem] text-text-secondary">
              Click each visual to enter the project page.
            </p>
          </div>
          <Link href="/projects" className="text-[0.94rem] font-medium">
            View all projects →
          </Link>
        </div>
        <div className="mt-8">
          <ProjectGallery />
        </div>
      </section>
    </div>
  );
}
