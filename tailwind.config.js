/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#ea7500",
        "light-orange": "#f7a552",
      },
      fontFamily: {
        forum: ['"Forum"', ...defaultTheme.fontFamily.sans],
        nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans],
        belleza: ['"Belleza"', ...defaultTheme.fontFamily.sans],
        "tiro-tamil": ['"Tiro Tamil"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
