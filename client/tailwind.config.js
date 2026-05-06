/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0D0D0D",
          gold: "#D4AF37",
          softGold: "#F2D889",
          platinum: "#F5F5F5",
          charcoal: "#1A1A1A",
        },
        beige: {
          50: "#FDF8F3",
          100: "#FAF0E6",
          200: "#F5E6D1",
          300: "#F0DCBE",
          400: "#E8D4B0",
          500: "#D4C5B0",
          600: "#C4B5A0",
          700: "#A89578",
          800: "#8B7355",
          900: "#6B5D4F",
        },
        warm: {
          white: "#FFFEFC",
          gray: "#F5F5F0",
          brown: "#8B7355",
          gold: "#D4AF37",
          dark: "#4A4A4A",
        },
      },
      boxShadow: {
        glow: "0 8px 30px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};
