module.exports = {
  content: [
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/slices/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [require("ui/tailwind.config")],
};
