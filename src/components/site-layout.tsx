import { type ReactNode, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import backgroundImg from "../assets/background.webp";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Principles", href: "/principles" },
  { label: "Projects", href: "/projects" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current?.contains(target) ||
        mobileMenuButtonRef.current?.contains(target)
      ) {
        return;
      }
      setIsMobileMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <img
        src={backgroundImg}
        alt=""
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-[58px] pb-[37px] sm:px-[65px] lg:px-[59px] lg:pb-[35px]">
        <header className="relative left-1/2 flex w-screen -translate-x-1/2 items-center justify-between px-[58px] pt-[20px]">
          <a
            href="/"
            className="text-white"
            style={{ fontSize: "var(--text-nav)" }}
          >
            <span className="font-light">Verdandi</span>{" "}
            <span className="font-extrabold">Labs</span>
          </a>
          <nav className="hidden items-center gap-[25px] text-white sm:flex lg:h-[45px] lg:gap-[46px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: "var(--text-nav)" }}
                className="font-extrabold transition-colors hover:text-[#debb47]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            ref={mobileMenuButtonRef}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors hover:text-[#debb47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:hidden"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
          {isMobileMenuOpen && (
            <div
              id="mobile-navigation"
              ref={mobileMenuRef}
              className="absolute inset-x-[58px] top-full z-20 mt-2 max-h-[calc(100dvh-120px)] overflow-y-auto rounded-2xl bg-[#214D3A]/[0.63] backdrop-blur-sm sm:hidden"
            >
              <nav
                aria-label="Mobile"
                className="flex flex-col px-[24px] py-[10px]"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ fontSize: "var(--text-nav)" }}
                    className="py-[10px] font-extrabold text-white transition-colors hover:text-[#debb47]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        <main className="flex flex-1 flex-col">{children}</main>

        <footer className="relative left-1/2 mt-auto w-screen -translate-x-1/2 px-[39px] [--text-nav:11px]">
          <div className="relative flex h-[40px] items-center justify-between rounded-2xl bg-[#214D3A]/[0.63] px-[15px] sm:px-[25px]">
            <div className="relative flex items-center">
              <span
                className="text-white"
                style={{ fontSize: "var(--text-nav)" }}
              >
                <span className="font-light">Verdandi</span>{" "}
                <span className="font-extrabold">Labs</span>
              </span>
              <img
                src={logoImg}
                alt="Verdandi Labs"
                className="absolute left-full top-1/2 ml-[8px] h-[59px] w-[59px] -translate-y-1/2 object-contain lg:h-[121px] lg:w-[121px]"
              />
            </div>
            <div className="flex gap-[25px] text-white lg:gap-[37px]">
              <a
                href="https://github.com/verdandi-labs"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "var(--text-nav)" }}
                className="font-light transition-colors hover:text-[#debb47]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anahi-amerise"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "var(--text-nav)" }}
                className="font-light transition-colors hover:text-[#debb47]"
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
