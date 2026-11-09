import { createFileRoute } from "@tanstack/react-router";

import { Label } from "../components/label";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Verdandi Labs" },
      {
        name: "description",
        content: "Tools we are building at Verdandi Labs",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout>
      <section
        id="projects"
        className="grid scroll-mt-3 gap-[25px] pt-[39px] sm:gap-[28px] md:grid-cols-2"
      >
        <article className="flex min-h-[197px] flex-col justify-between rounded-2xl bg-[#F8AFA6]/20 p-[18px] text-white backdrop-blur-[5px] backdrop-saturate-[0.7] sm:p-[25px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3
                className="font-extrabold"
                style={{ fontSize: "var(--text-heading)" }}
              >
                CareerBloom
              </h3>
            </div>
            <a
              href="https://careerbloom-e5ne.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#214D3A] px-2 py-[3px] font-extrabold transition-colors hover:bg-[#214D3A]/80"
              style={{ fontSize: "var(--text-label)" }}
            >
              Prototype
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-white" style={{ fontSize: "var(--text-body)" }}>
              Helps you take your career transition seriously without burning
              out in the process
            </p>
          </div>
        </article>
        <div
          className="flex min-h-[197px] items-center justify-center rounded-2xl border border-dashed border-white/40 bg-[#F8AFA6]/20 p-[25px] text-center font-light text-white"
          style={{ fontSize: "var(--text-body)" }}
        >
          Something new is growing
        </div>
      </section>
    </SiteLayout>
  );
}
