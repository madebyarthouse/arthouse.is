/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Sage", "serif"],
        body: ["var(--playfair-display)", "serif"],
        awsMain: ["var(--aws-font-family-main)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
