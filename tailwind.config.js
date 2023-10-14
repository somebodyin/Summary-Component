/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrayBlue: "#303b5a",
      },
      backgroundImage: {
        'customGradient': 'linear-gradient(to bottom, #7857FF, #2E2BE9)'
      }
    },
  },
  plugins: [],
}

