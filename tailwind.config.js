/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,js,jsx}", 
  ],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#0A8DD3',
				secondary: "#080808",
				outlineColor: "#1F2123"
			}
		},
	},
	plugins: [],
}

