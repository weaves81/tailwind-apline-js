module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['sans-serif'],
      featured: ['univia-pro', 'sans-serif']
    },
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        50: '#e6f7fc',
        100: '#ccf0f9',
        200: '#99e1f4',
        300: '#4dcaeb',
        400: '#1abbe6',
        500: '#00b3e3',
        600: '#00a1cc',
        700: '#008fb6'
      },
      gray: {
        50: '#f3f4f6',
        100: '#f3f4f6',
        200: '#d0d5df',
        300: '#d0d5df',
        400: '#d0d5df',
        500: '#4e565f',
        600: '#4e565f',
        700: '#0f1520',
        800: '#0f1520',
        900: '#0b0e14'
      },
      green: {
        500: '#0cbf65'
      },
      yellow: '#efaf11',
      orange: '#e5541a',
      red: {
        500: '#c62828'
      },
      river: {
        300: '#00cfff',
        400: '#05c0ee',
        500: '#00b3e3',
        600: '#0ea3cd',
        700: '#1394bc'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
