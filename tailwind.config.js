/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        customlightgray: "rgba(254, 252, 247, 0.50)",
        customeggwhite: "#fefcf7",
        customdarkgrey: "#2C343E",
        customgrayishblue: "#333D4B",
        bluelagoon: "#0E8784",
      },
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      isolation: {
        isolate: "isolate",
      },
    },
  },
  plugins: [],
};
