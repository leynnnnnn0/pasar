/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EEF7FE',
        'secondary': '#578EF5',
        'dark-orange': '#567DF4',
        'gray': '#333333',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'thick': '4px 4px', // Custom thick shadow
      },
    },
  },
  plugins: [],
}

