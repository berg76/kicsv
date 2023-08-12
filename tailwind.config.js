/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        acc1: 'url("/src/imgs/acc_bg.png")',
        acc2: 'url("/src/imgs/acc_bg2.png")',
        acc3: 'url("/src/imgs/acc_bg_last.png")',
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
        Noto: ["Noto Sans KR"],
      },
      listStyleImage: {
        store: 'url("/src/imgs/bullet1.png")',
        arrow: 'url("/src/imgs/bullet2.svg")',
        mark: 'url("/src/imgs/bullet3.svg")',
      },
    },
  },
  plugins: [],
};
