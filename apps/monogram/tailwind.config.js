/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/monogram-ui/src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("@monogram/ui/tailwind.config")],
};
