/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
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
        page_bg: '#F2F2F2',
        // shared
        custom_Dark : "#282930",
        custom_blue : '#2d6ff7',
        // dark
        dark_page_bg : "#262626",
        dark_div_bg: "#323741",
        dark_text_1: "#e5e7eb",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

