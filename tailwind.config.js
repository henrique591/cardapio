/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Roboto', 'sans-serif']
      },
      backgroundImage:{
        'home':"url(/assests/bg.png)",
      }
    },
  },
  plugins: [],
}

