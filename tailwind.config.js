/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/preline/preline.js',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
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
