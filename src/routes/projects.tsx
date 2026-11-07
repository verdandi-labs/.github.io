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
        className="grid scroll-mt-4 gap-8 pt-[50px] sm:gap-9 md:grid-cols-2"
      >
        <article className="flex min-h-64 flex-col justify-between rounded-2xl bg-[#F8AFA6]/20 p-6 text-white backdrop-blur-[5px] backdrop-saturate-[0.7] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-3xl font-extrabold">CareerBloom</h3>
            </div>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold">
              Prototype
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[21px] text-white">
              Helps you take your career transition seriously without burning out
              in the process
            </p>
          </div>
        </article>
        <div className="flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-white/40 bg-[#F8AFA6]/20 p-8 text-center text-[21px] font-light text-white">
          Something new is growing
        </div>
      </section>
    </SiteLayout>
  );
}
