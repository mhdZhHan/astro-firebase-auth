/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"base-100": "#262626",
				"base-200": "#2e2e2e",
				primary: "#d400ff",
			},
		},
	},
	plugins: [],
}
