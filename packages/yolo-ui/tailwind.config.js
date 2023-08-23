const { createFluidFontSize } = require("utils");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        container: "1440px",
      },
      colors: {
        background: {
          primary: "hsl(var(--color-background-primary) / <alpha-value>)",
          secondary: "hsl(var(--color-background-secondary) / <alpha-value>)",
        },
        foreground: {
          primary: "hsl(var(--color-foreground-primary) / <alpha-value>)",
          secondary: "hsl(var(--color-foreground-secondary) / <alpha-value>)",
          tertiary: "hsl(var(--color-foreground-tertiary) / <alpha-value>)",
        },
      },
      fontFamily: {
        impact: ["var(--font-impact)"],
        helvetica: ["var(--font-helvetica)"],
        black: ["madeType-outerSans-black", "sans-serif"],
        light: ["madeType-outerSans-light", "sans-serif"],
        "black-outlined": ["madeType-outerSans-black-outlined", "sans-serif"],
        special: ["Dorsa", "sans-serif"],
      },
      borderRadius: {
        "2.5xl": "20px",
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
        // H1
        h1: createFluidFontSize(20, 24),
        "h1-lg": createFluidFontSize(24, 48),
        // H2
        "h2-xs": createFluidFontSize(8, 10),
        "h2-sm": createFluidFontSize(10, 12),
        h2: createFluidFontSize(12, 14),
        "h2-md": createFluidFontSize(14, 16),
        "h2-lg": createFluidFontSize(16, 24),
        // Body
        "body-sm": createFluidFontSize(10, 12),
        body: createFluidFontSize(14, 16),
        // Deco
        "deco-xs": createFluidFontSize(25, 40),
        "deco-sm": createFluidFontSize(32, 80),
        deco: createFluidFontSize(56, 160),
        "deco-md": createFluidFontSize(100, 180),
        "deco-lg": createFluidFontSize(56, 200),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
