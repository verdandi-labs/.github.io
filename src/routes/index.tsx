import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdandi Labs — Tools with a purpose" },
      {
        name: "description",
        content:
          "An independent software studio creating friendly, intentional software for people who think differently.",
      },
      { property: "og:title", content: "Verdandi Labs — Tools with a purpose" },
      {
        property: "og:description",
        content:
          "Friendly & intentional software for people who think differently.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
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

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 text-sm font-medium text-muted-foreground">{children}</p>
);

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden
  >
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

function Index() {
  return (
    <div className="relative min-h-screen">
      <img
        src="/background.jpg"
        alt=""
        width={1920}
        height={1280}
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="fixed inset-0 -z-10 bg-[oklch(0.96_0.025_75_/_0.7)]" />

      <div className="mx-auto max-w-6xl space-y-3 p-3 sm:space-y-4 sm:p-4">
        <header className="flex items-center justify-between rounded-2xl bg-card px-5 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3 text-lg">
            <img
              src="/logo.png"
              alt="Verdandi Labs logo"
              className="h-9 w-9 object-contain"
            />
            <span>
              <em className="font-light">Verdandi</em>{" "}
              <strong className="font-semibold">Labs</strong>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm sm:flex">
            <a href="#name" className="hover:opacity-60">
              About
            </a>
            <a href="#principles" className="hover:opacity-60">
              Principles
            </a>
            <a href="#projects" className="hover:opacity-60">
              Projects
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section
          id="top"
          className="grid gap-3 sm:gap-4 lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="glass flex flex-col justify-end rounded-2xl p-6 sm:p-10">
            <img
              src="/logo.png"
              alt="Verdandi Labs logo"
              className="mb-6 h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              Tools with a purpose
            </p>
            <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
              Creating <em className="font-normal">friendly & intentional</em>{" "}
              software for people who think differently 🌿
            </h1>
          </div>
          <a
            href="#projects"
            className="group flex items-end justify-between rounded-2xl bg-secondary p-6 transition hover:bg-accent"
          >
            <span className="text-xl font-semibold">Explore our projects</span>
            <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
              <Arrow />
            </span>
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

        {/* The name */}
        <section
          id="name"
          className="scroll-mt-4 rounded-2xl bg-card p-6 sm:p-10"
        >
          <Label>The name</Label>
          <h2 className="text-3xl font-bold sm:text-4xl">
            The future starts <em className="font-normal">in the present</em>
          </h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            In Norse mythology, Verdandi is one of the three Norns, associated
            with the present. The name represents a simple idea: the future is
            shaped by what we do today.
          </p>
        </section>

        {/* What we believe */}
        <section className="glass rounded-2xl p-6 sm:p-10">
          <Label>What we believe</Label>
          <div className="grid gap-6 text-lg leading-relaxed font-light md:grid-cols-2">
            <p>
              Like alchemy, building software is a process of transformation.
              It's about seeing potential where others might not, experimenting
              with ideas, and turning them into something useful.
            </p>
            <p>
              We build with intention, curiosity, and the belief that small
              changes can open up new possibilities. We want to create tools
              that make a difference.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section
          id="principles"
          className="scroll-mt-4 rounded-2xl bg-card p-6 sm:p-10"
        >
          <Label>Principles</Label>
          <div className="grid md:grid-cols-3 md:divide-x">
            {principles.map((p) => (
              <div
                key={p.t}
                className="border-b py-6 first:pt-0 last:border-0 md:border-b-0 md:px-6 md:py-0 md:first:pl-0"
              >
                <h3 className="text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
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
              Helps you take your career transition seriously without burning
              out in the process.
            </p>
          </article>
          <div className="glass flex min-h-64 items-center justify-center rounded-2xl border-dashed p-8 text-center text-lg font-light">
            Something new is growing 🌱
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-card px-6 py-6 text-sm sm:flex-row">
          <span>
            <em className="font-light">Verdandi</em> <strong>Labs</strong>
          </span>
          <div className="flex gap-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
