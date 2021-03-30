module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex:{
        '-10': '-10'
      },
      colors:{
        'purple' : '#7868E6',
        'gray' : '#C4C4C4',
        'light-gray' : '#F1F1F1',
        'semi-gray': '#B8B5FF'
      },
      spacing:{
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}