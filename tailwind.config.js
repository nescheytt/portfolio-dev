/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,tsx}',
    './src/pages/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '5/7': '5 / 7',
      },
      sepia: {
        25: '.25',
        50: '.50',
        75: '.75',
      },
      scale: {
        '5': '5',
      }
    },
  },
  plugins: [],
}
