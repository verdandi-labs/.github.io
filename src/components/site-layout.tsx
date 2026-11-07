import { type ReactNode } from "react";

import backgroundImg from "../assets/background.webp";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Principles", href: "/principles" },
  { label: "Projects", href: "/projects" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <img
        src={backgroundImg}
        alt=""
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 pb-12 sm:px-8 lg:px-[25px] lg:pb-[45px]">
        <header className="relative left-1/2 flex w-screen -translate-x-1/2 items-center justify-between px-[75px] pt-[2px] lg:pt-[32px]">
          <a href="/" className="text-2xl text-white lg:text-[28px]">
            <span className="font-light">Verdandi</span>{" "}
            <span className="font-extrabold">Labs</span>
          </a>
          <nav className="hidden items-center gap-8 text-white sm:flex lg:h-[59px] lg:gap-[60px] lg:text-[21px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-extrabold hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>

        <footer className="relative left-1/2 mt-auto w-screen -translate-x-1/2 px-[50px]">
          <div className="relative flex h-[59px] items-center justify-between rounded-2xl bg-[#214D3A]/[0.63] px-5 sm:px-8">
            <div className="relative flex items-center">
              <span className="text-lg text-white lg:text-[19px]">
                <span className="font-light">Verdandi</span>{" "}
                <span className="font-extrabold">Labs</span>
              </span>
              <img
                src={logoImg}
                alt="Verdandi Labs"
                className="absolute left-full top-1/2 -mt-[20px] ml-[10px] h-24 w-24 -translate-y-1/2 object-contain lg:h-[177px] lg:w-[177px]"
              />
            </div>
            <div className="flex gap-8 text-white lg:gap-12 lg:text-[19px]">
              <a
                href="https://github.com/verdandi-labs"
                target="_blank"
                rel="noreferrer"
                className="font-light hover:opacity-60"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anahi-amerise"
                target="_blank"
                rel="noreferrer"
                className="font-light hover:opacity-60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
