/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F5EFE6',
        brand: {
          brown: '#4A2410',
          'brown-dark': '#3D1A08',
          'brown-light': '#6B3B1F',
          cta: '#5C2D0E',
          footer: '#3D1A08',
          amber: '#B87333',
          card: '#EDE5DC',
          placeholder: '#E0D4C8',
        },
      },
    },
  },
  plugins: [],
}
