import { type ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-5 font-light text-white/80"
      style={{ fontSize: "var(--text-label)" }}
    >
      {children}
    </p>
  );
}
