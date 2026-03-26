/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Rubik"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2cd5c4',
          light: '#00D9CC',
          dark: '#1A5F7A',
        },
        accent: {
          DEFAULT: '#9BE870',
          light: '#B5F090',
          dark: '#7AC050',
        },
      },
    },
  },
  plugins: [],
};
