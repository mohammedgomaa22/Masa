/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e4e0e1',
        dark: '#e4e0e1',
        light: '#e4e0e1',
        light_pro: '#e4e0e1',
        main_bg: '#e4e0e1',
      },

    },
  },
  plugins: [],
}