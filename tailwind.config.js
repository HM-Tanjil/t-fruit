/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary-color': '#F85559',
      'white': '#ffffff',
      'black': '#121212',
      'black-50': 'rgba(18, 18, 18, 0.8)'
    },
    fontFamily: {
      'lato': ['Lato', "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

