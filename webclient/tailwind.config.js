/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "background": "#f3f4f6",
      "backgroundDark": "#121212",
      "foreground": "#ffffff",
      "foregroundDark": "#282828",
      "textMain": "#000000",
      "textMainDark": "#ffffff",
      "textSecondary": "#9ca3af",
      "borderColor": "#e5e5e5",
      "borderColorDark": "#3d3e3f",
      "active": "#6161ff",
    },
    boxShadow: {
      "custom": "0 0 30px 2px rgba(255, 255, 255, 0.25)"
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}