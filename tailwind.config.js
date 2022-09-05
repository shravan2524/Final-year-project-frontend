/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary' : '#0052CC',
      'gray' : '##8F92A1',
      'white': '#ffffff',
      'bluec' : '#4AE8ED',
      'black' : '#000000',
      'navcol' : '#222831',
      'green' : '#1CBC9B',
      'working' : '#99ff99',
      'linkc' : "#0085FF",
      'linec' : "#393E46",
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#848484',
      'bubble-gum': '#ff77e9',
      'grey': '#EEEEEE',
      'bgc' : 'rgba(143, 146, 161, 0.05)',
    },
    fontFamily : {
      'fontPrimary': ['"fontPrimary"', 'lexend'] 
    }
  },
  plugins: [
]
}