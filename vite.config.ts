import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import preserveDirectives from "rollup-preserve-directives";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    preserveDirectives(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
