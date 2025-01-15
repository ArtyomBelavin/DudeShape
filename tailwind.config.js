/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nav: '#161616',
        title: '#244D4D',
        descr: '#444444',
        accent: '#242424',
      },
    },
  },

  plugins: [],
};
