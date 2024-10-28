/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        Yellow : 'hsl(47, 88%, 63%)',
        Gray500 : 'hsl(0, 0%, 42%)',
        Gray950 : 'hsl(0, 0%, 7%)',
      },
      boxShadow: {
        'custom-card': '8px 8px 0 -4px black, 8px 8px 0 0 black',
      },
      screens: {
        'tablet' : '577px'
      }
    },
  },
  plugins: [],
}

