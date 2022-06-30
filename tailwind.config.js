// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js}",
//     "./node_modules/tw-elements/dist/js/**/*.js",
//   ],
//   theme: {
//     extend: {
//       backgroundColor: {
//         "half-transparent": "rgba(0, 0, 0, 0.5)",
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("tw-elements/dist/plugin")],
// };

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
