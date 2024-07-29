import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				footerShadow: "-8px -8px 60px #c7c7c7",
				headerShadow: "8px 8px 60px #c7c7c7",
			},
		},
	},
	plugins: [],
};
export default config;
