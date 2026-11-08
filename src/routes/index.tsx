import { createFileRoute } from "@tanstack/react-router";

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
      <div className="flex flex-1 flex-col justify-center">
        <section className="grid gap-[57px] md:grid-cols-2 lg:gap-[69px] lg:px-[15px]">
          <div className="flex items-center h-[150px] md:h-[300px] rounded-2xl bg-[#F8AFA6]/20 px-[28px] py-[18px] text-left text-white sm:px-[35px] sm:py-[25px] lg:px-[41px] lg:py-[46px]">
            <h1
              className="w-full leading-[1.1] font-light"
              style={{ fontSize: "var(--text-hero)" }}
            >
              <span className="font-extrabold">Creating</span>{" "}
              <span className="font-light">friendly & intentional</span>{" "}
              <span className="font-extrabold">software</span>{" "}
              <span className="font-extrabold">
                for people who think differently
              </span>
            </h1>
          </div>
          <div className="flex items-center h-[150px] md:h-[300px] rounded-2xl bg-[#F8AFA6]/20 px-[28px] py-[18px] text-right text-white sm:px-[35px] sm:py-[25px] lg:px-[41px] lg:py-[46px]">
            <h2
              className="w-full leading-[1.1] font-light"
              style={{ fontSize: "var(--text-hero)" }}
            >
              Interested in the{" "}
              <span className="font-extrabold">possibilities</span> that emerge
              when we question the usual way of doing things
            </h2>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
