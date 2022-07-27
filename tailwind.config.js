/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    screens: {
      xs: "420px",
      sm: "550px",
      md: "749px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "bg-main": "text-slate-300",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
