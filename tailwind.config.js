/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'space-x-xxs': '1vw',
        'space-x-xs': '2.5vw',
        'space-x-sm': '5vw',
        'space-x-md': '7.5vw',
        'space-x-lg': '10vw',
        'space-x-xl': '12.5vw',
        'space-x-2xl': '15vw',
        'space-y-xxs': '1vh',
        'space-y-xs': '2.5vh',
        'space-y-sm': '5vh',
        'space-y-md': '7.5vh',
        'space-y-lg': '10vh',
        'space-y-xl': '12.5vh',
        'space-y-2xl': '15vh',
      },
    },
  },
  plugins: [],
}

