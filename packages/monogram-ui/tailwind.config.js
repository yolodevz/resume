const { createFluidFontSize } = require("utils");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "fluid-base": createFluidFontSize(16, 18),
        "fluid-md": createFluidFontSize(18, 24),
        "fluid-lg": createFluidFontSize(20, 26),
        "fluid-xl": createFluidFontSize(32 * (16 / 18), 76),
        "fluid-2xl": createFluidFontSize(42 * (16 / 18), 133),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
