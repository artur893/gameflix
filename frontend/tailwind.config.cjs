/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#564d4d",
        "secondary": "#831010",
        "accent": "#db0000",
        "font": "	#ffffff",
        "bg": "#000000",
        "success": "#16a34a",
        "warning": "#DCB404",
        "error": "#dc2626",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#564d4d",
          "secondary": "#831010",
          "accent": "#db0000",
          "font": "	#ffffff",
          "bg": "#000000",
          "success": "#16a34a",
          "warning": "#DCB404",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}