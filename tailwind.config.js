/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: ['nav nav nav', 'sidebar content rightmenu'],
        small: ['nav', 'content']
      },
      gridTemplateColumns: {
        layout: '0.7fr 1.75fr 0.9fr',
        small: '1fr'
      },
      gridTemplateRows: {
        layout: '4rem 3fr'
      }
    }
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')]
};
