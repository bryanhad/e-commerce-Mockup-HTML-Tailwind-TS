/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  safelist: [
    `bg-red-500`,
    ...[200, 50, 20, 70].flatMap((i) => [`max-w-[${i}px]`, `max-h-[${i}px]`]), //ini buat ngebuat safelist classes secara manual, tapi ini make flat map!
  ],
  plugins: [],
}

