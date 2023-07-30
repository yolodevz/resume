const { createFluidFontSize } = require("utils");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "fluid-xxs": createFluidFontSize(10, 11),
        "fluid-xs": createFluidFontSize(12, 14),
        "fluid-sm": createFluidFontSize(14, 16),
        "fluid-base": createFluidFontSize(16, 18),
        "fluid-lg": createFluidFontSize(18, 20),
        "fluid-xl": createFluidFontSize(20, 24),
        "fluid-2xl": createFluidFontSize(32, 68),
        "fluid-3xl": createFluidFontSize(42, 130),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
