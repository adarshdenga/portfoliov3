/** @type {import('tailwindcss').Config} */
require('autoprefixer')
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        dmsans: ['DM Sans', "sans-serif"],
        rubik: ['Rubik Mono One', "sans-serif"],
      },
    },
  },
  plugins: [],
}

