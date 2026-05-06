export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="max-w-[760px]">
        <h1 className="page-title text-[clamp(2.1rem,4.2vw,3.2rem)] text-text-primary">Contact</h1>
        <p className="mt-7 text-[1.05rem] leading-[1.85] text-text-secondary">
          I&apos;m always open to discussing research, collaboration, or just a good conversation about design
          and AI. Don&apos;t hesitate to reach out.
        </p>

        <div className="mt-12 space-y-3">
          <p className="text-[0.84rem] uppercase tracking-[0.08em] text-text-secondary">Email</p>
          <a href="mailto:yerimisyerim@ewha.ac.kr" className="text-[1.06rem]">
            yerimisyerim@ewha.ac.kr
          </a>
        </div>

        <div className="mt-10 space-y-3">
          <p className="text-[0.84rem] uppercase tracking-[0.08em] text-text-secondary">LinkedIn</p>
          <a href="https://www.linkedin.com/in/yayrim/" target="_blank" rel="noreferrer" className="text-[1.06rem]">
            linkedin.com/in/yayrim
          </a>
        </div>

        <div className="mt-10 space-y-3">
          <p className="text-[0.84rem] uppercase tracking-[0.08em] text-text-secondary">GitHub</p>
          <a href="https://github.com/yeriming" target="_blank" rel="noreferrer" className="text-[1.06rem]">
            github.com/yeriming
          </a>
        </div>
      </section>
    </div>
  );
}
