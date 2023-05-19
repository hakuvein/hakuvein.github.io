/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
        fontFamily: {
            josefin: ["Josefin-Sans", ...defaultTheme.fontFamily.sans],
            play: ["Play", ...defaultTheme.fontFamily.sans],
            jakarta: ["Plus-Jakarta-Sans", ...defaultTheme.fontFamily.sans],
        }
    },
  },
  plugins: [],
}
