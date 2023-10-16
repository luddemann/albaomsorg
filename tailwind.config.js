/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    ringColor: {
      DEFAULT: '#4D9EC3',
    },
    ringWidth: {
      DEFAULT: '3px',
    },
    ringOpacity: {
      DEFAULT: '100',
    },
    extend: {
      colors: {
        'alba-red': '#70002D',
        'alba-orange': '#FF7500',
        'alba-dark-green': '#003F1C',
        'alba-blue': '#0096FD',
        'alba-pink': '#FFC8DB',
        'alba-yellow': '#FCE9D1',
        'alba-light-green': '#ADFCC8',
        'alba-light-blue': '#D7F1FF',
      },
    },
  },
  plugins: [],
}

