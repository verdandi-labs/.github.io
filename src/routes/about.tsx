import { createFileRoute } from "@tanstack/react-router";

import { Label } from "../components/label";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Verdandi Labs" },
      {
        name: "description",
        content: "The name, the belief, and the idea behind Verdandi Labs",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <div className="flex flex-1 flex-col justify-center">
        <div className="grid gap-[57px] md:grid-cols-2 lg:gap-[69px] lg:px-[15px]">
          {/* The name */}
          <section
            id="name"
            className="scroll-mt-3 rounded-2xl bg-[#214D3A]/70 p-[18px] text-white sm:p-[25px] lg:px-[31px] lg:py-[46px]"
          >
            <Label>The name</Label>
            <h2
              className="font-extrabold"
              style={{ fontSize: "var(--text-heading)" }}
            >
              The future starts <em className="font-light">in the present</em>
            </h2>
            <p
              className="mt-4 max-w-3xl text-white"
              style={{ fontSize: "calc(var(--text-body) + 2px)" }}
            >
              In Norse mythology, Verdandi is one of the three Norns, associated
              with the present. The name represents a simple idea: the future is
              shaped by what we do today.
            </p>
          </section>

          {/* What we believe */}
          <section className="rounded-2xl bg-[#214D3A]/70 p-[18px] text-white sm:p-[25px] lg:px-[31px] lg:py-[46px]">
            <Label>What we believe</Label>
            <div
              className="grid gap-[18px] leading-relaxed font-light md:grid-cols-2"
              style={{ fontSize: "var(--text-body)" }}
            >
              <p>
                Like alchemy, building software is a process of transformation.
                It's about seeing potential where others might not,
                experimenting with ideas, and turning them into something
                useful.
              </p>
              <p>
                We build with intention, curiosity, and the belief that small
                changes can open up new possibilities. We want to create tools
                that make a difference.
              </p>
            </div>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
