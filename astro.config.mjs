import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	experimental: {
		actions: true,
	},
	integrations: [tailwind()],
	adapter: vercel(),
})
