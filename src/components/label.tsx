import { type ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-sm font-light text-white/80">{children}</p>
  );
}
