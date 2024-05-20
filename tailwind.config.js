/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: '"Roboto", sans-serif', 
      },
      colors:{
        // for light theme
        custom_Dark : "#282930"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

