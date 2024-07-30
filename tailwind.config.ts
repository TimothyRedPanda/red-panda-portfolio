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
				footerShadow: "-2px -2px 75px #000",
				headerShadow: "2px 2px 75px #000",
			},
		},
	},
	plugins: [],
};
export default config;
