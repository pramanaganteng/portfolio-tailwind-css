/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["test.html", "src/input.css", "src/output.css"],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        dark: '#0f172a',
        secondary: '#64748b',
        primary: '#3b82f6',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
