import { type ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <img
        src="/background.webp"
        alt=""
        width={1920}
        height={1280}
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-6xl space-y-3 p-3 sm:space-y-4 sm:p-4">
        <header className="flex items-center justify-between rounded-2xl bg-card px-5 py-4 sm:px-6">
          <a href="/" className="flex items-center gap-3 text-lg">
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
          <p className="hidden text-xs font-light text-muted-foreground sm:block">
            Tools with a purpose
          </p>
          <nav className="hidden gap-8 text-sm sm:flex">
            <a href="/" className="hover:opacity-60">
              Home
            </a>
            <a href="/about" className="hover:opacity-60">
              About
            </a>
            <a href="/principles" className="hover:opacity-60">
              Principles
            </a>
            <a href="/projects" className="hover:opacity-60">
              Projects
            </a>
          </nav>
        </header>

        {children}

        <footer className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-accent px-6 py-6 text-sm sm:flex-row">
          <span>
            <em className="font-light">Verdandi</em> <strong>Labs</strong>
          </span>
          <div className="flex gap-10">
            <a
              href="https://github.com/verdandi-labs"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anahi-amerise"
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
