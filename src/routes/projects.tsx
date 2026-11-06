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
        className="grid scroll-mt-4 gap-3 sm:gap-4 md:grid-cols-2"
      >
        <article className="flex min-h-64 flex-col justify-between rounded-2xl bg-card p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Label>What we're building</Label>
              <h3 className="text-3xl font-bold">CareerBloom</h3>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
              Prototype
            </span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            Helps you take your career transition seriously without burning out
            in the process.
          </p>
        </article>
        <div className="glass flex min-h-64 items-center justify-center rounded-2xl border-dashed p-8 text-center text-lg font-light">
          Something new is growing 🌱
        </div>
      </section>
    </SiteLayout>
  );
}
