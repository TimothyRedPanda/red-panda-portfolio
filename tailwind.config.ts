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
				footerShadow: " -9px -9px 18px #f0f0f0",
				headerShadow: "9px 9px 18px #f0f0f0",
				questionShadow: "20px 20px 60px #b0b0b0",
			},
		},
	},
	plugins: [],
};
export default config;
