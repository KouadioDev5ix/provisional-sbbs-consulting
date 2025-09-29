/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sbbsYellow: "var(--sbbsYellow)",
        sbbsBlue: "var(--sbbsBlue)",
        sbbsFooterColor: "var(--sbbsFooterColor)",
        sbbsWhite: "var(--sbbsWhite)",
        sbbsRed: "var(--sbbsRed)",
        sbbsBelge: "var(--sbbsBelge)",
        sbbsCustomOrange: "var(--sbbsCustomOrange)",
        sbbsBlueLigth: "var(--sbbsBlueLigth)",
        sbbsGrayLight: "var(--sbbsGrayLight)",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
