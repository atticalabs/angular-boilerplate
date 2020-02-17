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

const input = plugin(({addComponents, theme}) => {
  const input = {
    '.input': {
      color: theme('colors.gray["500"]'),
      fontSize: ".9rem",
      '&.labeled': {
        '.label': {
          borderRadius: '5px 0 0 5px',
          padding: '.5rem',
          backgroundColor: theme('colors.gray["200"]'),
          border: `1px solid ${theme('colors.gray["300"]')}`,
          borderRight: 'none'
        },
        'input': {
          borderRadius: '0 5px 5px 0'
        }
      },
      'input': {
        padding: '.4rem .8rem',
        border: `1px solid ${theme('colors.gray["300"]')}`,
        borderRadius: '5px',
        '&.error': {
          color: theme('colors.red["400"]'),
          border: `2px solid ${theme('colors.red["400"]')}`,
          '&:focus': {
            borderColor: theme('colors.red["400"]')
          },
          '&::placeholder': {
            color: theme('colors.red["300"]')
          }
        },
        '&:focus': {
          outline: 'none',
          borderColor: theme('colors.gray["400"]')
        }
      }
    }
  };
  return addComponents(input);
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

module.exports = [skew, button, input];
