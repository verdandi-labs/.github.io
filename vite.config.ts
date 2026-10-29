import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  css: { transformer: "lightningcss" },
  resolve: { tsconfigPaths: true },
  environments: {
    client: {
      build: { outDir: "dist" },
    },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true },
    }),
    react(),
  ],
});
