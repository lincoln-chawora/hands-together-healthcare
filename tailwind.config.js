const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#005bd4',
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
      mid: '15px',
      medium: '16px',
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
  prefix: 'u-',
  important: true,
}
