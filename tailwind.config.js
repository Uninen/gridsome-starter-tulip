module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Libre Baskerville', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        maintitle: ['Great Vibes', 'cursive'],
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
}
