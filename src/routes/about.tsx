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
      {/* The name */}
      <section
        id="name"
        className="scroll-mt-4 rounded-2xl bg-[#F8AFA6]/20 p-6 text-white sm:p-8 lg:px-10 lg:py-[60px]"
      >
        <Label>The name</Label>
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          The future starts <em className="font-light">in the present</em>
        </h2>
        <p className="mt-5 max-w-3xl text-white">
          In Norse mythology, Verdandi is one of the three Norns, associated
          with the present. The name represents a simple idea: the future is
          shaped by what we do today.
        </p>
      </section>

      {/* What we believe */}
      <section className="rounded-2xl bg-[#F8AFA6]/20 p-6 text-white sm:p-8 lg:px-10 lg:py-[60px]">
        <Label>What we believe</Label>
        <div className="grid gap-6 text-lg leading-relaxed font-light md:grid-cols-2">
          <p>
            Like alchemy, building software is a process of transformation. It's
            about seeing potential where others might not, experimenting with
            ideas, and turning them into something useful.
          </p>
          <p>
            We build with intention, curiosity, and the belief that small
            changes can open up new possibilities. We want to create tools that
            make a difference.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
