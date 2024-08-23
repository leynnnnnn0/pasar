/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFF5F0',
        'secondary': '#FFAE80',
        'dark-orange': '#FF8D4D',
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

