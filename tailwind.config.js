/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
