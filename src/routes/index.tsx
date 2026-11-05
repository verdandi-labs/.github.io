import { createFileRoute } from "@tanstack/react-router";

import { Label } from "../components/label";
import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdandi Labs — Tools with a purpose" },
      {
        name: "description",
        content:
          "An independent software studio creating friendly, intentional software for people who think differently",
      },
      { property: "og:title", content: "Verdandi Labs — Tools with a purpose" },
      {
        property: "og:description",
        content:
          "Friendly & intentional software for people who think differently",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        id="top"
        className="grid gap-3 sm:gap-4 lg:grid-cols-[1.4fr_1fr]"
      >
        <div className="glass flex flex-col justify-end rounded-2xl p-5 sm:p-6">
          <h1 className="text-[20px] leading-[1.1] font-extrabold sm:text-[26px] lg:text-[32px]">
            Creating <em className="font-normal">friendly & intentional</em>{" "}
            software for people who think differently
          </h1>
        </div>
        <a
          href="#projects"
          className="group flex items-end justify-between rounded-2xl bg-secondary p-5 transition hover:bg-accent sm:p-6"
        >
          <span className="text-lg font-semibold">Explore the creations</span>
          <img
            src="/logo.png"
            alt=""
            className="-mb-7 h-20 w-20 object-contain transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </section>

      <section className="glass rounded-2xl p-6 text-lg leading-relaxed sm:p-10 sm:text-xl">
        <p className="font-semibold">
          We believe technology should adapt to people, not the other way
          around.
        </p>
        <p className="mt-3 max-w-3xl font-light">
          Verdandi Labs is an independent software studio creating thoughtful,
          approachable tools for people whose needs, ideas, and ways of
          navigating the world don't always fit the mainstream.
        </p>
      </section>
    </SiteLayout>
  );
}
