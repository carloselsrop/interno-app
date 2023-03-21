/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': "#CDA274",
        'primary-2': "#292F36",
        'primary-3': "#F4F0EC",
      },
      fontFamily: {
        'heading': ['DM Serif Display', 'serif'],
        'body': ['Jost', 'sans-serif']
      }
    },
  },
  plugins: [],
}