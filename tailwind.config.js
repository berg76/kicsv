/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        vl: "76px",
      },
      fontFamily: {
        IstokWeb: ["Istok Web"],
        AbhayaLibre: ["Abhaya Libre"],
        Almarai: ["Almarai"],
        OpenSans: ["Open Sans"],
        Roboto: ["Roboto"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
