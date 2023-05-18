/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        "spanish-white": "#F8EDE3",
        "early-dawn": "#FFFAE7",
        "catskill-white": "#F1F5F9;",
        "aqua-haze": "#F1F6F5",
        alabaster: "#F9F9F9",
        concrete: "#F3F3F3",
        ablack: "#151515",
      },
      height: {
        "1px": "1px",
      },
      width: {
        85: "85%",
        90: "90%",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      translate: {
        "screen-x": "100vw",
        "screen-y": "100vh",
        "0/0": "0%",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
