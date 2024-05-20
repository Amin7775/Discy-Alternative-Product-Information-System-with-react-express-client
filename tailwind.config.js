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
        custom_Dark : "#282930",
        page_bg: '#F2F2F2',
        // shared
        custom_blue : '#2d6ff7'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

