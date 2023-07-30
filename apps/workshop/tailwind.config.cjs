/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './.storybook/preview.ts',
        './src/**/*.{js,ts,jsx,tsx}',
        '../../packages/@yolo/ui/src/**/*.{js,ts,jsx,tsx}',
        '../../packages/@monograms/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    presets: [require('@yolo/ui/tailwind.config'), require('@monogram/ui/tailwind.config')]
}
