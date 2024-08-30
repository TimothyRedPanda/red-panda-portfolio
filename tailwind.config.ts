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
				questionShadow: "20px 20px 60px #b0b0b0",
			},
			colors: {
				"pastel-yellow": "#FFFBCC",
				"pastel-red": "#FFCCCB",
				"pastel-orange": "#FFDAB9",
				"pastel-gray": "#D3D3D3",
				"pastel-blue": "#ADD8E6",
				"pastel-pink": "#FFB6C1",
			},
		},
	},
	plugins: [require("tailwind-scrollbar"), require("tailwindcss-animated")],
};

export default config;
