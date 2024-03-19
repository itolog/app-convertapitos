import react from "@vitejs/plugin-react-swc";

import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { resolve } from "node:path";
import { defineConfig } from "vite";
// @ts-ignore
import eslintPlugin from "vite-plugin-eslint";
// @ts-ignore
import oxlintPlugin from "vite-plugin-oxlint";
import stylelint from "vite-plugin-stylelint";
import webfontDownload from 'vite-plugin-webfont-dl';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    oxlintPlugin({
      path: "src",
    }),
    eslintPlugin(),
    stylelint({
      fix: true,
      lintInWorker: true,
      cache: false,
    }),
    TanStackRouterVite(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;700&display=swap'
    ]),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@store": resolve(__dirname, "./src/store"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@router": resolve(__dirname, "./src/router"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@ui": resolve(__dirname, "./src/ui"),
      "@types": resolve(__dirname, "./src/types"),
      "@constants": resolve(__dirname, "./src/constants"),
    },
  },
});
