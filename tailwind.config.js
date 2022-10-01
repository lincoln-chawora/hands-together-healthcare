const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')

// Deleting these colours to suppress warnings about renamed colours.
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

const customColours = {
  primary: '#005bd4',
}
module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    colors: {
      ...customColours,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'red': {
        DEFAULT: colors.red[600]
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1920px',
    },
    fontSize: {
      xsmall: '11px',
      small: '13px',
      medium: '16px',
      default: '18px',
      large: '20px',
      h5: '25px',
      h4: '31px',
      h3: '39px',
      h2: '49px',
      h1: '61px',
      sidekick: '76px',
      hero: '95px',
      heroxl: '130px',
      unset: 'unset',
    },
    extend: {
      height: {
        '75vh': '75vh',
      }
    },
    container: {
      center: true,
      padding: '15px',
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  prefix: 'u-',
  important: true,
}
