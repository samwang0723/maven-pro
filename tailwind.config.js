/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-opentype'),
  ],
  daisyui: {
    themes: [
      'dark',
      {
        cupcake: {
          ...require('daisyui/src/theming/themes')['cupcake'],
          'base-100': '#f0f0f0',
        },
      },
    ],
  },
};
