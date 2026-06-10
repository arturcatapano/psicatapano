/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'psi-bg': '#faf6ef',
        'psi-primary': '#c98282',
        'psi-btn': '#c98282',
        'psi-gold': '#e8c97a',
        'psi-peach': '#f5c0b3',
        'psi-dark': '#2d2d2d',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        signature: ['"Photograph Signature"', 'cursive'],
      },
    },
  },
  plugins: [],
}