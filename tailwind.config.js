/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b3a781',
        dark: '#302f2d',
        light: '#d2c6b0',
        light_pro: '#fffae7',
        main_bg: '#1c1c5650',
      },

    },
  },
  plugins: [],
}