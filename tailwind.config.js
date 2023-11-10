/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "brand-notification":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 27.5%, rgba(22, 93, 255, 0.16) 157.71%)",
      },
      colors: {
        "brand-dark-grey": "#19191A",
        "brand-light-grey": "#96979A",
        "brand-mild-grey": "rgba(229, 229, 230, 0.50)",
        "brand-text": "#1D2129",
        "brand-blue": "#0071E3",
        "brand-border": "#D4D4D4",
      },
      boxShadow: {
        "brand-testimonial":
          "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
        "brand-notification":
          "0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
