/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { fontFamily } = require('tailwindcss/defaultTheme')
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10E063',
        secondary: '#1A73E8',
        black: '#08090B',
        'dark-blue': '#041428'
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
