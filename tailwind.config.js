/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom color
        secondary: '#9333EA', // Custom color
        // Add more colors as needed
      },
    },
    // Alternatively, you can override the default colors
    colors: {
      primary: '#9333EA',
      secondary: '#1D4ED8',
      // Override more colors as needed
    },
  },
  plugins: [],
}

