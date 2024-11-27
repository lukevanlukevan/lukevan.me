/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./layouts/**/*.{js,jsx}"],
	theme: {
		extend: {
			height: {
				"screen-90": "90vh",
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
				serif: ["Lora", "serif"],
			},
			colors: {
				primary: "#A7BEAE",
				secondary: "#E7E8D1",
				accent: "#B85042",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

