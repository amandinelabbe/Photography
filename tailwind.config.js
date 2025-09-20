/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefaf8',
          100: '#fdf4f0',
          200: '#fae6db',
          300: '#f6d1bf',
          400: '#efaf94',
          500: '#e88b66',  // Cuivré/doré principal
          600: '#d97149',
          700: '#b85c3e',
          800: '#964d38',
          900: '#7a4232',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
      },
    },
  },
  plugins: [],
}