/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        blink: "flash 1.5s linear infinite",
      },
      keyframes: {
        flash: {
          "0%": { opacity: "0%" },
          "5%, 50%": { opacity: "100%" },
          "55%, 100%": { opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
};
