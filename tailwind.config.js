/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007C91', // Deep Teal Blue
        secondary: '#C0C0C0', // Silver Gray
        accent: '#D4AF37', // Royal Gold
      }
    },
  },
  plugins: [],
}

