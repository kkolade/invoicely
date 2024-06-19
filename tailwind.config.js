/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/views/**/*.{html,js,ejs}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
