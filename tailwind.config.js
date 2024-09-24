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
        "dark-green": "#005031",
        "light-green": "#25664e",
        "lightest-green": "#d2e2db",
      },
      fontFamily: {
        forum: ['"Forum"', ...defaultTheme.fontFamily.sans],
        nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans],
        belleza: ['"Belleza"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
