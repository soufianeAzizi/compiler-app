/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darknav: "#151523",
				lightnav: "#374ecd",
			},
			fontFamily: {
				monomaniac: ["Monomaniac One", "sans-serif"],
				geologica: ["Geologica", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				montserrat: ["Monserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
