/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4f46e5",
        "secondary": "#63513d",
        text: {
          "primary": "#1e293b",
        },
        bg: {
          "primary": "#8f7247",
        }
      },
      
    },
  },
  plugins: [],
}
