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
        white: '#efefef',
        black: '#222222'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        'ibm-plex-sans': ['var(--font-ibm-plex-sans)']
      }
    },
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      fsm: { paintOrder: 'fill stroke markers' },
      fms: { paintOrder: 'fill markers stroke' },
      sfm: { paintOrder: 'stroke fill markers' },
      smf: { paintOrder: 'stroke markers fill' },
      mfs: { paintOrder: 'markers fill stroke' },
      msf: { paintOrder: 'markers stroke fill' }
    }
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')() // no options to configure
  ]
}
