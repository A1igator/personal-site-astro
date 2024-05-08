/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class", // or 'media' based on preference
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  // ...rest of the config
};
