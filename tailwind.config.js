// @ts-check
const colors = require("tailwindcss/colors")

/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        accent: colors.yellow["400"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")({
      className: "markdown",
    }),
    //
  ],
}
