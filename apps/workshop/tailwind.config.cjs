/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './.storybook/preview.ts',
        './src/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/slices/**/*.{js,ts,jsx,tsx}',
    ],
    presets: [require('ui/tailwind.config')]
}
