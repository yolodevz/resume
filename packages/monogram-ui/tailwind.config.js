const plugin = require("tailwindcss/plugin");
const { createFluidFontSize } = require("utils");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        "heart-beat": {
          "0%": { transform: "scale(0.8)" },
          "5%": { transform: "scale(0.9)" },
          "10%": { transform: "scale(0.8)" },
          "15%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(0.8)" },
        },
      },
      animation: {
        "heart-beat": "heart-beat 1.2s infinite",
      },
      fontSize: {
        "fluid-computer-screen": createFluidFontSize(6, 10),
        "fluid-base": createFluidFontSize(16, 18),
        "fluid-md": createFluidFontSize(18, 24),
        "fluid-lg": createFluidFontSize(24, 58),
        "fluid-xl": createFluidFontSize(32 * (16 / 18), 76),
        "fluid-2xl": createFluidFontSize(48 * (16 / 18), 133),
      },
      backgroundImage: {
        "squiggly-section-end":
          "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1512' height='214' viewBox='0 0 1512 214' fill='none'%3e%3cpath d='M0 0H1512V142.667C1512 142.667 1439 165.822 1302.5 165.822C1166 165.822 1036 104.946 821 104.946C606 104.946 484.5 214 304.5 214C124.5 214 0 142.667 0 142.667V0Z' fill='%23151515'/%3e%3c/svg%3e\")",
        "text-gradient":
          "url(\"data:image/svg+xml;charset=UTF-8,%3csvg id='visual' viewBox='0 0 200 150' width='200' height='150' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3e%3cdefs%3e%3cfilter id='blur1' x='-10%25' y='-10%25' width='120%25' height='120%25'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur stdDeviation='37' result='effect1_foregroundBlur'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3c/defs%3e%3crect width='200' height='150' fill='%23fdc087'%3e%3c/rect%3e%3cg filter='url(%23blur1)'%3e%3ccircle cx='86' cy='50' fill='%23cd7ca0' r='83'%3e%3c/circle%3e%3ccircle cx='46' cy='12' fill='%23fdc087' r='83'%3e%3c/circle%3e%3ccircle cx='143' cy='135' fill='%23cd7ca0' r='83'%3e%3c/circle%3e%3ccircle cx='129' cy='56' fill='%23cd7ca0' r='83'%3e%3c/circle%3e%3ccircle cx='184' cy='148' fill='%23fdc087' r='83'%3e%3c/circle%3e%3ccircle cx='176' cy='49' fill='%23cd7ca0' r='83'%3e%3c/circle%3e%3c/g%3e%3c/svg%3e\")",
      },
      textShadow: {
        score:
          "0px 0px 61px #53FB2A, 0px 0px 42px #E9E11F, 0px 0px 12px #53FB2A",
      },
      dropShadow: {
        score: ["0 0 0 #53fb2ac9", "0 0 6px #e9e11fc4", "0 0 2px #53FB2A"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
