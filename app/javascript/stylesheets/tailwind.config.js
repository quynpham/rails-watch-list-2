const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      midnight: '#003049',
      curtain: "#D62828",
      sunnyside: "#ff7849",
      bee: "#FCBF49",
      grayer: "#273444",
      citrus: "#8492a6",
      lessgrey: "#d3dce6",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require('autoprefixer'),
  ],
}
