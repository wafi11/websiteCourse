/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#f6f8fd",
        secondary : "#dc3545",
        textColor : "231942",
        navbar : "#fff",
        navbarColor : "#0000"
      }
    },
  },
  plugins: [],
}