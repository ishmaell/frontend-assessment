/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        'mono-black': '#101010',
        'mono-border': '#E4E4E4',
        'mono-blue': '#182CD1',
        'mono-purple': '#5E6CDF'
      }
    },
  },
  plugins: [],
}
