import { readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import preserveDirectives from "rollup-preserve-directives";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const components_dir = "src/components/";
const files = [
  "src/index.ts",
  ...readdirSync(components_dir)
    .map((component) => {
      const dir = resolve(components_dir, component);
      const index_tsx = resolve(dir, "index.tsx");
      if (statSync(index_tsx).isFile()) {
        return index_tsx;
      }
      return null;
    })
    .filter((path) => path !== null),
];

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
      entry: files.map((file) => {
        return resolve(__dirname, file);
      }),
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
