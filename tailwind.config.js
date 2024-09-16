/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303344", // Dark bluish gray
        secondary: "#ca9434", // warm gold
        coral: "#ff6f61", // Coral for strong accents
        cyan: "#00bcd4", // Cyan for strong accents
        lightgray: "#f4f4f9", // Light Gray for text borders
        lightblue: "#b0b3c5", // Muted Light Gray-Blue for hover
        bronze: "#8f7c56", // works with warm gold
        purple: "#574b90", // highlights
      },
      fontFamily: {
        aprilla: ['"Aprilla"', 'sans-serif'],
        barlowCondensed: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
    // colors: {}, // override the default colors
  },
  plugins: [],
};
