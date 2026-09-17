import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(root, "src/android-app"),
  base: "./",
  plugins: [tailwindcss(), viteReact()],
  resolve: {
    alias: [
      {
        find: "@/lib/qatar/lookup.functions",
        replacement: path.join(root, "src/android-app/lookup.functions.ts"),
      },
      { find: "@", replacement: path.join(root, "src") },
    ],
  },
  publicDir: path.join(root, "src/android-app/public"),
  build: {
    outDir: path.join(root, "android/app/src/main/assets/public"),
    emptyOutDir: true,
    sourcemap: false,
    assetsDir: "assets",
    cssMinify: true,
  },
});
