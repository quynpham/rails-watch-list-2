const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
      "dark-blue": "#003049",
      red: "#D62828",
      orange: "#ff7849",
      yellow: "#FCBF49",
      "gray-dark": "#273444",
      "light-yellow": "#8492a6",
      "gray-light": "#d3dce6",
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
  ],
}
