/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      color:{
        'primary' : '#fefee3',
        'secondary': '#173b27',
        'text' : '#0a0a0a',
      }, 
      fontFamily: {
        heading: ['Bebas-Neue'],  
        ibm: ["IBM", "sans"],
      },
    },
  },
  plugins: [],
};
