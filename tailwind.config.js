/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        jump: "url('./src/assets/ND5_2591.webp')",
      },
    },
  },
  plugins: [],
};
