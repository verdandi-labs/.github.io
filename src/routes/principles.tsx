import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "../components/site-layout";

export const Route = createFileRoute("/principles")({
  head: () => ({
    meta: [
      { title: "Principles | Verdandi Labs" },
      {
        name: "description",
        content: "The principles behind everything we build at Verdandi Labs",
      },
    ],
  }),
  component: Principles,
});

const principles = [
  {
    t: "Human-centred",
    d: "We support people by being mindful of their needs and the many ways they navigate the world.",
  },
  {
    t: "Built with intention",
    d: "Every decision should serve a purpose — useful features, thoughtful design, and simplicity where it matters.",
  },
  {
    t: "Possibility through action",
    d: "Better solutions don't appear on their own; we experiment, learn, and build, one step at a time.",
  },
];

function Principles() {
  return (
    <SiteLayout>
      <div className="flex flex-1 flex-col justify-center">
        <div
          id="principles"
          className="grid scroll-mt-3 gap-[20px] md:grid-cols-3 lg:px-[15px]"
        >
          {principles.map((p) => (
            <section
              key={p.t}
              className="rounded-2xl bg-[#214D3A]/70 p-[18px] text-white sm:p-[25px] lg:px-[31px] lg:py-[46px]"
            >
              <h3
                className="font-extrabold"
                style={{ fontSize: "calc(var(--text-heading) - 4px)" }}
              >
                {p.t}
              </h3>
              <p
                className="mt-1.5 text-white"
                style={{ fontSize: "var(--text-body)" }}
              >
                {p.d}
              </p>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
