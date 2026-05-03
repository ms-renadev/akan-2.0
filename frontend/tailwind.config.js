/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        imperial: '#4B0082',
        royal: '#7851A9',
        lavender: '#F3E8FF',
        'violet-mid': '#9B72CF',
        'violet-light': '#C4A8E8',
        'violet-dark': '#2D004F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
