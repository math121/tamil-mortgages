/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#005031",
        "light-green": "#25664e",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
