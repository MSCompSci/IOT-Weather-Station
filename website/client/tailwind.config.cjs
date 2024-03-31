/** @type {import('tailwindcss').Config}*/
const colors = require("tailwindcss/colors");
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.Yellow,
      stone: colors.stone,
      sky: colors.sky,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      amber: colors.amber,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1872px',
    },
    fontFamily: {
      'tomorrow': ['Tomorrow'],
      'coda': ['Coda']
    },
    extend: {
      colors: {
        primary: {
          50: "#FFF5F2",
          100: "#FFF1EE",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
      },
    },
  },

  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};

module.exports = config;
