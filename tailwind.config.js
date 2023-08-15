/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  safelist: [
    ...[200, 50, 20, 70].flatMap((i) => [`max-w-[${i}px]`, `max-h-[${i}px]`]), //ini buat ngebuat safelist classes secara manual, tapi ini make flat map!

    // 'max-w-[20px]',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/
    }
  ],
  plugins: [],
}

