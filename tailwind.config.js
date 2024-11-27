/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./layouts/**/*.{js,jsx}"],
	theme: {
		extend: {
			height: {
				"screen-90": "90vh",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
