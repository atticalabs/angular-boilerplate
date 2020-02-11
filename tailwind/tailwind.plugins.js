const plugin = require('tailwindcss/plugin');
const lightenDarkenColor = require('./ligthenDarkenColor');

const skew = plugin(({addUtilities}) => {
  const newUtils = {
    '.skew-10deg': {
      transform: 'skewY(-10deg)',
      '&-reverse': {
        transform: 'skewY(10deg)',
      }
    },
    '.skew-5deg': {
      transform: 'skewY(-5deg)',
      '&-reverse': {
        transform: 'skewY(5deg)',
      }
    },
  };
  return addUtilities(newUtils);
});

const button = plugin(({addComponents}) => {
  const buttons = {
    '.button': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-block'
    },
    '.button-blue': {
      backgroundColor: '#3490dc',
      color: 'white',
      '&:hover': {
        backgroundColor: lightenDarkenColor('#3490dc', -20)
      }
    },

  };
  return addComponents(buttons);
});

module.exports = [skew, button];
