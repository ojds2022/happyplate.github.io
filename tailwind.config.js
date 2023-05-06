/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-green": "#98fb98",
        pink: "#ffc0cb",
        "hot-pink": "#ff69b4",
        "corn-silk": "#fff8dc",
        "sky-blue": "#87ceeb",
      },
    },
    backgroundSize: {
      "50%": "50%",
    },
  },
  plugins: [],
};
