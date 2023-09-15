/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        tektur: ["Tektur", "cursive"],
      },
      colors: {
        primary: "#65a30d",
      },
      screens: {
        xs: "475px",

        md: "640px",
        // => @media (min-width: 640px) { ... }

        xl: "1024px",
        // => @media (min-width: 1024px) { ... }

        "2xl": "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.slate.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  plugins: [],
};
