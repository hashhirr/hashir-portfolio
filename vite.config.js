import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ ssrBuild }) => ({
  plugins: [react()],
  base: "/hashir-portfolio/",
  build: {
    target: "es2020",
    cssMinify: true,
    rollupOptions: {
      // framer-motion ships "use client" directives for RSC; irrelevant in a Vite SPA.
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      },
      output: ssrBuild
        ? {}
        : {
            // Long-lived vendor chunks: content edits won't bust the cached libraries.
            manualChunks: {
              react: ["react", "react-dom"],
              motion: ["framer-motion"],
            },
          },
    },
  },
}));
