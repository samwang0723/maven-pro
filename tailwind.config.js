/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-opentype'),
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
};
