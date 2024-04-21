/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "putch-primary-400": '#6F60AB',
        "putch-primary-100": '#CBC6E1',
        "putch-primary-50": '#EAE8F3'
      },
      fontFamily: {
        'sans': ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
  ],
}

