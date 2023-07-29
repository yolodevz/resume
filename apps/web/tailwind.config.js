module.exports = {
  content: [
    "../../packages/yolo-ui/src/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [require("@yolo/ui/tailwind.config")],
};
