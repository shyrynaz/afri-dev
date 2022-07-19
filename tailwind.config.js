/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: ['nav nav nav nav', 'sidebar leftmenu content rightmenu'],
        small: ['nav', 'content']
      },
      gridTemplateColumns: {
        layout: '0.7fr 0.9fr 1.5fr 0.9fr',
        small: '1fr'
      },
      gridTemplateRows: {
        layout: '2.75rem 3fr'
      }
    }
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')]
};
