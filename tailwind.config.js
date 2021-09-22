module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: '#f04393',
        yellow: '#f9c449',
        purple: '#01052d'
      }
    },
    fontFamily: {
      sans: ['sans-serif'],
      featured: ['NexaText-Bold', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
