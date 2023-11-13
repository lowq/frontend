/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        jump: "url('https://res.cloudinary.com/dz36uhdsn/image/upload/v1699907136/ND5_2591_zfztjv.webp')",
      },
    },
  },
  plugins: [],
};
