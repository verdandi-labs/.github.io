import { type ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-sm font-medium text-muted-foreground">{children}</p>
  );
}
