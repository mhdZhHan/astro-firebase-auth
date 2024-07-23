import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

export default defineConfig({
	output: "hybrid",
	experimental: {
		actions: true,
	},
	integrations: [tailwind()],
})
