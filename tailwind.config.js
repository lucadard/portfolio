/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ece7e1',
        black: '#1a1818',
        'apple-green': '#88992e'
      },
      fontFamily: {
        default: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
