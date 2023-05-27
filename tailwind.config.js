/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '270': '270px',
        '350': '500px'
      },
      height: {
        '70': '70px',
        '350': '500px'
      },
      textColor: {
        'purple': '#33164f',
        'yellow': '#fdb927'
      },
      backgroundColor: {
        'purple': '#33164f',
        'yellow': '#fdb927'
      },
      fontFamily: {
        'play': ['Play'],
        'koulen': ['Koulen']
      }
    },
  },
  plugins: [],
};