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
        "brand-auth":
          "radial-gradient(92.19% 89.74% at 32.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)",
        "brand-auth-layout-notified":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.92) 27.6%, #000 53.13%, rgba(0, 0, 0, 0.67) 81.77%, rgba(0, 0, 0, 0.00) 100%)",
      },
      colors: {
        "brand-grey-50": "rgba(229, 229, 230, 0.50)",
        "brand-grey-100": "#E5E5E6",
        "brand-grey-200": "#CACBCC",
        "brand-grey-300": "#B0B1B3",
        "brand-grey-400": "#96979A",
        "brand-grey-500": "#1D2129",
        "brand-grey-800": "#313233",
        "brand-grey-900": "#19191A",
        "brand-neutral-100": "#F2F2F2",
        "brand-neutral-300": "#D4D4D4",
        "brand-blue": "#0071E3",
      },
      boxShadow: {
        "brand-testimonial":
          "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
        "brand-notification":
          "0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04)",
        "brand-layer":
          "0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)",
      },
      dropShadow: {
        "brand-text": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
