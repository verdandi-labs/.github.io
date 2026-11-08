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
    title: [
      { text: "Human", bold: true },
      { text: "-centred", bold: false },
    ],
    d: "Not everyone experiences the world in the same way.\nMy aim is to create apps that adapt to different needs and perspectives.",
  },
  {
    title: [
      { text: "Built with ", bold: false },
      { text: "intention", bold: true },
    ],
    d: (
      <>
        {
          "Building software is about more than technical functionality.\nIt's about creating experiences that feel "
        }
        <strong>thoughtful, welcoming</strong>{" "}
        <span className="font-light">and</span> <strong>supportive</strong>.
      </>
    ),
  },
  {
    title: [
      { text: "Possibility ", bold: true },
      { text: "through action", bold: false },
    ],
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
              key={p.title.map((s) => s.text).join("")}
              className="rounded-2xl bg-[#214D3A]/70 p-[18px] text-white sm:p-[25px] lg:px-[31px] lg:py-[46px]"
            >
              <h3
                className="font-extrabold"
                style={{ fontSize: "calc(var(--text-heading) - 4px)" }}
              >
                {p.title.map((segment) => (
                  <span
                    key={segment.text}
                    className={segment.bold ? undefined : "font-light"}
                  >
                    {segment.text}
                  </span>
                ))}
              </h3>
              <p
                className="mt-[30px] whitespace-pre-line text-white"
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
