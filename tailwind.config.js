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
      'primary': '#0052CC',
      'secondary' : 'rgba(0, 82, 204, 0.13)',
      'gray': '##8F92A1',
      'grey': '#EEEEEE',
      'bgc': 'rgba(143, 146, 161, 0.05)',
      'white':'#FFFFFF',
      'green' : '#22c55e',
      'red':'#f43f5e',
      'lightg' : '#F1F8FA',
      'darkg' : '#EDF1F8',
    },
    fontFamily: {
      'fontPrimary': ['"fontPrimary"', 'lexend']
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'lg': '20px',
      'xl': '28px',
      '2xl': '32px',
    },
  },
  plugins: [
  ]
}