/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImages: {
      1: 'url("./src/image/top-right.png")',
      2: 'url("./src/image/bottom-left.png")',
    },
    extend: {
      fontFamily: {
        bipplo: ["bipplo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
