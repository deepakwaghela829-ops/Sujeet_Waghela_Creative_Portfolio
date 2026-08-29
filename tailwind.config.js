/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
      screens: {
        'mobile': { max: '809.98px' },
        'md-tablet': { min: '810px', max: '1199.98px' },
      },
    },
  },
  plugins: [],
}
