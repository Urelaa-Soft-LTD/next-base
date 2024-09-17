/** @type {import('tailwindcss').Config} */
const { colors } = require("./app/_shared/utils/theme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			// padding: {
			// 	DEFAULT: "1rem",
			// },
			screens: {
				"3xl": "1462px",
			},
		},
		extend: {
			fontFamily: {
				figtree: ["var(--font-figtree)"],
			},
			colors: colors,
			screens: {
				"3xs": "352px",
				"2xs": "384px",
				xs: "448px",
				sm: "576px",
				"3xl": "1920px",
			},
			backgroundImage: {
				"half-ellipse-custom-gradient":
					"radial-gradient(48.76% 35.47% at 50% 50%, #6924FF 0%, rgba(17, 11, 31, 0.00) 100%)",
				"top-to-bottom-custom-gradient":
					"linear-gradient(180deg, #110B1F 0.02%, rgba(17, 11, 31, 0.00) 55.93%, #110B1F 99.98%)",
				"glass-shine-fill-8":
					"linear-gradient(295deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.02) 100%)",
				"glass-shine-fill-8-active":
					"linear-gradient(298deg, rgba(255, 255, 255, 0.02) -11.52%, rgba(255, 255, 255, 0.08) 35.75%, rgba(255, 255, 255, 0.02) 83.85%)",
				"card-gradient":
					"linear-gradient(128deg, #D9D9D9 1.13%, rgba(217, 217, 217, 0.00) 103.31%)",
				"button-gradient":
					"linear-gradient(96deg, #88C004 2.4%, #CFFD64 50.11%, #83BB00 97.82%)",
			},
		},
	},
	plugins: [],
};
