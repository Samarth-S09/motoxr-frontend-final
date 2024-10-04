/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-2xl': '1400px', 
        'custom-1200': '1200px', 
        'custom-900': '900px', 
      },
      colors: {
        'primary': '#42ed18',
        'primary2': '#2e9e12',
        'primary-dark': "#1f600f",
        'primary-light': '#daf4ce',
        'grey-color': '#aaaaaa',
        'text-dark': '#0a0a0a',
        'text-light': '#506e52',
        'extra-light': '#f8fafc'
      }
    },
  },
  plugins: [],
}

