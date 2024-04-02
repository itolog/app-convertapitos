import react from "@vitejs/plugin-react-swc";

import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { resolve } from "node:path";
import { defineConfig } from "vite";
// @ts-ignore
import eslintPlugin from "vite-plugin-eslint";
// @ts-ignore
import oxlintPlugin from "vite-plugin-oxlint";
import { VitePWA } from "vite-plugin-pwa";
import stylelint from "vite-plugin-stylelint";
import webfontDownload from "vite-plugin-webfont-dl";

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
			"https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;700&display=swap",
		]),
		VitePWA({
			useCredentials: true,
			manifest: {
				display: "standalone",
				theme_color: "#0f172a",
				background_color: "#1e293b",
				scope: "/",
				start_url: "/",
				name: "ConvertApiTos",
				short_name: "CAT",
				icons: [
					{
						src: "/icon-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/icon-256x256.png",
						sizes: "256x256",
						type: "image/png",
					},
					{
						src: "/icon-384x384.png",
						sizes: "384x384",
						type: "image/png",
					},
					{
						src: "/icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
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
			"@ui": resolve(__dirname, "./src/UI"),
			"@types": resolve(__dirname, "./src/types"),
			"@constants": resolve(__dirname, "./src/constants"),
		},
	},
});
