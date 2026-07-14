// vite.config.ts

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		imagetools(),
		tailwindcss(),
		tanstackStart({
			srcDirectory: "src", // This is the default
			router: {
				// Specifies the directory TanStack Router uses for your routes.
				routesDirectory: "app", // Defaults to "routes", relative to srcDirectory
			},
		}),
		viteReact(),
		nitro({
			rollupConfig: {
				treeshake: {
					moduleSideEffects: (id) => id.includes("react-social-icons"),
				},
			},
		}),
	],
});
