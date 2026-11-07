import { createFileRoute } from "@tanstack/react-router";

import { Label } from "../components/label";
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
      <section
        id="principles"
        className="scroll-mt-3 rounded-2xl bg-[#F8AFA6]/20 p-[18px] text-white sm:p-[25px] lg:px-[31px] lg:py-[46px]"
      >
        <Label>Principles</Label>
        <div className="grid md:grid-cols-3 md:divide-x md:divide-white/20">
          {principles.map((p) => (
            <div
              key={p.t}
              className="border-b border-white/20 py-[18px] first:pt-0 last:border-0 md:border-b-0 md:px-[18px] md:py-0 md:first:pl-0"
            >
              <h3
                className="font-extrabold"
                style={{ fontSize: "var(--text-heading)" }}
              >
                {p.t}
              </h3>
              <p
                className="mt-1.5 text-white"
                style={{ fontSize: "var(--text-body)" }}
              >
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
