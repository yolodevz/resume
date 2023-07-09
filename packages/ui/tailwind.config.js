const {
  createFluidFontSize,
} = require("./components/text/createFluidFontSize");

module.exports = {
  content: [
    "../../ui/components/**/*.{js,ts,jsx,tsx}",
    "../../ui/slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        black: ["madeType-outerSans-black", "sans-serif"],
        light: ["madeType-outerSans-light", "sans-serif"],
        "black-outlined": ["madeType-outerSans-black-outlined", "sans-serif"],
        special: ["Dorsa", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in .3s ease-in .2s 1 backwards",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      fontSize: {
        "fluid-xxs": createFluidFontSize(10, 11),
        "fluid-xs": createFluidFontSize(12, 14),
        "fluid-sm": createFluidFontSize(14, 16),
        "fluid-base": createFluidFontSize(16, 18),
        "fluid-lg": createFluidFontSize(18, 20),
        "fluid-xl": createFluidFontSize(20, 24),
        "fluid-2xl": createFluidFontSize(32, 68),
        "fluid-3xl": createFluidFontSize(42, 100),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
