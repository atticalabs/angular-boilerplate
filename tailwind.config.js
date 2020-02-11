const plugins = require('./tailwind/tailwind.plugins');

module.exports = {
  theme: {
    screens: {
      sm: '680px',
      md: '960px',
      lg: '1280px',
      xl: '1600px'
    },
    extend: {
      colors: {
        manzana: '#4d9e2f',
        pera: '#fdf987',
        'dark-blue': '#2a4d95',
        'error': '#ff3845',
      }
    },
  },
  variants: {},
  plugins: plugins,
};
