/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#5E223E',
        'secondary': '#F4D0DC',
        'mint': '#BEEFDA',
      },
    },
  },
  plugins: [],
}