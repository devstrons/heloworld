// @ts-check

/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    //
  ],
}
