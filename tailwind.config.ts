module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#5A694B", // Color del cuerpo de textos
        titleGreen: "#91A37F",   // Color de "Mis 15"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        cursive: ["Cream Cake", "cursive"],
      },
    },
  },
  plugins: [],
};
